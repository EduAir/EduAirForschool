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


    if($('.notif').attr('stat')!=''){

        $('.statu_upload').html('<i class="valign large material-icons">done</i>')

        $('.statu_upload').fadeIn()
    }

   

    var file_to_upload = [];

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

	

    $('.filer').change(function(e){ 
        
        $('.publish').fadeIn()

         // We show the dashboard
        $(".selector").fadeOut();
        $('.command_selector').fadeIn('slow');

        $('.statu_upload').html('')
        $('.statu_upload').fadeOut()

        var files = $(this)[0].files;

        prepare_file (files)

        $('.not_compatible').fadeOut();//We hide error message before

        total_progress_bar_file(0) 

        $('.number_of_file').html('')

    });


    var index_file = 0;

    $('.publish').click(function  () { 

        $('.publish').addClass('disabled')
        $('.file_input').attr("disabled", "disabled")

        if(file_to_upload.length>0){ 

            index_file = 0; //We initiate the file index for count

            upload_to_the_server(file_to_upload[index_file])
        }else{
            if(files_canceled.length>0){

                $('.incompatible').html('');

                for (var i = 0; i < files_canceled.length; i++) {
                    
                    $('.incompatible').append(files_canceled[i]+',')
                    $('.not_compatible').fadeIn();   
                }
            }
        }
        
        return false;
    })



  

    function big_progress_bar (percent) {
        
        $('.total_progress').attr('style','width: '+percent+'%')

        $('.percent_up').text(percent+'%')
    }

    

    var files_canceled = [];

    function prepare_file (files) {//To do. extention and size

        var all_files = files; 

        if (files.length > 0){

            $.each(all_files, function(i, files){

                //We verify file
                //Is it the good format
                var this_entire_type = files.type;
                
                this_entire_type = this_entire_type.split('/');
                
                var this_type = this_entire_type[0];
                
                var this_extension = this_type[1]; 

                switch(this_type){

                    case 'video':
                    case 'image':
                    case 'application':
 
                        if(this_type=='application' && file_type_application.indexOf(files.type)!=-1){

                            file_to_upload.push(files)
                        }else{

                            if(this_type=='video' || this_type=='image'){

                               file_to_upload = files;    
                            }else{
                                //We add this files on the canceled list
                                files_canceled.push(files.name)
                            }
                        }
                    break;

                    default:
                        //We add this files on the canceled list
                        files_canceled.push(files.name)
                    break;
                }
            })
        }

        //We hide the indeterminant progressbar even if it's not hide or not
        $('.state_upload').hide()
    }



    function total_progress_bar_file (percent) {

        $('.number_of_file').html(index_file+1+'/'+file_to_upload.length)
        
        $('.total_progress_total').attr('style','width:'+percent+'%')
    }



    function upload_to_the_server (file) {

        //We make progress the total progress bar
        var total_percent = (index_file+1)*100/file_to_upload.length;
        total_progress_bar_file (total_percent)

        //We show the progress bar
        $('.state_upload').fadeIn()

        // create a FormData object which will be sent as the data payload in the
        // AJAX request
        var formData = new FormData();

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

                    if(index_file<file_to_upload.length-1){

                        setTimeout(function  () {
                            index_file = index_file+1;
                            
                            upload_to_the_server(file_to_upload[index_file]); //We wait socket.io to send file data on window.socket.on('upload_treatment_ended'
                            
                            
                        },1000)
                       
                    }
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

            data: {'title':file_to_upload[index_file].name,'description':'','tags':'','file_name':results.file_name,'file_path':results.file_path},

            dataType: 'json',

            error: function  (err) {
              console.log(err)
            },
            success: function(data){  

                if(data.statu=='ok'){

                    if(index_file==file_to_upload.length-1){

                        //We change the bar statu
                        $('.statu_upload').html('<div class="link_uploaded"><i class="material-icons">done</i></div>')
                        $('.statu_upload').fadeIn()

                        //we show the upload form and hide input text
                        // We show the dashboard
                        $(".selector").fadeIn();
                        $('.command_selector').hide('slow');
                        init_form ()

                        window.location.href = "/upload_bulk?stat=ok";
                    }
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



    $("#cancel").click(function(e){
        e.preventDefault();
        $(".selector").fadeIn("slow");
        $(".command_selector").fadeOut();
        rowCount = 0;
        fileCount = 0;
    });





});