var rowCount = 0;
var fileCount = 0;
var pos = 0; 


var file_type_application = [   'application/pdf' ,
                                'application/vnd.ms-powerpoint', //ppt
                                'application/vnd.openxmlformats-officedocument.presentationml.presentation',//pptx
                                'application/msword' ,//DOC
                                'application/vnd.openxmlformats-officedocument.wordprocessingml.document'//docx
                                ];

$(document).ready(function(){

   

    var file_to_upload;

	//fixe the size of the uploader
	$('.field_upload').height((window.field_upload_height*$(window).height())/100)

	$('.selector').hover(function  () {
		$('.icon_publish').addClass('red-text text-darken-2')
	},function() {
		$('.icon_publish').removeClass('red-text text-darken-2')
	});


    //Click to upload
    $('.icon_publish').click(function  () {
        
        $('.filer').click()
    })

	// Gerer les cas de video multiples
	var obj = $('.selector');

	obj.on("dragenter", function(e){
		e.stopPropagation();
		e.preventDefault();
		$('.icon_publish').addClass('red-text text-darken-2')
        $('.icon_publish').html('<i class="valign large material-icons">done</i>')

	})

	obj.on('dragover', function (e)
	{
		e.stopPropagation();
		e.preventDefault();

	});


    obj.on('dragexit', function (e)
    {
        $('.icon_publish').html('<i class="valign large material-icons">publish</i>')
    });


    $('.filer').change(function(e){ 
        
        $('.publish').fadeIn()

         // We show the dashboard
        $(".selector").fadeOut();
        $('.command_selector').fadeIn('slow');

        $('.statu_upload').html('')
        $('.statu_upload').fadeOut()

        var files = $(this)[0].files;

        prepare_file (files)

        // //Init progress bars to 0
        // big_progress_bar(0)


    });


	obj.on('drop', function (e)
	{

        $('.publish').fadeIn()
        $(".selector").fadeOut();
        $('.command_selector').fadeIn('slow');

        $('.statu_upload').html('')
        $('.statu_upload').fadeOut()
		e.preventDefault();
		var files = e.originalEvent.dataTransfer.files;

        //Init progress bars to 0
        big_progress_bar(0)

        prepare_file (files)
	});


    $('.publish').click(function  () { 

        $('.publish').addClass('disabled')
        $('.file_input').attr("disabled", "disabled")

        upload_to_the_server(file_to_upload)
        
        return false;
    })



    function big_progress_bar (percent) {
        
        $('.total_progress').attr('style','width: '+percent+'%')

        $('.percent_up').text(percent+'%')
    }

    


    function prepare_file (files) {//To do. extention and size

        if (files.length > 0){
            
            //We write the name of file
            $('.file_title').val(files[0]['name'].replace('.'+files[0]['name'].split('.').pop(),''))

            //We verify file
            //Is it the good format
            var this_entire_type = files[0].type;
            
            this_entire_type = this_entire_type.split('/')
            
            var this_type = this_entire_type[0];
            
            var this_extension = this_type[1]; 

            switch(this_type){

                case 'video':
                case 'image':
                case 'audio':
                case 'application':

                    if(this_type=='application' && file_type_application.indexOf(files[0].type)!=-1){

                        file_to_upload = files;
                    }else{

                        if(this_type=='video' || this_type=='audio' || this_type=='image'){

                           file_to_upload = files;    
                        }else{
                            //We change the bar statu
                            $('.statu_upload').html('<div class="link_uploaded"><i class="material-icons">close</i><span class="red-text text-darken-2"> '+$('.notif').attr('File_type_Not_allowed')+'</span></div>')
                            $('.statu_upload').fadeIn()

                            //we show the upload form and hide input text
                             // We show the dashboard
                            $(".selector").fadeIn();
                            $('.command_selector').hide('slow');

                        }
                    }

                break;

                default:
                     //We change the bar statu
                    $('.statu_upload').html('<div class="link_uploaded"><i class="material-icons">close</i><span class="red-text text-darken-2"> '+$('.notif').attr('File_type_Not_allowed')+'</span></div>')
                    $('.statu_upload').fadeIn()

                    //we show the upload form and hide input text
                     // We show the dashboard
                    $(".selector").fadeIn();
                    $('.command_selector').hide('slow');
                break;
            }
        }

        //We hide the indeterminant progressbar even if it's not hide or not
        $('.state_upload').hide()
    }



    function upload_to_the_server (files) { 

        //We show the progress bar
        $('.state_upload').fadeIn()

        // create a FormData object which will be sent as the data payload in the
        // AJAX request
        var formData = new FormData();

        var file = files[0];

        $('.up_title').text(file.name)

        // add the files to formData object for the data payload
        formData.append('file', file, file.name);

        $.ajax({

            url: '/upload',

            type: 'POST',

            data: formData,

            processData: false,

            contentType: false,

            dataType: 'json',

            error: function  (err) {
              console.log(err)
            },

            xhr: function() {
                // create an XMLHttpRequest
                var xhr = new XMLHttpRequest();

                // listen to the 'progress' event
                xhr.upload.addEventListener('progress', function(evt) {

                  if (evt.lengthComputable) {
                    // calculate the percentage of upload completed
                    var percentComplete = evt.loaded / evt.total;
                    percentComplete = parseInt(percentComplete * 100);

                    // update the Bootstrap progress bar with the new percentage
                    big_progress_bar(percentComplete)

                  }

                }, false);

                return xhr;
            },
            success: function(data){

                if(data.statu=='success'){

                    //We hide the indeterminate progressBar
                    $('.state_upload').fadeOut()

                    $('.cancel_publish').fadeOut();

                    $('.percent_up').html($('.notif').attr('upload_processing'))

                }else{

                    if(data.message=='not_connected'){
                        document.location.href='/connect';
                    }else{
                         //We change the bar statu
                        $('.statu_upload').html('<div class="link_uploaded"><i class="material-icons">close</i><span class="red-text text-darken-2"> '+data.message+'</span></div>')
                        $('.statu_upload').fadeIn()

                        //we hide the upload form and show input text
                        $(".selector").fadeIn();
                        $('.command_selector').hide();
                        init_form ()
                    }
                }
            }
        })
        
    }


    $('.cancel_publish').click(function  () {
        
        location.reload();

        return false;   

    })



    window.socket.on('upload_treatment_ended',function (results) { 

        $.ajax({

            url: '/send_description_file',

            type: 'POST',

            data: {'title':$('.file_title').val(),'description':$('.file_desc').val(),'tags':$('.file_tag').val().split(','),'file_name':results.file_name,'file_path':results.file_path},

            dataType: 'json',

            error: function  (err) {
              console.log(err)
            },
            success: function(data){  

                if(data.statu=='ok'){

                    //We change the bar statu
                    $('.statu_upload').html('<div class="link_uploaded"><i class="material-icons">done</i> '+$('.notif').attr('file_ready')+' <a href="'+$('.ip_server').attr('protocol')+$('.ip_server').attr('ip')+'/watch?media='+data.hashName+'" class="my_link"><span class="blue-text text-darken-2">'+$('.notif').attr('file_here')+'</span></a></div>')
                    $('.statu_upload').fadeIn()

                    //we show the upload form and hide input text
                    // We show the dashboard
                    $(".selector").fadeIn();
                    $('.command_selector').hide('slow');
                    init_form ()

                }else{

                    //We change the bar statu
                    $('.statu_upload').html('<div class="link_uploaded"><i class="material-icons">close</i><span class="red-text text-darken-2"> '+data.message+'</span></div>')
                    $('.statu_upload').fadeIn()

                    //we hide the upload form and show input text
                    $(".selector").fadeIn();
                    $('.command_selector').hide();
                    init_form ()
                }
            }
        })

    })




    function init_form () {
        
        $('.file_input').removeAttr('disabled')
        $('.filer,.file_input').val('') //We rest the file input
        $('.publish').hide()
        big_progress_bar (0)
        $('.up_title').text('')
        $('.publish').removeClass('disabled')
        $('.cancel_publish').fadeIn()

    }




	$(document).on('dragenter', function (e)
	{
		e.stopPropagation();
		e.preventDefault();
		$('.icon_publish').removeClass('red-text text-darken-2')
        $('.text_import').html('Ici')

	});


	$(document).on('dragover', function (e)
	{
		e.stopPropagation();
		e.preventDefault();
		$('.icon_publish').removeClass('red-text text-darken-2')
	});

	$(document).on('drop', function (e)
	{
		e.stopPropagation();
		e.preventDefault();
		$('.icon_publish').removeClass('red-text text-darken-2')
	});

    $("#cancel").click(function(e){
        e.preventDefault();
        $(".selector").fadeIn("slow");
        $(".command_selector").fadeOut();
        rowCount = 0;
        fileCount = 0;
    });





});