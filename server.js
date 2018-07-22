"use strict"; 

var express 	= require('express'),
os 				= require('os'),
bodyParser 		= require('body-parser'),
passwordHash 	= require('password-hash'),
redis 			= require('redis'),
formidable		= require("formidable"),
path			= require("path"),
//client 		= redis.createClient(),
session 		= require('express-session'),
flash 			= require('req-flash'),
redisStore 		= require('connect-redis')(session),
cookieParser    = require('cookie-parser'),
bcrypt			= require('bcrypt-nodejs'),
fs				= require('fs'),
http			= require('http'),
util 			= require('util'),
base64Img 		= require('base64-img'),
diskspace 		= require('diskspace'),

mime 			= require('mime'),//Get type mime of file
file_type_application = [	'application/pdf' ,
								'application/vnd.ms-powerpoint', //ppt
								'application/vnd.openxmlformats-officedocument.presentationml.presentation',//pptx
								'application/msword' ,//DOC
								'application/vnd.openxmlformats-officedocument.wordprocessingml.document'//docx
								];
var crypto 			= require('crypto'); //Generate a random hash

var media_library =path.join(__dirname, '..', 'private/');//Define the directory of media library

var exec = require('child_process').exec;	
 
var directoryPath_for_background = path.join(__dirname, 'public/img/background');





console.log('eduair loaded')

var activate_download = true;//To activating download file


var MaxFieldSize = 1000 * 1000,
    MaxFields = 100,
    MaxUploadSize = 1000 * 1000 * 1000;


var io = require('socket.io').listen(8083,{ log: false }) ;

var port 			= 80;
var redis_port		= 27017;
var TTL_session 	= 260 ; //24h 
var protocol		="http://";
var zim_port		= "8100";
var zim_wikipedia	= "wikipedia_fr_all_11_2013";

var port_video		=8000;


var media_library =path.join(__dirname, '.', 'private/');//Define the directory of media library


var min_character_user_full_name	= 5;
var min_character_user_number		= 5;
var min_character_user_password		= 4;


var language 	= require('./local_modules/language');

var User 		= require('./models/User');//Model user
var Admin 		= require('./models/Admin');//Model Admin
var filer  		= require('./models/Filer');//Model to manage files
var Intello  	= require('./models/Intello');//Model to manage files


var app = express();



app.set('view engine','ejs')

app.use('/assets', express.static('public'))
app.use('/assets_media', express.static('private'))
app.use('/socket', express.static('node_modules/socket.io-client/dist'))
app.use('/video', express.static('node_modules/video.js/dist'))

app.use(language)

app.use(cookieParser("secretSign#14LydieDjems3_!223"));


app.use( bodyParser.json()); // to support JSON-encoded bodies

app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
  	extended: true
}));


app.use(session({
  secret: '##Lydie##Dje##ms##',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
  name : 'SessionIdent'
}))


app.use(flash());







