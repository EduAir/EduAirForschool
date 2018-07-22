
"use strict"; 

////////////////////////////Connection for MongoDb//////////////////////////////

var db_connection 	= require('../config/db');

var MongoObjectID 	= require("mongodb").ObjectID;
////////////////////////////Connection for MongoDb//////////////////////////////

var Elastic = require('../models/Elastic');//Model file for Elastic search

var request = require('request');
var cheerio = require('cheerio');






var path 		 	= require('path');
var date			= new Date();






class Intello{


	static verify_if_the_file_name_exist(hashName,Callback){

		db_connection(function(err, db){ 

			if(err){

				console.log(err)

			}else{
 				db.collection("user_file").find({'hashName':hashName}).toArray((err, results)=> { 

		        	if(err){
		        		console.log(err)
		        	}else{

		        		if(results.length==0){

		        			var verdict = true;

			        		Callback(verdict)
		        		}else{
				        	var verdict = false;

			        		Callback(verdict)
		        		}
		        	}
				});
			}
    	});
	}




	static add_new_file (content,call_back){ 

		db_connection(function(err, db){ 

			if(err){

				console.log(err)

	        	call_back({'statu':'problem','message':'fatal_error in db_connection'})

			}else{
				var text_extracted 			= content.text_extracted;
				content.create_at 			= date.getTime();
				content.view 				= 0;
				content.last_view			= 0;
				content.text_extracted 		= '';
				content.short_text			= '';
 				
			    db.collection("user_file").insert(content,(err, results)=> {

					if(err){

						console.log(err)

					}else{

						content 	= results.ops[0];

						if(content.pages!=undefined || content.type=='image'){

							content.text_extracted	= text_extracted;
							// content.text_extracted	= JSON.parse(JSON.stringify(text_extracted))
						}

						 
						Elastic.add_new_file(content,function  (response) { 
							
							call_back({'statu':'ok','last_inserted_id_on_mongoDb':results.insertedIds[0]})
						})
					}
				})
			}
    	})
	}




	static get_file (content,call_back){ 

		db_connection(function(err, db){ 

			if(err){

				console.log(err)

	        	call_back({'statu':'problem'})

			}else{
				var objToFind     = { _id: new MongoObjectID(content.file_id) }; // Objet qui va nous servir pour effectuer la recherche
						
				db.collection("user_file").findOne(objToFind, function(error, result) {
		    		
		    		if (error) {
		    			console.log(error)

		    			call_back({'statu':'problem','message':'I have a problem to get file'})
		    		}else{
		    			call_back(result)
		    		}
				});
			}
    	});
	}




	static delete_file (data,call_back){ 

		db_connection(function(err, db){ 

			if(err){

				console.log(err)

	        	call_back({'statu':'problem'})

			}else{

				db.collection("user_file").remove({_id: new MongoObjectID(data.file_id)}, function(err, obj){

					if (err) {
		                console.log(err);

	    				call_back({'statu':'problem','message':'I have a problem to delete file on database'})

			        }else{
			            
			            //Delete file on elasticsearch
		            	Elastic.delete_file(data.file_id)

		            	call_back(data)
			        }
				})
    		}
    	});
	}



