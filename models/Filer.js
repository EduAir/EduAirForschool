
"use strict"; 
var fs 	= require('fs');

var path = require("path");

var ffmpeg = require('ffmpeg');

var thumbler = require('video-thumb');

var Mp4Convert = require('mp4-convert');

var  path = require('path');

const md5File = require('md5-file'); //Generate the hash of a file

var crypto = require('crypto'); //Generate a random hash

var exec = require('child_process').exec;																																								

var mime = require('mime');//Get type mime of file

var PDFImage = require("pdf-image").PDFImage;//Get a shoot for a PDF file

var filepreview = require('filepreview');

var textract = require('pdf-text-extract');//To PDF file

var tesseract = require('node-tesseract'); //To image

var utf8 = require('utf8');

var Intello = require('../models/Intello');//Model file for Elastic search and database

var temp_directory =path.join(__dirname, '..', 'private/temp/');//Define the temporary directory when a new file is uploaded

var media_library =path.join(__dirname, '..', 'private/');//Define the directory of media library

var logo_watermark =path.join( __dirname, '..','public/img/eduair_watermark.png');

var video_type_out = 'video/mp4';
var audio_type_out = 'audio/mpeg';

var file_type_application = [	'application/pdf' ,
								'application/vnd.ms-powerpoint', //ppt
								'application/vnd.openxmlformats-officedocument.presentationml.presentation',//pptx
								'application/msword' ,//DOC
								'application/vnd.openxmlformats-officedocument.wordprocessingml.document'//docx
								];



class Filer{ 

	static handelFile(fileUploaded,Callback){ 

		var file = fileUploaded.file_path;

		var file_type 		= mime.lookup(file);

		var file_type_mime 	= file_type;

		file_type 			= file_type.split('/');

		var file_extension 	= file_type[1];

		file_type 			= file_type[0];

		switch(file_type){

			case 'video':
				convert_video_to_mp4(fileUploaded,function  (results) {

					Intello.add_new_file(results,function  (response) {

						results.id_file_mongoDB = response.last_inserted_id_on_mongoDb;
						
						Callback(results)
					})
				})
			break;

			case 'image':
				move_image(fileUploaded,function  (results) { 
					
					Intello.add_new_file(results,function  (response) { 

						delete results.text_extracted ;
						delete results.pages;
						delete results.thumbnail;
						delete results.created_at;
						delete results.last_view;
						delete results.page_number;
						delete results.text_page;
						delete results.view;

						results.id_file_mongoDB = response.last_inserted_id_on_mongoDb;
						
						Callback(results)
					})
				})
			break;

			case 'application':
				if(file_type_application.indexOf(file_type_mime)!=-1){

					if(file_extension=='pdf'){

						move_pdf(fileUploaded,function  (results) {
							
							Intello.add_new_file(results,function  (response) {
								
								delete results.text_extracted ;
								delete results.pages;
								delete results.thumbnail;
								delete results.created_at;
								delete results.last_view;
								delete results.page_number;
								delete results.text_page;
								delete results.view;

								results.id_file_mongoDB = response.last_inserted_id_on_mongoDb;

								Callback(results)
							})
						})
					}else{ 
						DOCx_and_ppt_2_pdf(fileUploaded,function  (results) {
						
							Intello.add_new_file(results,function  (response) {

								delete results.text_extracted ;
								delete results.pages;
								delete results.thumbnail;
								delete results.created_at;
								delete results.last_view;
								delete results.page_number;
								delete results.text_page;
								delete results.view;

								results.id_file_mongoDB = response.last_inserted_id_on_mongoDb;
						
								Callback(results)
							})
						})
					}
				}
			break;
		}
	}


	static get_a_file_name(Callback){ 

		generate_a_file_name(function  (hashName) {
			
			Callback(hashName);
		});
	}


	static update_description_file(file_description,Callback){ 

		//We update data to intello
		Intello.set_file_description(file_description,function  (response) {
						
			Callback(response)	
		})
		
	}
		
}


