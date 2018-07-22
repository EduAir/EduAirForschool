
$(document).ready(function(){ 

    var hoster = 'localhost';
    
    var socket  = io.connect('http://'+hoster+':8080/');

    $('.click_file').click(function  () { 
    	
    	$('#filer').click();
    })


    var fileinput = document.getElementById('filer');


    webrtc = new SimpleWebRTC({
                // we don't do video
                localVideoEl: '',
                remoteVideosEl: '',
                url: 'http://'+hoster+':8888/',

                // dont ask for camera access
                autoRequestMedia: false,
                // dont negotiate media
                receiveMedia: {
                   offerToReceiveAudio: 0,
                   offerToReceiveVideo: 0
                }
    });

    socket.emit('keep_code',$.jStorage.get('code'))
                
                // join without waiting for media
            webrtc.joinRoom($.jStorage.get('code').toString());

            webrtc.on('createdPeer', function (peer) {

                    // send a file 
                fileinput.addEventListener('change', function() {
        
                    fileinput.disabled = true;

                    $('.determinate').attr('style','width: 0%');

                    var file = fileinput.files[0];
                    var sender = peer.sendFile(file);

                    $('.annuler').fadeIn()
                });

                    // receiving an incoming filetransfer
                peer.on('fileTransfer', function (metadata, receiver) {

                    $('.annuler,.progress').show("slide", { direction: "right" }, 500)

                        console.log('incoming filetransfer', metadata.name, metadata);

                        receiver.on('progress', function (bytesReceived) {
                            
                            var percentage = Math.floor((bytesReceived*100)/metadata.size);

                            $('.percentage').html('<span class="blue-text text-darken-2">'+metadata.name+' </span> <a class="btn-floating btn-large waves-effect waves-light click_file blue"> '+percentage+'%</a>');

                            $('.determinate').attr('style','width:'+percentage+'%');
                            $('.selector').html('<a class="btn-floating btn-large download waves-effect waves-light blue" ><i class="mdi-action-verified-user"></i></a>');
                            
                            socket.emit('percentage',{'percentage':percentage,'code':$.jStorage.get('code'),'name':metadata.name})
                            console.log('receive progress', bytesReceived, 'out of', metadata.size);
                        });
                        // get notified when file is done
                        receiver.on('receivedFile', function (file, metadata) {
                            
                            $('.progress,percentage').hide("slide", { direction: "right" }, 500);
                            $('.percentage').html('');
                            $('.determinate').attr('style','width: 0%');
                            $('.annuler').hide("slide", { direction: "left" }, 500)


                            $('.selector').html('<h3>Click to save the file </h3> <a class="btn-floating btn-large download waves-effect waves-light blue" download="'+metadata.name+'" href="'+ URL.createObjectURL(file)+'"><i class="mdi-file-file-download"></i></a><br> and <br> <a onclick="self.close ()" class="waves-effect waves-light btn red"> Close </a>');
                             
                            socket.emit('stop',$.jStorage.get('code'))
                            // close the channel
                            receiver.channel.close();
                        });
                });
            });


    socket.on('percentage',function  (data) {
        
        $('.determinate').attr('style','width:'+data.percentage+'%');
        $('.progress').show("slide", { direction: "right" }, 500);
        $('.selector').html('<a class="btn-floating btn-large download waves-effect waves-light blue" ><i class="mdi-action-verified-user"></i></a>');

        $('.percentage').html('<span class="blue-text text-darken-2">'+data.name+' </span> <a class="btn-floating btn-large waves-effect waves-light click_file blue"> '+data.percentage+'%</a>');
    })

    socket.on('stop',function  () {
        
        $('.selector').html('<br><a onclick="self.close ()" class="waves-effect waves-light btn red"> Close </a>');

        $('.annuler').hide("slide", { direction: "left" }, 500)

    })
    

    $('.annuler').click(function  () {
        
        socket.emit('cancel',$.jStorage.get('code'))
    })

    socket.on('cancel',function  () {
        
        $('.container').html('<h1> Operation aborded by the peer</h1> <a onclick="self.close ()" class="waves-effect waves-light btn red"> Close </a>');
    })
 

});