	static get_all_files (call_back){ 

		db_connection(function(err, db){ 

			if(err){

				console.log(err)

	        	call_back({'statu':'problem'})

			}else{

				db.collection("user_file").find({}).toArray(function(error, result) { 
		    		
		    		if (error) {

		    			console.log(error)

		    			call_back({'statu':false,'message':'I have a problem to get all files'})
		    		}else{

		    			if(result==null){
		    				call_back({'statu':true,'files':false})
		    			}else{
		    				call_back({'statu':true,'files':result})
		    			}
		    			
		    		}
				})
    		}
    	});
	}


			
	static search(data,Callback){ 

		//First of all, I record the search term
		record_search(data)

		//In wich library should I search
		var library = data.library;

		switch(library){

			case 'wikipedia':

				request(data.protocol+data.ip_server+':'+data.zim_port+'/search?content='+data.zim_wikipedia+'&pattern=+'+RemoveAccents(data.term.toLowerCase())+'&start='+data.start+'&end='+data.end, function (error, response, html) {
  					
  					if (!error && response.statusCode == 200) { 
    					
    					var $ = cheerio.load(html);

    					if($('.header').text().indexOf('No result were found')==-1){ //IF we have results

				        	//1 We get the number of results
					        var total_results = $(".results ul li").length;

					        var all_results = [];

					        for (var i = 0; i < total_results; i++) {

					        	var this_results = [];//Results should be [title,link,cite]

					        	this_results.push($('.results ul li a').eq(i).text())
					        	this_results.push($('.results ul li a').eq(i).attr('href').replace(data.zim_wikipedia,'wp?url='))
					        	this_results.push($('.results ul li cite').eq(i).text())

					        	all_results.push(this_results)

					        	if(total_results -1==i){ 

					        		var wikipedia = {'search_string':data.term,'all_results':all_results};

					        		////////////we get the start and the end of the pagination///////////////////////////////
					     
					        		var start = data.start+20;

					        		var end   = start+20;
					        		////////////we get the start and the end of the pagination///////////////////////////////

					        		Callback({'statu':'ok','wikipedia':wikipedia,'library':library,'search_string':data.term,'start':start,'end':end})
					        	}
				        	}
				        }else{

				        	Callback({'statu':'fail','library':library,'search_string':data.term,'message':'no_result'})
				       	}

  					}else{

  						Callback({'statu':'fatal_error'})
				    		
				    	console.log(error)
  					}
				});

			break;

			case 'image':
				data.media ='image';
				Elastic.search_these_media(data,function (results) {
					
					Callback({'statu':'ok','results':results,'library':library,'search_string':data.term,'start':data.start+20,'end':data.end+20})
				})
			break;

			case 'audio_video':
				data.media ='audio_video';
				Elastic.search_these_media(data,function (results) {
					
					Callback({'statu':'ok','results':results,'library':library,'search_string':data.term,'start':data.start+20,'end':data.end+20})
				})
			break;

			case 'document':
				data.media='text';
				Elastic.search_these_media(data,function (results) {
					
					Callback({'statu':'ok','results':results,'library':library,'search_string':data.term,'start':data.start+20,'end':data.end+20})
				})
			break;
		}
	}


	static get_sample_image(data,Callback){

		Elastic.get_sample_image(data,function (results) {
					
			Callback(results)
		})	
	}



	static get_wikipedia_article(data,Callback){

		get_wikipedia_article(data,function  (results) {
			
			Callback(results);
		})
	}


	static get_suggestion(search_string,Callback){

		get_suggestion(search_string,function  (results) {
			
			Callback(results)
		})
	}


	static go_get_media(media,Callback){

		go_get_media(media,function  (results) {
			
			Callback(results)
		})
	}


	static add_new_comment_to_the_file(comment,Callback){ //{'user_id':user_id,'user_text':user_text,'file_id':file_id,'comment_id':comment_id}

		db_connection(function(err, db){ 

			if(err){

				console.log(err)

	        	call_back({'statu':'problem','message':'fatal_error in db_connection'})

			}else{
				
				comment.create_at = date.getTime(); 

				if(comment.comment_id!='false'){ //If the user respond to a comment comment.comment_id

					db.collection("user_file_comment").update({_id:new MongoObjectID(comment.comment_id)}, {$push: {"comment":comment}},(err, results)=> {

						if(err){

							console.log(err)

						}else{ 

							Callback({'statu':true,'comment_id':comment.comment_id})
						}
					})
				}else{ //if ot is a new comment
					comment.comment = []; //We prepare other comments to this comment

					db.collection("user_file_comment").insert(comment,(err, results)=> {

						if(err){

							console.log(err)

							Callback({'statu':false})
						}else{
							
							Callback({'statu':true,'comment_id':results.insertedIds[0]})
						}
					})
				}
			}
    	})
	}


	static delete_comment_to_the_file(comment_id,call_back){

		// structure { user_id: '489345',comment_id: '5a797858bcabde07b567ed06',response_index:0,comment_text: 'text',response_text: 'text','real_timestamp':'real_timestamp' }
		
		db_connection(function(err, db){ 

			if(err){

				console.log(err)

	        	call_back({'statu':'problem'})

			}else{

				db.collection("user_file_comment").remove({_id:new MongoObjectID(comment_id)}, null, function(error, result) {

					if(error) {

		    			console.log(error)

		    			call_back({'statu':false,'message':'I have a problem to delete comment'})
		    		}else{
		    			call_back({'statu':true})
		    		}
				})
			}
    	});
	}





