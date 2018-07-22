
"use strict"; 
var db_connection = require('../config/db');
var MongoObjectID = require("mongodb").ObjectID;

var bcrypt		  = require('bcrypt-nodejs');




class Admin{

	static get_school (content,call_back){

		db_connection(function(err, db){

			if(err){

				console.log(err)

	        	call_back({'statu':'problem','type':'critic','message':'fatal_error'})
			}else{
				
				db.collection("list_statu_user").find().toArray((error, results)=> { 

		        	if(err){

		        		console.log(err);

		        		call_back({'statu':'problem','type':'critic','message':'fatal_error'})

		        	}else{
		        		if(results.length!=0){ 

			        		call_back({'statu':'ok', 'results':results})
		        		}else{

				        	db.collection("list_statu_user").insert(content,(err, results)=> {

								if(err){
									console.log(err)
								}else{ 

									Admin.get_school(content,call_back)
								}
							});
		        		}
		        	} 
				})
			} 
    	})
	}



	static add_school (content,call_back){

		db_connection(function(err, db){

			if(err){

				console.log(err)

	        	call_back({'statu':'problem','type':'critic','message':'fatal_error'})
			}else{
				
				db.collection("list_statu_user").find().toArray((error, results)=> { 

		        	if(error){

		        		console.log(error);

		        		call_back({'statu':'problem','type':'critic','message':'fatal_error'})

		        	}else{
		        		if(results.length!=0){

		        			//we insert the content on results

		        			var content_to_update = results[0];

		        			var this_school =  results[0].students;

		        			for (var i = 0; i < this_school.length; i++) {
		        				
		        				if(this_school[i].name==content.list_name){

		        					content_to_update.students[i].list.push(content.element)
		        				}

		        				if(i==this_school.length-1){ 

		        					//Insert the update the collection 

		        					var MongoObjectID = require("mongodb").ObjectID; // Il nous faut ObjectID

		        					var objToFind     = { _id: new MongoObjectID(results[0]._id) }; // Objet qui va nous servir pour effectuer la recherche

		        					db.collection("list_statu_user").findOne(objToFind, function(error, result) {
									    
									    if(error){
											console.log(error)
										}else{ 

											db.collection("list_statu_user").update(objToFind,{ $set: content_to_update },(error,results)=>{
												
												if(error){
													console.log(error)
												}else{
													console.log(results)

													//we construct the new collection 
											 		Admin.get_school(content.all_list,call_back)
												}
											})
										} 
									});
		        				}
		        			}
		        		}else{
		        			//we construct the new collection 
				        	Admin.get_school(content.all_list,call_back)
		        		}
		        	} 
				})
			} 
    	})
	}



	static delete_school (content,call_back){

		db_connection(function(err, db){

			if(err){

				console.log(err)

	        	call_back({'statu':'problem','type':'critic','message':'fatal_error'})
			}else{
				
				db.collection("list_statu_user").find().toArray((error, results)=> { 

		        	if(error){

		        		console.log(error);

		        		call_back({'statu':'problem','type':'critic','message':'fatal_error'})

		        	}else{
		        		if(results.length!=0){

		        			//we insert the content on results

		        			var content_to_update = results[0];

		        			var this_school =  results[0].students;

		        			for(var i = 0; i < this_school.length; i++) {

		        				for (var j = 0; j < this_school[i].list.length; j++) {
		        					
		        					if(this_school[i].name==content.type_of_student && this_school[i].list[j].name==content.school){

		        						this_school[i].list.splice(j, 1)
		        					}
		        				}

		        				if(i==this_school.length-1){ 

		        					//Insert the update the collection 

		        					var MongoObjectID = require("mongodb").ObjectID; // Il nous faut ObjectID

		        					var objToFind     = { _id: new MongoObjectID(results[0]._id) }; // Objet qui va nous servir pour effectuer la recherche

		        					db.collection("list_statu_user").findOne(objToFind, function(error, result) {
									    
									    if(error){
											console.log(error)
										}else{ 

											db.collection("list_statu_user").update(objToFind,{ $set: content_to_update },(error,results)=>{
												
												if(error){
													console.log(error)
												}else{
													console.log(results)

													//we construct the new collection 
											 		Admin.get_school(content.all_list,call_back)
												}
											})
										} 
									});
		        				}
		        			}
		        		}else{
		        			//we construct the new collection 
				        	Admin.get_school(content.all_list,call_back)
		        		}
		        	} 
				})
			} 
    	})
	}

}


module.exports = Admin;