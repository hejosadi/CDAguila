var loading = false;
 
// Last loaded index
var lastIndex =0;
 
// Max items to load
var maxItems = 60;
 
// Append items per load
var itemsPerLoad = 5;
 
// Attach 'infinite' event handler
$(document).on('infinite', '[data-page="comentarios"] .infinite-scroll', function () {
 maxItems = arrComentarios.length;
  // Exit, if loading in progress
  if (loading) return;
 
  // Set loading flag
  loading = true;
 
  // Emulate 1s loading
  setTimeout(function () {
    // Reset loading flag
    loading = false;
 
    if (lastIndex >= maxItems) {
      // Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
      myApp.detachInfiniteScroll($$('.infinite-scroll'));
      // Remove preloader
      $$('.infinite-scroll-preloader').remove();
      return;
    }
 
    // Generate new items HTML
    var html = '';
    for (var i = lastIndex + 1; i <= lastIndex + itemsPerLoad; i++) {
    if(i == arrComentarios.length + 1){
      break; 
    }
     var card = new strLayouCard(arrComentarios[i - 1]);
    var strCard = "";
    
    if(arrComentarios[i - 1]["urlImg"].match(/\S/))
    {
      if(!arrComentarios[i - 1]["content"].match(/\S/)){
        strCard= card.withIMGNoContent();
      }else{
      strCard= card.withIMG();
      }
    }
    else
    {
       strCard= card.withoutIMG();
    }
    html+=strCard; 
    }
 
    // Append new items
     $("#riverComentarios").append(html);
  //  $$('.list-block ul').append(html);
 
    // Update last loaded index
    lastIndex = $('#infComentarios .card').length;
  }, 1000);
}); 

var fillFirtsComments = function(ext){
  
 arrComentarios=[];
    $.ajax({
    url: strT()+ext+"?json=1",
    type: "GET",
    dataType: "jsonp",
timeout: 5000,
    success: function(data){
        //console.log(data);
       getArrayComments(data);

      //getSliderContent(data);
     
    },
    error: function(XMLHttpRequest, textStatus, errorThrown){
     /* swTimer(0, 18);
	  setInterval(function () {
	   location.reload();
	  }, 10000);*/
    }
       });  
    
};
var arrComentarios=[];
var getArrayComments = function(data){
  $.each(data.post, function(i, field){
    if(i == "comments"){
      
     if(field.length > 0){
       $.each(field, function(j, comentario){
         var obj=[];
         obj['urlImg']=fixIMG(comentario["content"]);
       obj['content']=$(comentario["content"]).text();
        obj['title']=comentario["name"];
      obj['id']="";
       
      arrComentarios.push(obj);
       });
       lastIndex=0;
    llenarRiverComentarios();
     }else{
         $("#riverComentarios").html("No hay comentarios en esta publicacion");
     }
    }
  });
  
};
var llenarRiverComentarios = function(){
  var strHTML="";
  for (var i = lastIndex + 1; i <= lastIndex + itemsPerLoad; i++) {
    if(i == arrComentarios.length + 1){
      break; 
    }
    var card = new strLayouCard(arrComentarios[i - 1]);
    var strCard = "";
    if(arrComentarios[i - 1]["urlImg"].match(/\S/))
    {
      if(!arrComentarios[i - 1]["content"].match(/\S/)){
        strCard= card.withIMGNoContent();
      }else{
      strCard= card.withIMG();
      }
    }
    else
    {
       strCard= card.withoutIMG();
    }
    strHTML+=strCard; 
    }
    $("#riverComentarios").append(strHTML);
     lastIndex = $('#infComentarios .card').length;

};
var fixIMG = function(strContent){
  //strContent = 
  //  console.clear();
  var urlReturn ="";
  var count =$("<div></div>").append(strContent).find("img").length;
  if(count > 0){
  
   strContent = $("<div></div>").append(strContent).find("img")[0].outerHTML;
   var url = $(strContent).attr("src");
   if(!ValidURL(url)){
     
     if(url.match(/\S/)){
       if(url.indexOf("data:") ==-1){
         urlReturn = "data:"+url;
       }else{
         urlReturn = url;
       }
     }
      
   }else{
     urlReturn = url;
   }
  
  }
 return urlReturn;
  
};