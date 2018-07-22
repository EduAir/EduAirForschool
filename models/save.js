"use strict"; 
var db_connection = require('../config/db');
var MongoObjectID = require("mongodb").ObjectID;

class Save{

	static saveVideo(obj, callback){

		db_connection(function(err, db){
			var collection = db.collection('videos');
			  // Insert some documents 
			collection.insert(
			    obj, 
			    function(err, result) {
			    console.log("Inserted 1 video into the document collection");
			    callback(result);
			});
		});

	}

	
}

module.exports = Save;