module.exports = Filer;


	////////////////////////////////////////Generate a file name/////////////////////////////////////////////////////////

	function generate_a_file_name (hashName) {
		
		var maxi_lenght = 10;
  		var text = "";
  		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";


  		for (var i = 0; i < maxi_lenght; i++)
  			text += possible.charAt(Math.floor(Math.random() * possible.length));

  		//verify to the data base if the file doesn't exixt yet
  		Intello.verify_if_the_file_name_exist(text,function  (statu) { 
  			
  			if(statu==true){

  				hashName(text)
  			}else{
  				generate_a_file_name(hashName)
  			}
  		})
	}
	////////////////////////////////////////Generate a file name/////////////////////////////////////////////////////////


	///////////////////////////////////////////////////Converter//////////////////////////////////////////////////////////

	function PDF_2_image(file,page,Callback){//Page is the number of the page.

		var pdfImage = new PDFImage(file);

		pdfImage.convertPage(page).then(function (imagePath) {

			base64_encode(imagePath,function  (results) {
				
				if(results.error){

					Callback(results.error)
				}else{

					Callback(results.Buffer64)
				}
			})
		});
	}





	function DOCx_and_ppt_2_pdf(fileUploaded,Callback){ 

		var file = fileUploaded.file_path;

		//Is it word or ppt file?
		if(path.extname(file).indexOf('doc')!=-1){

	    	var right_folder 		= 'word';
		}else{
	    	var right_folder 		= 'ppt';
		}

		exec('libreoffice --invisible --convert-to pdf '+file,function(error, stdout, stderr) {

			var file_converted_in_root 	= path.basename(file,path.extname(file))+'.pdf';

			var real_fileName 			= fileUploaded.file_name;

			var final_file 				= media_library+'pdf/'+path.basename(fileUploaded.file_path,path.extname(fileUploaded.file_path))+'.pdf';

			var source_pdf 				= fs.createReadStream(file_converted_in_root);

    		var destination_pdf 		= fs.createWriteStream(final_file);

    		source_pdf.pipe(destination_pdf,{ end: false });

			source_pdf.on("end", function(){

			    fs.unlinkSync(file_converted_in_root);//I delete the old file in the root of eduair

			    var source_doc 			= fs.createReadStream(file);

	    		var destination_doc 	= fs.createWriteStream(media_library+right_folder+'/'+path.basename(final_file,path.extname(final_file))+path.extname(file));

	    		source_doc.pipe(destination_doc,{ end: false });

				source_doc.on("end", function(){

				    fs.unlinkSync(file);//I delete the old file

				    generate_thumbnail(media_library+right_folder+'/'+path.basename(final_file,path.extname(final_file))+path.extname(file),function  (results) {
				    	
				    	exec('pdfinfo '+final_file+' | grep ^Pages: ',function(error, stdout, stderr) {

				    		if(error){

				    			console.log('get page number error : '+error)
				    		}else{

				    			extract_text_from_pdf(final_file,function  (text_extracted) {

				    				var this_callback = {
				    					'fileName':real_fileName,
				    					'type':'office',
				    					'media':'text',
				    					'hashName':path.basename(final_file,path.extname(final_file)),
				    					'thumbnail':results,
				    					'size':getFilesizeInBytes(final_file),
				    					'pages':stdout.replace(/\n|\r/g, "").replace(/ /g,'').replace('Pages:','')*1,
				    					'original_path':right_folder,
										'original_ext':path.extname(file),
										'final_path':'pdf',
										'final_ext':path.extname(final_file),
				    					'format':path.extname(final_file),
				    					'format_initial':path.extname(file),
				    					'text_extracted':text_extracted,
				    					'title':fileUploaded.title,
										'description':fileUploaded.description,
										'tags':fileUploaded.tags,
										'user_id':fileUploaded.user_id
				    				}
			    	
				    				Callback(this_callback)
			    				})
				    		}
				    	})
				    }) 
				})
			})

			source_pdf.on('error',function  (error) {
				
				console.log(error)
			})

      		if(stderr){
				console.log('Error convertion WORD to PDF: ' + stderr)
			}

		    
		    if (error !== null) {
		        console.log('exec error: ' + error);
		    }
		})
	}



	function convert_video_to_mp4 (fileUploaded,call_back_json_metada){

		var real_fileName 	= fileUploaded.file_name;

		var temp_file 		= fileUploaded.file_path;

		var final_file		= media_library+'video/'+path.basename(fileUploaded.file_path,path.extname(fileUploaded.file_path))+'.mp4' ;

		//Convert To MP4 if it is not a mp4 video
		var video_type 	= mime.lookup(temp_file);

		if(video_type!=video_type_out && video_type.indexOf('video')!=-1){ //We verify the type mime of video file

			//We convert to MP4 file if it is not a mp4 file

			var convert = new Mp4Convert(temp_file, final_file);

			// convert.on('progress', function(p) {
   //  			console.log('Progress', p);///////////////////////////////////////////////////////////////////////////////////////////
			// });

			convert.on('done', function() {
			    
				//Get the thumbnail of the video
				generate_thumbnail(final_file,function  (thumbnail) {
					
					//We get the duration of video
					exec("ffprobe "+final_file+" -show_format 2>&1 | sed -n 's/duration=//p'", function(err, stdout, stderr) {
						
						if(!err){

							//Delete the original video if is is not a MP4 video
							fs.unlinkSync(temp_file);

							var this_callback = {	'fileName':real_fileName,
													'media':'audio_video',
													'type':'video',
													'hashName':path.basename(final_file,path.extname(final_file)),
													'duration':stdout.replace('\n',''),
													'thumbnail':thumbnail,
													'size':getFilesizeInBytes(final_file),
													'original_path':'video',
													'original_ext':path.extname(final_file),
													'final_path':'video',
													'final_ext':path.extname(final_file),
													'format':path.extname(final_file),
													'format_initial':path.extname(temp_file),
													'title':fileUploaded.title,
													'description':fileUploaded.description,
													'tags':fileUploaded.tags,
													'user_id':fileUploaded.user_id
												}

							call_back_json_metada(this_callback);
						}else{
							console.log(err)
						}
					});
				})
			});
			convert.start();
		
		}else{ 
			//It is not a video, I send an error
			if(video_type.indexOf('video')==-1){

				//Delete the original video if is is not a video
				fs.unlinkSync(temp_file);

				call_back_json_metada({'duration':false,'thumbnail':false,'error':'this_file_is_not_a_video'});
			}else{

				//If is a mp4 video,I just move the file
				fs.rename(temp_file, final_file, function (err) {
			        
			        if (err){

			            console.log(err)
			        }else{

			        	//Get the thumbnail of the video
			        	generate_thumbnail(final_file,function  (thumbnail) {
			        		
				        	//We get the duration of video
							exec("ffprobe "+final_file+" -show_format 2>&1 | sed -n 's/duration=//p'", function(err, stdout, stderr) {
								
								if(!err){

									var this_callback = {
										'fileName':real_fileName,
										'media':'audio_video',
										'type':'video',
										'hashName':path.basename(final_file,path.extname(final_file)),
										'duration':stdout.replace('\n',''),
										'thumbnail':thumbnail,
										'size':getFilesizeInBytes(final_file),
										'original_path':'video',
										'original_ext':path.extname(final_file),
										'final_path':'video',
										'final_ext':path.extname(final_file),
										'format':path.extname(final_file),
										'format_initial':path.extname(temp_file),
										'title':fileUploaded.title,
										'description':fileUploaded.description,
										'tags':fileUploaded.tags,
										'user_id':fileUploaded.user_id
									}

									call_back_json_metada(this_callback);
								}else{
									console.log('err')
								}
							});
			        	})
			        }
	    		});
			}
		}
	}






	function move_image (fileUploaded,Callback) {

		var file = fileUploaded.file_path;

		var real_fileName 	= fileUploaded.file_name;

		//final_file = FileName_timestamp_generatedHash.jpg
		var final_file	= media_library+'image/'+path.basename(fileUploaded.file_path,path.extname(fileUploaded.file_path))+path.extname(file) ;
		
		fs.rename(file, final_file, function (err) {
			        
			if (err){

			    console.log(err)
			}else{

			    //Get the thumbnail of the video
			    generate_thumbnail(final_file,function  (thumbnail) {

			    	extract_text_from_image(final_file,function  (text_extracted) {

			    		var this_callback = {
			    			'fileName':real_fileName,
			    			'media':'image',
			    			'type':'image',
			    			'hashName':path.basename(final_file,path.extname(final_file)),
			    			'thumbnail':thumbnail,
			    			'size':getFilesizeInBytes(final_file),
			    			'original_path':'image',
							'original_ext':path.extname(final_file),
							'final_path':'image',
							'final_ext':path.extname(final_file),
			    			'format':path.extname(final_file),
			    			'text_extracted':text_extracted,
			    			'title':fileUploaded.title,
							'description':fileUploaded.description,
							'tags':fileUploaded.tags,
							'user_id':fileUploaded.user_id
			    		}
			    	
						Callback(this_callback)
			    	})
			   	})
			}
	    })
	}





	function move_pdf (fileUploaded,Callback) {

		var file 			= fileUploaded.file_path;

		var real_fileName 	= fileUploaded.file_name;

		//final_file = FileName_timestamp_generatedHash.jpg
		var final_file	= media_library+'pdf/'+path.basename(fileUploaded.file_path,path.extname(fileUploaded.file_path))+path.extname(file) ;
		
		fs.rename(file, final_file, function (err) {
			        
			if (err){

			    console.log(err)
			}else{

			    //Get the thumbnail of the video
			    generate_thumbnail(final_file,function  (thumbnail) {

			    	exec('pdfinfo '+final_file+' | grep ^Pages: ',function(error, stdout, stderr) {

			    		extract_text_from_pdf(final_file,function  (text_extracted) {

			    			var this_callback = {
			    				'fileName':real_fileName,
			    				'media':'text',
			    				'type':'pdf',
			    				'hashName':path.basename(final_file,path.extname(final_file)),
			    				'thumbnail':thumbnail,
			    				'size':getFilesizeInBytes(final_file),
			    				'pages':stdout.replace(/\n|\r/g, "").replace(/ /g,'').replace('Pages:','')*1,
			    				'original_path':'pdf',
								'original_ext':path.extname(final_file),
								'final_path':'pdf',
								'final_ext':path.extname(final_file),
			    				'format':path.extname(final_file),
			    				'text_extracted':text_extracted,
			    				'title':fileUploaded.title,
								'description':fileUploaded.description,
								'tags':fileUploaded.tags,
								'user_id':fileUploaded.user_id
			    			}
			    	
							Callback(this_callback)
			    		})
				    })
			 	})
			}
	    });
	}
	///////////////////////////////////////////////////Converter//////////////////////////////////////////////////////////






	///////////////////////////////////////////Utilities//////////////////////////////////////////////////////////////////////

	function extract_text_from_pdf(file,Callback){ //Ad current page to json file,also strea file before extract text,to the same function to photo

		textract(file,function (err, text) {
		  	
		  	if (err) {

		    	console.log('Error extracting text from : '+path.basename(file)+' ' + err);

		    	Callback('error')
		  	}else{ 

		  		Callback(text)
		  	}
		})
	}


	function extract_text_from_image(file,Callback){ //Ad current page to json file,also strea file before extract text,to the same function to photo


		// Recognize text of any language in any format
		tesseract.process(file,function(err, text) {

			if(err) {
				console.log('Error extracting text from : '+path.basename(file)+' ' + err);

				Callback('error')
			} else { 
				Callback(text);
			}
		})
	}


	function watermark_image(file,Callback){

		var command = [
		    'composite',
		    '-dissolve', '50%',
		    '-gravity', 'center', 
		    '-quality', 100,
		    logo_watermark,
		    file,
		    file
		];

		exec(command.join(' '), function(err, stdout, stderr) {
    		
    		Callback('OK')
		});
	}




	///////////////////////////////////////////Utilities//////////////////////////////////////////////////////////////////////









	function compresse_image(folder,Callback){

		exec('jpegoptim '+folder+'/*.jpg', function(error, stdout, stderr) {

			Callback('done')


			if(stderr){
				console.log('Error convertion PDF to image: ' + stderr)
			}
						    
			if (error !== null) {
			  	console.log('exec error: ' + error);
			}
		});
	}




	// function to encode file data to base64 encoded string
	function base64_encode(file,Callback) {

	    // read binary data
	    fs.readFile(file, function read(err, data) {
		    
		    if (err) {

		    	console.log(err)

		        Callback({'error':'404'})
		    }else{
		    	// convert binary data to base64 encoded string
	   			Callback( {'Buffer64':new Buffer(bitmap).toString('base64'),'error':false})

	   			fs.unlinkSync(file);//We delete the file
		    }
  
		});
	}



	function generate_hash (){

		var current_date = (new Date()).valueOf().toString();
		var random = Math.random().toString();
		return crypto.createHash('sha1').update(current_date + random).digest('hex');
	}





	function generate_thumbnail(file,Callback){

		var file_extention = path.extname(file);
		var this_file;

		switch(file_extention){

			case '.pdf':
				this_file = 'pdf';
			break;

			case '.mp4':
				this_file = 'video';
			break;

			case '.doc':
			case '.docx':
				this_file = 'word';
			break;

			case '.ppt':
			case '.pptx':
				this_file = 'ppt';
			break;

			case '.jpg':
			case '.png':
			case '.png':
			case '.jpeg':
			case '.gif':
			case '.svg':
				this_file = 'image';
			break;

			default:
				this_file = 'undefined';
			break;
		}

		setTimeout(function  () {
			
			var destination = this_file+'/thumbnails/'+path.basename(file,path.extname(file))+'.png';

			filepreview.generate(file,media_library+destination, function(error) {
			    
			    if (error) { 
			      	return console.log(error);
			    }else{

			    	Callback(destination)
			    }
	  		});
		},400)
	}



	function getFilesizeInBytes(filename) {

	    const stats = fs.statSync(filename)

	    const fileSizeInBytes = stats.size;

	    return fileSizeInBytes;
	}