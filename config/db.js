
"use strict"; 

var mongodb = require('mongodb');

var MongoClient = mongodb.MongoClient;

var url_db = "mongodb://localhost/eduair";

module.exports = function(callback) { 

   MongoClient.connect(url_db, callback) 

}
