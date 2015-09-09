var fillMachRiver = function(ext){
    var $div = $('<div></div>');
var jsUrl= strT();
      $div.load(jsUrl+ext+" form", function(){
       
         var jsID = $('<div></div>').append($(this).html()).find('#comment_post_ID').val();
   $("#hfID").val(jsID);
  
  $("#aComentaros").attr("href","comentarios.html?ext="+ext);
}); 
  
$div.load(jsUrl+ext+" article", function(){
  machOrderContent($(this).html());
 
});

  }
var machOrderContent = function(strHTMLContent){  
    var title="";
    var machTeams="";
   
    title=$('<div></div>').append(strHTMLContent).find('h1.entry-title').html();
    machTeams=$('<div></div>').append(strHTMLContent).find('.sp-event-logos').html();
  strHTMLContent = $('<div></div>').append(strHTMLContent).find('.comment-content').remove().end().html();
  var intComentarios = $('<div></div>').append(strHTMLContent).find('.comment-body').length;
machTeams = $('<div></div>').append(machTeams).find('img').removeAttr('width').end().html();
machTeams = $('<div></div>').append(machTeams).find('img').removeAttr('height').end().html();
machTeams = $('<div></div>').append(machTeams).find('img').removeAttr('style').end().html();
machTeams = $('<div></div>').append(machTeams).find('img').removeAttr('class').end().html();
machTeams = $('<div></div>').append(machTeams).find('img').attr('class', 'sw-imgTopSlider').end().html();

var i = 0;
    $("<div></div>").append(machTeams).find("span").each(function(i, elem){
       //console.log($(this).html());
       var strInsert =$('<div></div>').append($(this).html()).find('img')[0].outerHTML +"<br/>"+
       $('<div></div>').append($(this).html()).find('.sp-team-name').html();
       $(".machTeam:eq("+i+")").html(strInsert);
       i+=1;
       
    });
 strHTMLContent =  $('<div></div>').append(strHTMLContent).find('.sp-event-logos').remove().end().html();
    
 strHTMLContent =  $('<div></div>').append(strHTMLContent).find('.entry-header').remove().end().html();
  strHTMLContent =  $('<div></div>').append(strHTMLContent).find('#comments').remove().end().html();
  strHTMLContent =  $('<div></div>').append(strHTMLContent).find('.comment-body').remove().end().html();
 
   $("#machTitle").html(title);
  $("#aComentaros").html(intComentarios + " Comentarios");
 
  //document.getElementById('hfID').value
     $( "#machRiver" ).html(strHTMLContent);
     
  }
  
 function capturePhoto() {
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(uploadPhoto, onFail, { 
        quality: 20, destinationType: Camera.DestinationType.DATA_URL,targetWidth: 300,
    		targetHeight: 300 
    });
}

// A button will call this function
// To select image from gallery
function getPhoto(source) {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(uploadPhoto, onFail, { quality: 20, allowEdit: true,
        destinationType: navigator.camera.DestinationType.DATA_URL,
        sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,targetWidth: 300,
    		targetHeight: 300
    });
}

function uploadPhoto(imageURI) {
    var largeImage = document.getElementById('largeImage');
    $(largeImage).attr("src","data:image/jpeg;base64," + imageURI);

}
//Success callback
function win(r) {
    alert("Image uploaded successfully!!");
}
//Failure callback
function fail(error) {
    alert("There was an error uploading image");
}
// Called if something bad happens.
// 
function onFail(message) {
    //alert('Failed because: ' + message);
}
