
"use strict"; 
var elasticsearch 	= require('elasticsearch');
var rest_client 	= require('node-rest-client').Client;
var base64 	= require('file-base64');
var exec 	= require('child_process').exec;

//Init elastic search .The Librarian
var hoster = 'localhost';
var elastic_port = '9200';
var client = new elasticsearch.Client({
  host: hoster+':'+elastic_port,
  log: 'error'
});


var intire_file_db	= 'intire_file_db';
var page_pdf_db		= 'page_pdf_db';





class Elastic{

	static add_new_file(content,call_back){ 

		if(content.format=='.pdf'){

			add_pdf_file(content,function  (results) {
				
				call_back(results)
			})

		}else{

			if(content.type=='image'){

				clean_text_extrated (content,function  (content_with_text_cleaned) {

					content.id_file_mongoDB = content._id;
					delete content._id;

					client.index({ 

				  		index: intire_file_db,

				  		type: intire_file_db,

				  		id:content.id_file_mongoDB.toString(),
			  
				  		body:content_with_text_cleaned

						},function(err,resp,status) { 

							if(err){
								console.log(err)
								call_back({'statu':'fail'})
							}else{
								call_back({'statu':'ok','message':resp})
							}
					})
				})
			}else{

				content.id_file_mongoDB = content._id;
				delete content._id;

				client.index({ 

			  		index: intire_file_db,

			  		type: intire_file_db,

			  		id:content.id_file_mongoDB.toString(),
		  
			  		body:content

					},function(err,resp,status) {
		    	
		    			if(err){
		    				console.log(err)
		    				call_back({'statu':'fail'})
							
						}else{
							call_back({'statu':'ok','message':resp})
						}
				})
			}
		}
	}


	static search_these_media(data,call_back) {

		search_all_media(data,function  (results) {
			
			call_back(results)
		})	
	}


	static get_sample_image(data,call_back) {

		get_sample_image(data,function  (results) {
			
			call_back(results)
		})	
	}



	static get_suggestion_media(search_string,Callback){

		get_suggestion_media(search_string,function  (results) {
			
			Callback(results)
		})
	}




	static set_file_view (file_id) { 
	
		client.update({ 

			"index": intire_file_db,

			"type": intire_file_db,
		  
			"id":file_id.toString(),

			"body":{

				"script": "ctx._source.view++"
			}

			},function(err,resp,status) { 
		    	
		    	if(err){
		    		console.log(err)
		    	}

		})
	}


	static delete_file(file_id){

		client.deleteByQuery({

			index: page_pdf_db,
			type:page_pdf_db,

			body: {
				    query: {
				      term: { id_file_mongoDB: file_id }
				    }
				  }
		}, function (err, response) {

			if(err){
		   		console.log(err)
		   	}else{
		   		
		   		client.bulk({
					body: [
					  
					    { delete: { _index: intire_file_db, _type: intire_file_db, _id: file_id } },
					  ]
					}, function (err, resp) {
					  
					   if(err){
					   		console.log(err)
					   }
				});
		   	}
		});
	}


}




module.exports = Elastic;



//This function is to extract any page of the pdf file
function add_pdf_file (content,Callback) { 

	var this_is_text 	= content.text_extracted; 
	var id_file_mongoDB = content._id;

	delete content.text_extracted;

	var body_bulk = [];
	
	//We loop the number of the pages of the content for recsearch inside the file
	//We record the wide file
	var page_number = 0;

	for (var i = 0; i < this_is_text.length; i++) { 

		var the_text			=  this_is_text[i].trim().replace(/[\r\n]/g, '').replace(/[^\x21-\x7E]+/g, ' ').replace(/^\s+|\s+$/g, '');
	
		var this_page_number	= page_number++;

		body_bulk.push({ index:  { _index: page_pdf_db, _type: page_pdf_db} })
		body_bulk.push({'text_page':the_text,'page_number':this_page_number,'id_file_mongoDB':id_file_mongoDB})

		if(this_is_text.length==i+1){ 

			var finalContent 			=  new Object();

			finalContent.fileName 		= content.fileName;
			finalContent.media 			= content.media;
			finalContent.type 			= content.type;
			finalContent.hashName 		= content.hashName;
			finalContent.thumbnail		= content.thumbnail;
			finalContent.size			= content.size;
			finalContent.original_path	= content.original_path,
			finalContent.original_ext	= content.original_ext,
			finalContent.final_path		= content.final_path,
			finalContent.final_ext		= content.final_ext,
			finalContent.pages			= content.pages;
			finalContent.format			= content.format;
			finalContent.create_at		= content.create_at;
			finalContent.user_id		= content.user_id;
			finalContent.view			= content.view;
			finalContent.last_view		= content.last_view;
			finalContent.title			= content.title;
			finalContent.description	= content.description;
			finalContent.tags			= content.tags;
			finalContent.text 			= this_is_text.join().trim().replace(/[\r\n]/g, '').replace(/[^\x21-\x7E]+/g, ' ').replace(/^\s+|\s+$/g, '');
			finalContent.short_text 	= this_is_text.join().trim().replace(/[\r\n]/g, '').replace(/[^\x21-\x7E]+/g, ' ').replace(/^\s+|\s+$/g, '').substr(0, 100);
			

			delete finalContent.text_extracted; 


			// body_bulk.unshift({'index':{'_type':'book','_id':id_file_mongoDB}},finalContent)

			// var parent = new object();
			// parent = {'index':}


			index_bulk_pdf(id_file_mongoDB,finalContent,body_bulk,function  (response) {
				
				Callback({'statu':'ok','message':'PDF file of '+finalContent.pages+' page(s) indexed'})
			});
		}
	}
}