	static update_comment_to_the_file(new_comment,call_back){ 

		// structure { user_id: '489345',comment_id: '5a797858bcabde07b567ed06',response_index:0,comment_text: 'text',response_text: 'text','real_timestamp':'real_timestamp' }
	
		db_connection(function(err, db){ 

			if(err){

				console.log(err)

	        	call_back({'statu':'problem'})

			}else{

				db.collection("user_file_comment").update({_id:new MongoObjectID(new_comment.comment_id)}, { $set: {"user_text": new_comment.comment_text} }, function(error, result) {

					if(error) {

		    			console.log(error)

		    			call_back({'statu':false,'message':'I have a problem to update comment'})
		    		}else{
		    			call_back({'statu':true})
		    		}
				})
			}
    	});
	}



	static delete_response_to_the_file_comment(response,call_back){ 

		// structure { user_id: '489345',comment_id: '5a797858bcabde07b567ed06',response_index:0,comment_text: 'text',response_text: 'text','real_timestamp':'real_timestamp' }

		db_connection(function(err, db){ 

			if(err){

				console.log(err)

	        	call_back({'statu':'problem'})

			}else{

				db.collection("user_file_comment").update( {_id:new MongoObjectID(response.comment_id)}, { $pull: { comment: {user_text:response.response_text,create_at:response.real_timestamp*1 } }},function  (error,result) {
					
					if(error) {

		    			console.log(error)

		    			call_back({'statu':false,'message':'I have a problem to delete response'})
		    		}else{
		    			call_back({'statu':true})
		    		}
				});
			}
    	});
	}





	static update_response_to_the_file_comment(new_response,call_back){

		// structure { user_id: '489345',comment_id: '5a797858bcabde07b567ed06',response_index:0,comment_text: 'text',response_text: 'text','real_timestamp':'real_timestamp' }
		
		db_connection(function(err, db){ 

			if(err){

				console.log(err)

	        	call_back({'statu':'problem'})

			}else{

				var this_index =  new_response.response_index;

				var setModifier = { $set: {} }; //Comment[0].user_text

				setModifier.$set['comment.'+this_index+'.user_text'] = new_response.response_text;

				db.collection("user_file_comment").update({_id:new MongoObjectID(new_response.comment_id)}, setModifier, function(error, result) {

					if(error) {

		    			console.log(error)

		    			call_back({'statu':false,'message':'I have a problem to update comment'})
		    		}else{
		    			call_back({'statu':true})
		    		}
				})
			}
    	});
	}



	static get_file_comments (file_id,call_back){ 

		db_connection(function(err, db){ 

			if(err){

				console.log(err)

	        	call_back({'statu':'problem'})

			}else{

				db.collection("user_file_comment").find({"file_id":file_id}).toArray(function(error, result) { 
		    		
		    		if (error) {

		    			console.log(error)

		    			call_back({'statu':false,'message':'I have a problem to get file'})
		    		}else{

		    			if(result==null){
		    				call_back({'statu':true,'comments':false})
		    			}else{
		    				call_back({'statu':true,'comments':result})
		    			}
		    			
		    		}
				})
			}
    	});
	}


	static get_my_file (call_back){ 

		db_connection(function(err, db){ 

			if(err){

				console.log(err)

	        	call_back({'statu':false})

			}else{

				db.collection("user_file").find({}).sort({ "create_at": -1}).toArray(function(error, recent) { 
		    		
		    		if (error) {

		    			console.log(error)

		    			call_back({'statu':false,'message':'I have a problem to get file'})
		    		}else{

		    			if(recent==null){

		    				call_back({'statu':false})
		    			}else{

		    				db.collection("user_file").find({}).sort({ "view": -1}).toArray(function(error, popular) { 
		    		
					    		if (error) {

					    			console.log(error)

					    			call_back({'statu':false,'message':'I have a problem to get file'})
					    		}else{

					    			if(popular==null){
					    				call_back({'statu':false})
					    			}else{
					    				call_back({'recent':recent,'popular':popular})
					    			}
					    		}
							})
		    			}
		    		}
				})
			}
    	});
	}




}


module.exports = Intello;





function record_search (data) {
	
	//If it's a new term ToDo

	//Else, nothing
}




