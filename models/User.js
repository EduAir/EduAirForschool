
"use strict"; 
var db_connection = require('../config/db');
var MongoObjectID = require("mongodb").ObjectID;

var bcrypt		  = require('bcrypt-nodejs');




class User{



	static login (content,call_back){

		db_connection(function(err, db){

			if(err){

				console.log(err)

	        	call_back({'statu':'problem','type':'critic','message':'fatal_error'})
			}else{
				
				db.collection("user_data").find({'user_number':content.user_number}).toArray((error, results)=> { 

		        	if(err){

		        		console.log(err);

		        		call_back({'statu':'problem','type':'critic','message':'fatal_error'})

		        	}else{
		        		if(results.length!=0){

			        		var user= [];
		 
			        		results.forEach(function(obj, i) { 

			        			if(bcrypt.compareSync(content.user_form_pass, obj.user_form_pass)){

			        				user.push(obj)
			        			}
					            if(i==results.length-1){

					            	if(user.length>1){

					            		console.log('fatal error');
					            		call_back({'statu':'problem','message':'fatal error'})
					            	}else{

					            		if(user.length==1){

					            			call_back({'statu':'ok','results':user})
					            		}else{

					        				call_back({'statu':'problem','message':'no matching'})
					            		}
					            	}
				            	}
	        				})
		        		}else{

				        	call_back({'statu':'problem','message':'no matching'})
		        		}
		        	} 
				})

			} 

	        
    	});
	}


	static registrar (content,call_back){ 

		db_connection(function(err, db){ 

			if(err){

				console.log(err)

	        	call_back({'statu':'problem','type':'critic','message':'fatal_error'})

			}else{
 				db.collection("user_data").find({'user_number':content.user_number}).toArray((err, results)=> { 

		        	if(err){
		        		console.log(err)

	        			call_back({'statu':'problem','type':'critic','message':'fatal_error'})

		        	}else{

		        		if(results.length==0){

			        		db.collection("user_data").insert(content,(err, results)=> {

								if(err){
									console.log(err)
								} else{
									call_back({'statu':'ok','results':results})
								}
							});
		        		}else{
				        	call_back({'statu':'problem','message':'used'})
		        		}
		        	}
				});
			}
    	});
	}





	static set_my_profil (content,call_back){ 

		db_connection(function(error, db){ 

			if(error){

				console.log(error)

	        	call_back({'statu':'problem'})

			}else{
				var objToFind     = { _id: new MongoObjectID(content.user_id) }; // Objet qui va nous servir pour effectuer la recherche

				db.collection("user_data").update(objToFind,{ $set: content.data},(error,results)=>{

					if(error){
		        		console.log(error)

	        			call_back({'statu':'problem'})

		        	}else{

		        		call_back({'statu':'ok'})
		        	}
				})
			}
    	});
	}




	static get_my_profil (content,call_back){ 

		db_connection(function(err, db){ 

			if(err){

				console.log(err)

	        	call_back({'statu':'problem'})

			}else{
				var objToFind     = { _id: new MongoObjectID(content.user_id) }; // Objet qui va nous servir pour effectuer la recherche

						
				db.collection("user_data").findOne(objToFind, function(error, result) {
		    		if (error) {
		    			console.log(error)
		    		}else{
		    			call_back(result)
		    		}  
				});
			}
    	});
	}

	
	
	////////////////////////////////////////////////////////For admin//////////////////////////////////////////////////////////////////

	static login_admin (content,call_back){

		db_connection(function(err, db){

			if(err){

				console.log(err)

	        	call_back({'statu':'problem','type':'critic','message':'fatal_error'})
			}else{
				
				db.collection("administrators").find({'user_number':content.user_number}).toArray((error, results)=> { 

		        	if(err){ 

		        		console.log(err);

		        	}else{
		        		if(results.length!=0){

			        		var user= [];
		 
			        		results.forEach(function(obj, i) { 

			        			if(bcrypt.compareSync(content.user_form_pass, obj.user_form_pass)){

			        				user.push(obj)
			        			}
					            if(i==results.length-1){

					            	if(user.length>1){ 

					            		console.log('fatal error');
					            		call_back({'statu':'problem','message':'fatal error'})
					            	}else{

					            		if(user.length==1){

					            			call_back({'statu':'ok','results':user})
					            		}else{

					        				call_back({'statu':'problem','message':'no matching'})
					            		}
					            	}
				            	}
	        				})
		        		}else{

		        			//OWe create a collection
			        		if(content.user_number=='admin' && content.user_form_pass=='admin'){

			        			content.user_form_pass = bcrypt.hashSync(content.user_form_pass) //Hash password

			        			db.collection("administrators").insert(content,(err, results)=> {

									if(err){
										console.log(err)
									} else{ 

										call_back({'statu':'ok','new_admin':'ok','results':results})
									}
								});
			        		}else{

			        			call_back({'statu':'problem','message':'no matching'})
			        		}
		        		}
		        	} 
				})

			} 

	        
    	});
	}
}


module.exports = User;