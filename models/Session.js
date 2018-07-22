
"use strict"; 
var redis = require('redis'); 
var client = redis.createClient();
var TTL_session = 86400 ; //24h 


class Session{

	static add_user (content,call_back){

		var this_user = content.ops[0];

		client.hmset('user:'+this_user._id, content.ops[0],(err, reply)=>{
		 	content.user_form_pass	= undefined;
		 	content.is_connect		= undefined;
			call_back(content)

		 	client.expire('user:'+this_user._id, TTL_session); 
		});
	}
}


module.exports = Session;