function RemoveAccents(strAccents) {
		var strAccents = strAccents.split('');
		var strAccentsOut = new Array();
		var strAccentsLen = strAccents.length;
		var accents = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
		var accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
		for (var y = 0; y < strAccentsLen; y++) {
			if (accents.indexOf(strAccents[y]) != -1) {
				strAccentsOut[y] = accentsOut.substr(accents.indexOf(strAccents[y]), 1);
			} else
				strAccentsOut[y] = strAccents[y];
		}
		strAccentsOut = strAccentsOut.join('');
		return strAccentsOut;
}



function get_wikipedia_article (data,Callback) {


	request(encodeURI(data.protocol+data.ip_server+':'+data.zim_port+'/'+data.zim_wikipedia+data.my_url),function  (error,response,html) {
		
		if(!error && response.statusCode == 200){

			var results = {};

			var $ = cheerio.load(html);
			//http://192.168.8.40:8100/wikipedia_fr_all_11_2013/I/media/U/b/u/n/Ubuntu_13.10_Saucy_Salamander.jpg

			results.text = $('#content').html().replace(/src="\/wikipedia_fr_all_11_2013/g, 'src="http://'+data.ip_server+':'+data.zim_port+'/'+data.zim_wikipedia+'/').replace(/href="\/wikipedia_fr_all_11_2013/g, 'href="wp?url=')
			results.title= $('#firstHeading').text();

			//Todo record image inside

			Callback(results)
		}else{
			console.log(error)
		}
	})
}


function get_suggestion (data,Callback) {

	//we get suggestions on wikipedia
	
	request(data.protocol+data.ip_server+':'+data.zim_port+'/search?content='+data.zim_wikipedia+'&pattern=+'+data.search_string.toLowerCase(), function (error, response, html) {
  					
		if (!error && response.statusCode == 200) { 
		
			var $ = cheerio.load(html);

			if($('.header').text().indexOf('No result were found')==-1){ //IF we have results

	        	//1 We get the number of results
		        var total_results = $(".results ul li").length;

		        if(total_results>0){

		        	var all_results = [];

			        for (var i = 0; i < total_results; i++) {

			        	var this_results = [];//Results should be [title,link,cite]

			        	this_results.push($('.results ul li a').eq(i).text())
			        	this_results.push($('.results ul li a').eq(i).attr('href').replace(data.zim_wikipedia,'wp?url='))
			        	this_results.push($('.results ul li cite').eq(i).text())

			        	all_results.push(this_results)

			        	if(total_results -1==i){ 

			        		get_suggestion_media(data.search_string,function  (media_response) {
			        			
			        			Callback({'wikipedia':all_results,'media':media_response})
			        		})
			        	}
		        	}
		        }else{

		        	get_suggestion_media(data.search_string,function  (media_response) {
			        			
			        	Callback({'wikipedia':[],'media':media_response})
			        })
		        }
	        }else{

	        	get_suggestion_media(data.search_string,function  (media_response) {
		        			
		        	Callback({'wikipedia':[],'media':media_response})
		        })
	       	}

		}else{

			get_suggestion_media(data.search_string,function  (media_response) {
		        			
		        Callback({'wikipedia':[],'media':media_response})
		    })
    		
    		console.log(error)
		}
	});
}


function get_suggestion_media (search_string,Callback) {
	
	Elastic.get_suggestion_media(search_string,function  (results) {
		
		Callback(results)
	})
}


function go_get_media (media,Callback) {
	
	db_connection(function(err, db){ 

		if(err){

			console.log(err)

		}else{
				db.collection("user_file").find({'hashName':media}).toArray((err, results)=> { 

	        	if(err){
	        		console.log(err)
	        	}else{

	        		if(results.length==0){

	        			var data = {};
	        			data.response='fail';

		        		Callback(data)
	        		}else{

	        			set_file_view(results[0]._id,media)

	        			//We update views number
	        			// db.collection("user_file").update({"hashName":media},{$inc:{"view":1}})
			        	Callback(results[0])
	        		}
	        	}
			});
		}
    });
}





function set_file_view (file_id,hashName,call_back){ 

		db_connection(function(error, db){ 

			if(error){

				console.log(error)
			}else{

				db.collection("user_file").update({"hashName":hashName},{$inc:{"view":1}},{ $set: {"last_view": date.getTime()}})

				Elastic.set_file_view(file_id)
			}
    	});
}