//////////////////////////////////////////Format accepted in upload////////////////////////////////////////////////////////
var file_type = ['video' ,'image' ,'audio'];
var file_type_application = [	'application/pdf' ,
								'application/vnd.ms-powerpoint',
								'application/vnd.openxmlformats-officedocument.presentationml.presentation',
								'application/msword' ,
								'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
//////////////////////////////////////////Format accepted in upload////////////////////////////////////////////////////////


/////////////////////////Todo////////////////////////////////////
//Text of term and conditions
//404 page error
//Switch to redis
//Ecrire to les console.log(dans un log file)
//Module follow
//Fatal error page
/////////////////////////Todo////////////////////////////////////


///////////////////////////////////Run Kiwix on start///////////////////////////////////////////
exec('sudo /var/www/kiwix/kiwix-serve --port=8100 --daemon --library /var/www/kiwix/library.xml',function (error,stdout,stderr) {
	
	console.log(error)

	console.log('Kiwix loaded')
})
///////////////////////////////////Run Kiwix on start///////////////////////////////////////////





//For SignIn and SignUp
app.get('/',(request,response)=>{

	if(request.session.user_id){

		var admin = true;
	}else{
		var admin = false;
	}

	var data_page = {
		'title':'Welcome',
		'ip_server':ip_server,
		'protocol':protocol,
		'admin':admin
	};

	response.render('welcome',data_page) 
})




//For fatal error
app.get('fatal_error/',(request,response)=>{

	var data_page = {
		'title':'fatal error :(',
		'ip_server':ip_server,
		'protocol':protocol
	};

	response.render('fatal_error',data_page) 
})





//For SignIn and SignUp
app.get('/connect',(request,response)=>{

	if(request.query.url){

		request.session.page_requested = request.query.url;
	}

	if(request.session.user_id){

		response.redirect('/')
	}else{
		var data_page = {
			'title':request.__('login'),
			'ip_server':ip_server,
			'protocol':protocol
		};

		response.render('connect',data_page)
	}
	
})
 

app.post('/connect_form',(request,response)=>{

	if(request.session.user_id){

		response.redirect('/')
	}else{

		var data = request.body;

		if(data.is_connect=='true'){ 
			//For Login

			if(data.user_number===undefined || data.user_number==='' || data.user_form_pass===undefined || data.user_form_pass===''){

				response.json({'statu':false,'message':request.__('error_user_or_password')})
			}else{

				User.login({'user_number':data.user_number,'user_form_pass':data.user_form_pass},function (results) {

					if(results.statu=='ok'){

						request.session.user_id			= results.results[0]._id;
						request.session.user_full_name 	= results.results[0].user_full_name;
						request.session.user_avatar 	= results.results[0].user_avatar;

						results.results.user_form_pass	= undefined;//We arase the password for security

						//We redirect the user if he requested a page
						if(request.session.page_requested===undefined){

							response.json({'statu':true,'user':results.results[0],'url':'/'})
						}else{

							response.json({'statu':true,'user':results.results[0],'url':request.session.page_requested})
						}
					}else{
						response.json({'statu':false,'message':request.__('error_user_or_password')})
					}	
				})
			}
		}else{ 
			//For SignUp
			if(data.user_number!=undefined && data.user_form_pass!=undefined && data.user_full_name!=undefined && data.user_sexe!=undefined){

				if(data.user_number!='' && data.user_form_pass!='' && data.user_full_name!='' && data.user_sexe!=''){

					data.user_form_pass =  bcrypt.hashSync(data.user_form_pass); //Hash password

					data.user_avatar = 'assets/img/avatar/avatar.png'; //Set default avatar

					User.registrar(data,function (results) { 

						if(results.statu=='ok'){

							//We store data on session
							var this_user = results.results.ops[0];

							request.session.user_id			= this_user._id;
							request.session.user_full_name 	= this_user.user_full_name;
							request.session.user_avatar 	= this_user.user_avatar;
							this_user.user_form_pass		= undefined;
				 			this_user.is_connect			= undefined;


							//We redirect the user if he requested a page
							if(request.session.key===undefined){

								response.send({'statu':true,'user':this_user,'url':'/'})
							}else{
								if(request.session.page_requested===undefined){
								
									response.send({'statu':true,'user':this_user,'url':'/'})
								}else{
									response.send({'statu':true,'user':this_user,'url':request.session.page_requested})
								}
							}
						}else{
							if(results.type!=undefined){

								response.send({'statu':false,'message':request.__('fatal_error')})
							}else{
								response.send({'statu':false,'message':request.__('form_used')})
							}
 						}
					})
				}else{
					response.json({'statu':false,'message':request.__('error_form')})
				}
			}else{
				response.json({'statu':false,'message':request.__('error_form')})
			}
		}
	}
})


app.get('/disconnection',(request,response)=>{

	request.session.user_id 		= undefined;
	request.session.user_full_name 	= undefined;

	response.redirect('/')
})







app.get('/who',(request,response)=>{


	if(request.session.user_id!=undefined){
		var data_page = {
			'title':'Tell me more',
			'ip_server':ip_server,
			'protocol':protocol
		}
		response.render('choose_profil',data_page)
	}else{
		response.redirect('/connect')
	}
})




app.get('/get_my_profil',(request,response)=>{

	if(request.session.user_id!=undefined){

		User.get_my_profil({'user_id':request.session.user_id},function (results) {

				
		})
	}else{
		console.log('connected')
	}

		
})





app.get('/term_and_condition',(request,response)=>{

	var data_page = {
		'title':request.__('term'),
		'ip_server':ip_server,
		'protocol':protocol
	};
	response.render('term_and_condition',data_page)
})




app.post('/set_my_profil',(request,response)=>{

	if(request.session.user_id!=undefined){

		var data = request.body; 

		User.set_my_profil({'data':data,'user_id':request.session.user_id},function (results) {

			if(results.statu=='ok'){

				request.session.profil		= data.profil;
				request.session.students 	= data.students;
				request.session.school 		= data.school;

				response.json({'statu':true,'results':{'profil':data.profil,'students':data.students,'school':data.school},'url':'/'})
			}else{
				response.json({'statu':false,'url':'/fatal_error'})
			}	
		})
	}else{
		response.json({'statu':false,'message':request.__('user_not_connected'),'url':'/'})
	}
})





app.get('/contributor',(request,response)=>{

	 if(request.session.user_id){

		var admin = true;

		var data_page = {
			'title':'Contributor',
			'ip_server':ip_server,
			'protocol':protocol,
			'admin':true
		};

		response.render('contributor',data_page)
	}else{
		response.redirect('/connect');
	}
})









////////////////////////////////////////////////////Upload file//////////////////////////////////////////////////



app.get('/upload',(request,response)=>{

	if(request.session.user_id){

		var data_page = {
			'title':request.__('upload_file'),
			'ip_server':ip_server,
			'protocol':protocol,
			'admin':true
		};
		response.render('upload',data_page)
	}else{

		request.session.page_requested = '/upload';

		response.redirect('/connect')
	}
	
})



app.get('/upload_bulk',(request,response)=>{

	if(request.session.user_id){

		var data_page = {
			'title':request.__('upload_file'),
			'ip_server':ip_server,
			'protocol':protocol,
			'stat':request.query.stat,
			'admin':true
		};
		response.render('upload_bulk',data_page)
	}else{

		request.session.page_requested = '/upload_bulk';

		response.redirect('/connect')
	}
})


app.post('/upload', (request, response) => {


	if(request.session.user_id){

		///////////////////////:ToDo///////////////////////////////////////////
		//Restrict extention and size
		///////////////////////:ToDo///////////////////////////////////////////

		var form = new formidable.IncomingForm();


		//settings
		form.multiples = true;
		form.keepExtensions = true;
		form.uploadDir = media_library+'temp';
		form.maxFieldsSize = MaxFieldSize;
	    form.maxFields = MaxFields;

		form.on("fileBegin", function(field, file){ 

			var file 			= file.name;

			var file_type 		= mime.lookup(file);

			var file_type_mime 	= file_type;

			file_type 			= file_type.split('/');

			var file_extension 	= file_type[1];

			file_type 			= file_type[0];

			switch(file_type){

				case 'video':
				case 'image':
				case 'application':

					if(file_type=='application' && file_type_application.indexOf(file_type_mime)!=-1){

					}else{

						if(file_type=='video' ||  file_type=='image'){

							
						}else{
							response.status(413);
							response.set({"connection": 'close', "content-type": 'text/plain'});
							response.json({'statu':'fail','message':'format not allowed'});
							request.connection.destroy();
	            			form._error (new Error ('format not allowed'));
						}
					}

				break;

				default:
					response.status(413);
					response.set({"connection": 'close', "content-type": 'text/plain'});
					response.json({'statu':'fail','message':'format not allowed'});
					request.connection.destroy();
					form._error (new Error ('format not allowed'));
				break;
			}

		});

		form.on('error', function(err) { 
			console.log(err)
		});


		form.on('abort', function(err) {

			response.status(413);
			response.set({"connection": 'close', "content-type": 'text/plain'});
			response.json({'statu':'fail','message':'File Error'})
			request.connection.destroy();
		});


		form.on('end', function(fields,files) { 

			var file = this.openedFiles[0];
			
			generate_file_name_and_send_to_database(function (final_file_name) { 

				var new_path = path.join(form.uploadDir, final_file_name+path.extname(file.name));
				// var new_path = path.join(form.uploadDir, crypto.createHash('sha1').update(current_date + random).digest('hex')+'__'+file.name.replace(/ /g,'_').replace(/[&\/\\#,+()$~%'":*?<>{}]/g, ''));

				fs.rename(file.path, new_path,function  (err) {
					
					if(!err){

						fs.stat(new_path, function fsStat(err, stats) {

						    if(!err){

						    	var new_file = {'file_name':path.basename(file.name,path.extname(file.name)),'file_path':new_path}

						    	io.sockets.emit('upload_treatment_ended',new_file)

								response.json({'statu':'success','file_url':final_file_name});
							      
						    }
	  					});
					}
				})
			});
		});



	    form.on ('progress', function (bytesReceived, bytesExpected) {
	        //console.log (bytesReceived, bytesExpected);
	        if(bytesReceived > MaxUploadSize)
	        {
	            console.log ('*** TOO BIG');

	            // ***HACK*** see Formidable lib/incoming_form.js
	            // forces close files then triggers error in form.parse below
	            // bonus: removes temporary files
	            // --> use throttling in Chrome while opening /tmp in nautilus
	            //     and watch the files disappear
	            form.__2big__ = true;
	            form._error (new Error ('too big'));

	            //req.connection.destroy (); --- moved to form.parse
	        }
	    });

		form.parse(request);
	}else{
		//Not connected
		response.json({'statu':'fail','message':'not_connected'});
	}
});



function generate_file_name_and_send_to_database(callback) { 

	filer.get_a_file_name(function  (fileName) {

  		callback(fileName)
	})
}




app.post('/send_description_file',(request,response)=>{ 


	if(request.session.user_id){

		var data 	 = request.body;
		var new_file = {'title':data.title,
						'description':data.description,
						'tags':data.tags,
						'file_name':data.file_name,
						'file_path':data.file_path,
						'user_id':request.session.user_id
					}

		filer.handelFile(new_file,function  (results) {

			response.json({'statu':'ok','hashName':results.hashName})
		})
	}
})




app.post('/get_all_files',(request,response)=>{ 

	Intello.get_all_files(function  (results) {

		response.json(results)
	})
})



////////////////////////////////////////////////////Upload file//////////////////////////////////////////////////





/////////////////////////////////////////////////////////Get content///////////////////////////////////////////////

io.sockets.on('connection', function (socket) {

	socket.on('search',function  (data) { 
	
		data.ip_server = ip_server;
		data.zim_port  = zim_port;
		data.protocol  = protocol;
		data.zim_wikipedia = zim_wikipedia;

		Intello.search(data,function (results) { 

			var statu = results.statu;

			switch(statu){

				case 'ok':
					var data_page = {
						'results': results,
						'search_string':results.search_string,
						'statu':'ok'
					}

					socket.emit('results',data_page)
				break;

				case 'fail':
					var data_page = {
						'search_string':results.search_string,
						'statu':'fail',
						'message':results.message
					}

					socket.emit('results',data_page)
				break;

				case 'fatal_error':

					var data_page = {
						'statu':'fatal_error'
					};
					socket.emit('results',data_page)
				break;
			}
		})
	})



	socket.on('search_ajax',function  (data) { 
	
		data.ip_server = ip_server;
		data.zim_port  = zim_port;
		data.protocol  = protocol;
		data.zim_wikipedia = zim_wikipedia;

		Intello.search(data,function (results) {

			if(results.statu=='fail'){
				var data_page = {
					'search_string':results.search_string,
					'statu':'fail',
					'message':results.message
				}
			}else{
				var data_page = {
					'results': results,
					'search_string':results.search_string,
					'statu':'ok'
				}
			}
			socket.emit('search_ajax',data_page)
		})
	})


	socket.on('get_sample_image',function  (data) {
		
		Intello.get_sample_image(data,function  (results) {
			
			socket.emit('get_sample_image',results)
		})
	})



	socket.on('get_suggestion',function  (search_string) {

		var data = [];
		data.ip_server 		= ip_server;
		data.zim_port 	 	= zim_port;
		data.protocol  		= protocol;
		data.zim_wikipedia 	= zim_wikipedia;
		data.search_string	= search_string;
		
		Intello.get_suggestion(data,function  (results) {
			
			socket.emit('get_suggestion',results)
		})
	})






	socket.on('get_pdf_page',function  (page) { 
		
		var pdf_file_hashName 	= page.hashName;
		var page 				= page.page;
		var user_id				= page.user_id;
		var input				= media_library+'pdf/'+pdf_file_hashName+'.pdf';
		var output 				= media_library +'pdf/reader/'+pdf_file_hashName+'_'+user_id+'_'+page

		
		// We convert the given page into image
		exec('pdftoppm -png -f '+page+' -singlefile '+input+' '+output,function(error, stdout, stderr){

			base64Img.base64(output+'.png', function(err, data64) {

				socket.emit('get_pdf_page',{'page':page,'image':data64})//send in base64

				fs.unlinkSync(output+'.png');
			})
		})
	})


	socket.on('get_disk_space',function  () { 
		
		diskspace.check('/', function (err, result){ 

		    socket.emit('get_disk_space',result)
		})
	})




	socket.on('get_background',function () { //This function get all the background image off eduair lolo on home page
		
		//passsing directoryPath and callback function
		fs.readdir(directoryPath_for_background, function (err, files) {
		    //handling error
		    if (err) {
		        return console.log('Unable to scan directory: ' + err);
		    }else{

		    	socket.emit('get_background',files)
		    } 
		});
	})


	socket.on('get_my_file',function  () {
		
		Intello.get_my_file(function  (results) {
			
			socket.emit('get_my_file',results)
		})
	})


	socket.on('delete_file',function (data) { 
		
		//We delete on database
		Intello.delete_file(data,function(data) { 

			//We delete the file on hard disk
			var original_file 	= media_library+data.original_path+'/'+data.hashName+data.original_ext;
			var final_file 		= media_library+data.final_path+'/'+data.hashName+data.final_ext;

			//If the file is on only one place in the disk we delete once
			if(original_file==final_file){
				fs.unlinkSync(final_file)
			}else{
				//We delete twice
				fs.unlinkSync(original_file)
				fs.unlinkSync(final_file)
			}

			//We delete thumbnail
			fs.unlinkSync(media_library+data.thumbnail)

			
			socket.emit('delete_file',data.file_id)
		})
	})



	// socket.on('spellcheck',function  (string) { 

	// 	SpellChecker.getDictionary("fr-FR", function(err, dictionary) { 
		    
	// 	    if(!err) {

	// 	        var misspelled = ! dictionary.spellCheck(string);

	// 	        if(misspelled) { console.log(dictionary.getSuggestions(string))

	// 	           socket.emit('spellcheck',dictionary.getSuggestions(string));
	// 	        }
	// 	    }else{
	// 	    	console.log('spellcheck Problem__'+err)
	// 	    }
	// 	});
	// })





})







app.get('/results',(request,response)=>{

	if(request.session.user_id){

		var admin = true;
	}else{
		var admin = false;
	}
	
	var data_page = {
		'title':request.__('search_results'),
		'ip_server':ip_server,
		'protocol':protocol,
		'string': request.query.search,
		'admin':admin
	};

	response.render('search_list',data_page)
})



app.get('/fatal_error',(request,response)=>{

	var data_page = {
		'title':request.__('no_results'),
		'ip_server':ip_server,
		'protocol':protocol
	};

	response.render('fatal_error',data_page)
})


app.get('/file_no_exist',(request,response)=>{

	var data_page = {
		'title':request.__('no_file_found'),
		'ip_server':ip_server,
		'protocol':protocol
	};

	response.render('fatal_error',data_page)
})









app.get('/wp',(request,response)=>{

	if(request.session.user_id){

		var admin = true;
	}else{
		var admin = false;
	} 

	var data = {};

	data.ip_server 		= ip_server;
	data.zim_port 	 	= zim_port;
	data.protocol  		= protocol;
	data.zim_wikipedia 	= zim_wikipedia;
	data.my_url			= request.query.url;

	Intello.get_wikipedia_article(data,function  (results) { 
		
		var data_page = {
			'title':results.title,
			'text':results.text,
			'ip_server':ip_server,
			'protocol':protocol,
			'admin':admin
		}

		response.render('article',data_page)
	})
})





app.get('/watch',(request,response)=>{

	if(request.session.user_id){

		var admin = true;
	}else{
		var admin = false;
	}

	var media = request.query.media;

	Intello.go_get_media(media,function  (data) { 
		
		if(data.response==undefined){
			var data_page = {
				'title':data.title,
				'ip_server':ip_server,
				'protocol':protocol,
				'hashName':data.hashName,
				'_id':data._id,
				'description':data.description,
				'type': data.type,
				'format': data.format,
				'view':data.view,
				'tags':data.tags,
				'create_at':data.create_at,
				'user_id':data.user_id,
				'pages':data.pages,
				'admin':admin
			}; 
			response.render(data.type,data_page)
		}else{
			var data_page = {
				'title':request.__('no_file_found'),
				'ip_server':ip_server,
				'protocol':protocol,
				'admin':admin
			};
			response.render('no_file_found',data_page)
		}
		
	})
	
})


//Streaming video
app.get('/video',(req,res)=>{

	var media 	= req.query.media;

	var path_file 	= __dirname+'/private/video/'+media;

	fs.exists(path_file, function(exists) { 

  		if (exists) { 

   		 	var stat 	= fs.statSync(path_file);
			var total 	= stat.size;
			
			if (req.headers['range']) {

			    var range = req.headers.range;
			    var parts = range.replace(/bytes=/, "").split("-");
			    var partialstart = parts[0];
			    var partialend = parts[1];

			    var start = parseInt(partialstart, 10);
			    var end = partialend ? parseInt(partialend, 10) : total-1;
			    var chunksize = (end-start)+1;

			    var file = fs.createReadStream(path_file, {start: start, end: end});
			    res.writeHead(206, { 'Content-Range': 'bytes ' + start + '-' + end + '/' + total, 'Accept-Ranges': 'bytes', 'Content-Length': chunksize, 'Content-Type': 'video/mp4' });
			    file.pipe(res);
			}else{
			    res.writeHead(200, { 'Content-Length': total, 'Content-Type': 'video/mp4' });
			    fs.createReadStream(path_file).pipe(res);
			} 
  		}else{
  			res.redirect('/file_no_exist')
  		}
	});	
})




//Streaming image
app.get('/image',(req,res)=>{

	var media 		= req.query.media;

	var path_file 	= __dirname+'/private/image/'+media;

	fs.exists(path_file, function(exists) { 

  		if (exists) {

  			var stat 	= fs.statSync(path_file);
			var total 	= stat.size; 

   		 	res.writeHead(200, { 'Content-Length': total, 'Content-Type': 'image/'+path.extname(path_file).replace('.','') });
			fs.createReadStream(path_file).pipe(res); 
  		}else{
  			res.redirect('/file_no_exist')
  		}
	});
})



//Download file
app.get('/get_it',(req,res)=>{

	var path_file 	= __dirname+'/private/'+req.query.dir+'/'+req.query.media;

	fs.exists(path_file, function(exists) { 

  		if (exists && activate_download) {

  			res.download(path_file,req.query.title+path.extname(req.query.media));
  		}else{
  			res.redirect('/file_no_exist')
  		}
	});
})


app.post('/get_user_name',(request,response)=>{

	var data = request.body;

	User.get_user_name(data.user_id,function (results) { 

		response.json(results)	
	})
})


app.post('/get_user_pic',(request,response)=>{

	var data = request.body;

	User.get_user_pic(data.user_id,function (results) { 

		response.json(results)	
	})
})






app.get('/no_results',(request,response)=>{


		var data_page = {
			'title':request.__('no_results'),
			'ip_server':ip_server,
			'protocol':protocol,
			'search_string':'voici mon string'
		};

		response.render('fatal_error',data_page)
	
})



/////////////////////////////////////////////////////////Get content///////////////////////////////////////////////




///////////////////////////////////////////////Manage Comments//////////////////////////////////////////////////////


app.post('/add_comment',(request,response)=>{

	if(request.session.user_id){

		var data = request.body;

		Intello.add_new_comment_to_the_file(data,function (results) { 

			if(results.statu==true){

				response.json({'statu':true,'this_comment_id':results.comment_id})
			}else{
				response.json({'statu':false,'message':'unknow'})
				
			}	
		})
	}else{
		response.json({'statu':false,'message':'not_connected'})
	}

		
	
})


app.post('/get_comment',(request,response)=>{

	var hashName = request.body.file_id; 

	Intello.get_file_comments(hashName,function (results) { 

		if(results.statu==true && results.comments){

			response.json({'statu':true,'comment':results.comments})
		}else{
			if(results.statu==true){

				response.json({'statu':false})
			}else{
				response.redirect('/fatal_error')
			}
		}	
	})
	
	
})


app.post('/delete_comment',(request,response)=>{

	if(request.session.user_id){

		var comment_id = request.body.comment_id; 

		Intello.delete_comment_to_the_file(comment_id,function (statu) {

			if(statu.statu==true){

				response.json({'statu':true})
			}else{
				response.redirect('/fatal_error')
			}	
		})
	}else{
		response.json({'statu':false,'message':'not_connected'})
	}
})


app.post('/update_comment',(request,response)=>{

	if(request.session.user_id){

		var comment = request.body; 

		Intello.update_comment_to_the_file(comment,function (statu) { 

			if(statu.statu==true){

				response.json({'statu':true})
			}else{
				response.redirect('/fatal_error')
			}	
		})
	}else{
		response.json({'statu':false,'message':'not_connected'})
	}
	
})


app.post('/delete_response',(request,response)=>{

	if(request.session.user_id){
		var comment = request.body;

		Intello.delete_response_to_the_file_comment(comment,function (statu) { 

			if(statu.statu==true){

				response.json({'statu':true})
			}else{
				response.redirect('/fatal_error')
			}	
		})
	}else{
		response.json({'statu':false,'message':'not_connected'})
	}
})


app.post('/update_response',(request,response)=>{

	if(request.session.user_id){

		var comment = request.body; 

		Intello.update_response_to_the_file_comment(comment,function (statu) { 

			if(statu.statu==true ){

				response.json({'statu':true})
			}else{
				response.redirect('/fatal_error')
			}	
		})
	}else{
		response.json({'statu':false,'message':'not_connected'})
	}
})
///////////////////////////////////////////////Manage Comments//////////////////////////////////////////////////////















/////////////////////administration////////////////////////////////////

app.use('/plugins', express.static('views/big_brother/plugins'))
app.use('/bootstrap', express.static('views/big_brother/bootstrap'))
app.use('/dist', express.static('views/big_brother/dist'))
app.use('/build', express.static('views/big_brother/build'))


app.get('/initer',(request,response)=>{

	User.login_admin_init({'user_number':data.user_number,'user_form_pass':data.user_form_pass},function (results) {

		if(results.statu=='ok'){

			response.send('All is fine!!')
			
		}else{
			response.send(request.__('fatal_error'))
		}	
	})
});


app.get('/admin_login',(request,response)=>{

	var data_page = {
		'title':'administration',
		'ip_server':ip_server,
		'protocol':protocol
	};

	response.render('admin_login',data_page)
});



app.post('/admin_login_form',(request,response)=>{

		var data = request.body; 

			if(data.user_number===undefined || data.user_number==='' || data.user_form_pass===undefined || data.user_form_pass===''){

				response.json({'statu':false,'message':request.__('error_user_or_password')})
			}else{

				User.login_admin({'user_number':data.user_number,'user_form_pass':data.user_form_pass},function (results) {

					if(results.statu=='ok'){

						if(results.new_admin=='ok'){ //If its this the first login as admin

							request.session.user_id		= results.results.insertedIds[0];
							request.session.username 	= data.user_number;

							request.session.admin 		= 0;
						}else{

							request.session.user_id		= results.results[0]._id;
							request.session.username 	= results.results[0].user_number;
							request.session.admin 		= 0;
							results.results[0].user_form_pass	= undefined;//We arase the password for security
						}

						//We redirect the user if he requested a page
						response.json({'statu':true,'user':results.results[0],'url':'/big_brother'})
					}else{
						response.json({'statu':false,'message':request.__('error_user_or_password')})
					}	
				})
			}
})


app.post('/get_school',(request,response)=>{

	var data = request.body; 

	Admin.get_school(data,function (results) {

		if(results.statu=='ok'){

			response.json({'statu':true,'results':results})
		}else{
			response.json({'statu':false,'message':request.__('fatal_error')})
		}	
	})
})



app.post('/add_school',(request,response)=>{

	if(request.session.admin!=undefined){

		var data = request.body; 

		Admin.add_school(data,function (results) {

			if(results.statu=='ok'){

				response.json({'statu':true,'results':results.results})
			}else{
				response.json({'statu':false,'message':request.__('fatal_error')})
			}	
		})
	}else{
		response.json({'statu':false,'message':request.__('admin_denied')})
	}
})



app.post('/delete_school',(request,response)=>{

	if(request.session.admin!=undefined){

		var data = request.body; 

		Admin.delete_school(data,function (results) {

			if(results.statu=='ok'){

				response.json({'statu':true,'results':results.results})
			}else{
				response.json({'statu':false,'message':request.__('fatal_error')})
			}	
		})
	}else{
		response.json({'statu':false,'message':request.__('admin_denied')})
	}
})





app.get('/big_brother',(request,response)=>{

	if(request.session.admin!=undefined){ 

		response.locals.username 	= request.session.username;
		response.locals.user_id		= request.session.user_id;
		response.locals.admin 		= request.session.admin;

		var data_page = {
			'title':'administration',
			'ip_server':ip_server,
			'protocol':protocol
		};

		response.render('big_brother/big_brother',data_page)
	}else{

		response.redirect('/admin_login')
	}

	
});




app.use(function(req, response, next){

	var data_page = {
			'title':'Sorry, page not found',
			'ip_server':ip_server,
			'protocol':protocol
		};

    response.status(404).render('404', data_page);
});



app.listen(port)


 /////////////////////Get the Ip of the server///////////////////////////////////
    var ip_server;

    var ifaces = os.networkInterfaces();

    Object.keys(ifaces).forEach(function (ifname) {
      var alias = 0;

      ifaces[ifname].forEach(function (iface) {
        if ('IPv4' !== iface.family || iface.internal !== false) {
          // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
          return;
        }

        if (alias >= 1) {
          // this single interface has multiple ipv4 addresses
          // console.log(ifname + ':' + alias, iface.address);
        } else {
          // this interface has only one ipv4 adress
          ip_server = iface.address;
        }
        ++alias;
      });
    });