function clean_text_extrated (content,Callback) {
	
	content.text_extracted = content.text_extracted.trim().replace(/[\r\n]/g, ''); //We remove any newline on the text on the image

	Callback(content)
}




function index_bulk_pdf (id_file_mongoDB,parent_content,child_content,Callback) { 

	client.index({ 

		index: intire_file_db,

		type: intire_file_db,

		id:id_file_mongoDB.toString(),

		body:parent_content

	},function(err) { 

		if(err){

			console.log(err)

			Callback({'statu':'fail'})

		}else{ 

			if(parent_content.pages*1>1){ //If the document as more than one page we bulk it

				client.bulk({

					index: page_pdf_db,

					type: page_pdf_db,

					body:child_content

					}, function (error,response,status) { 

						if(!error){

							Callback({'statu':'ok'})	
						}else{
							console.log(error)
						}
				})
			}else{
				Callback({'statu':'ok'})	
			}
		}
	})
}



function index_this_page (finalContent) { 
	

	client.index({ 

		index: intire_file_db,

		type: intire_file_db,
	  
		body:finalContent

		},function(err,resp,status) {
	    	
	    	if(err){
	    		console.log(err)
	    	}

	})
}







function search_all_media(data,call_back) {
	
	client.search({
	  	index: 	intire_file_db,
	  	type: 	intire_file_db,
	  	body:{
	  			size: 20,
    			from: data.start,
    			query:{

			  		bool: {
						must: [
						      {
						        query_string: {
						          	query: data.term,
						          	fields : ["text", "title^5","tags^4","description^4","text_extracted"],
              						use_dis_max : true
						        }
						      }
						    ],
						    should: [
						    	{
								    match_phrase: {
	            						"title" : data.term
	        						}
	        					},
        						{
        							multi_match : {  
        								fields : ["title"],
        								query : data.term,
        								fuzziness : "AUTO",
        								boost:0.5
        							}
						    	}
						    ],
						    filter: [
               				 	{ term:  { "media": data.media }}
            				]
					}
				},
			  	rescore:{
			  		window_size:50,
			  		query:{
			  			rescore_query:{
						    match_phrase : {
            					"title" : data.term
        					}
			  			}
			  		}
	  			} 	
		}
	},function(error, response,status) { 
			
			if (error) {
				console.log(error)
			}else{

				call_back(response.hits)
			}
		}
	)
}






function get_sample_image(data,call_back) {
	
	client.search({
	  	index: 	intire_file_db,
	  	type: 	intire_file_db,
	  	body:{
	  			size: 5,
    			from: 0,
    			query:{

			  		bool: {
						must: [
						      {
						        query_string: {
						          	query: data.term,
						          	fields : ["text_extracted", "title^5","tags^4","description^4"],
              						use_dis_max : true
						        }
						      }
						    ],
						    should: [
						    	{
								    match_phrase: {
	            						"title" : data.term
	        						}
	        					},
        						{
        							multi_match : {  
        								fields : ["title"],
        								query : data.term,
        								fuzziness : "AUTO",
        								boost:0.5
        							}
						    	}
						    ],
						    filter: [
               				 	{ term:  { "media": 'image' }}
            				]
					}
				},
			  	rescore:{
			  		window_size:50,
			  		query:{
			  			rescore_query:{
						    match_phrase : {
            					"title" : data.term
        					}
			  			}
			  		}
	  			} 	
		}
	},function(error, response,status) { 
			
			if (error) {
				console.log(error)
			}else{

				call_back(response.hits)
			}
		}
	)
}


function get_suggestion_media (search_string,Callback) { 
	
	client.search({
	  	index: 	intire_file_db,
	  	type: 	intire_file_db,
	  	body:{
	  			size: 20,
    			from: 0,
    			query:{

			  		bool: {
						must: [
						      {
						        query_string: {
						          	query: search_string,
						          	fields : ["title^5","tags^4","description^4"],
              						use_dis_max : true
						        }
						      }
						    ],
						    should: [
						    	{
								    match_phrase: {
	            						"title" : search_string
	        						}
	        					},
        						{
        							multi_match : {  
        								fields : ["title"],
        								query : search_string,
        								fuzziness : "AUTO",
        								boost:0.5
        							}
						    	}
						    ]
					}
				},
			  	rescore:{
			  		window_size:50,
			  		query:{
			  			rescore_query:{
						    match_phrase : {
            					"title" : search_string
        					}
			  			}
			  		}
	  			} 	
		}
	},function(error, response,status) { 
			
			if (error) {
				console.log(error)
			}else{

				Callback(response.hits)
			}
		}
	)
}