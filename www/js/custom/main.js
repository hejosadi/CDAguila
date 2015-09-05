 var strT = function(){
     var strOnline = "http://cdaguila.abogadoscorp.com/";
    
    $.ajax({
    url: '/Data/DataServer.json',
    type: 'GET',
    dataType: 'json',
     async:false,
     contentType: "application/json; charset=utf-8",
    success: function(data){
     
    strOnline = data["Server"][0]["url"];
  
    },
    error: function(data){
    
	  
    }
  });
     
      return strOnline; 
    };

$(document).ready(function(){

	fillSliderTop();
	fillNewsRiver();
 

});
var strLayoutImgCard = function(arrayOptions){
  var strReturn = "<div class='card demo-card-header-pic'>"+
  "<div style='background-image:url("+arrayOptions["urlImg"]+")'"+
   "valign='bottom' class='card-header color-white text-shadow no-border'>"+arrayOptions["title"]+"</div>"+
  "<div class='card-content'>"+
    "<div class='sw-card-inner'>"+
     " <p class='color-gray'></p>"+
  "<p>"+arrayOptions["content"]+"</P>"+
    "</div>"+
  "</div>"+
  "<div class='card-footer'>"+
    "<a href='news.html?id_post="+arrayOptions["id"]+"' class='link'>Lee mas</a>"+
  "</div>"+      
       "</div>"; 
       
   return strReturn; 
  };

var campoVasio = function(txtComen){
 txtComen = "Error campo " + txtComen;
var buttons = [
        {
            text: txtComen,
            label: true
        },
        {
            text: 'ok',
            color: 'red'
        },
    ];
    myApp.actions(buttons);
 }
var isValidEmailAddress = function (emailAddress) {
 var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
};

var strLayouCard= function(arrayOptions){
  this.withoutIMG = function(){
    var str = '<div class="card">'+
  '<div class="card-header" style="background-image:none!important;">'+arrayOptions["title"]+'</div>'+
  '<div class="card-content">'+
    '<div class="card-content-inner">'+arrayOptions["content"]+'</div>'+
  '</div>'+
  '<div class="card-footer">'+arrayOptions["id"]+'</div>'+
'</div>';
    return str;
  };
  this.withIMG = function(){
     var strReturn = "<div class='card demo-card-header-pic'>"+
  "<div style='background-image:url("+arrayOptions["urlImg"]+")'"+
   "valign='bottom' class='card-header color-white text-shadow no-border'>"+arrayOptions["title"]+"</div>"+
  "<div class='card-content'>"+
    "<div class='card-content-inner'>"+
     " <p class='color-gray'></p>"+
  "<p>"+arrayOptions["content"]+"</P>"+
    "</div>"+
  "</div>"+
  "<div class='card-footer'>"+
    arrayOptions["id"]+
  "</div>"+      
       "</div>"; 
       
   return strReturn; 
  };
  this.withIMGNoContent = function(){
     var strReturn = "<div class='card demo-card-header-pic'>"+
  "<div style='background-image:url("+arrayOptions["urlImg"]+")'"+
   "valign='bottom' class='card-header color-white text-shadow no-border'>"+arrayOptions["title"]+"</div>"+
  
  "<div class='card-footer'>"+
    arrayOptions["id"]+
  "</div>"+      
       "</div>"; 
       
   return strReturn; 
  };
};

  var summitComment = function(elementoID, nombre, correo, comentario, img, form){
     var jsNombre  = nombre.value;
  var jsCorreo =  correo.value;
  var jsComentario =  comentario.value;
   var intID = elementoID.value;
   
  var newSRC = $(img).attr("src");
  
  if (newSRC.match(/\S/)){
    
    jsComentario = jsComentario + "<img src='"+newSRC+"' >";
  
  }	
  if(!jsComentario.match(/\S/))
  {
  campoVasio("Comentario");
  return;
  }
    if(!jsNombre.match(/\S/))
  {
  campoVasio("Nombre");
  return;
  }
    if(!jsCorreo.match(/\S/))
  {
  campoVasio("Correo");
  return;
  }else{
   if (!isValidEmailAddress(jsCorreo)) {
   campoVasio("Correo No Valido");
   return;
   }
  } 
  var formData = {
            'author'              : jsNombre,
            'email'             : jsCorreo,
            'comment'    : jsComentario,
            'comment_post_ID': intID
        };
  
$.ajax({ // create an AJAX call...
        data: formData, // get the form data
        type: "POST", // GET or POST
          async:false,
        url: strT()+"wp-comments-post.php", // the file to call
        success: function(response) { // on success..
            console.log(response);
            $(form).html("Mensaje fue enviado Espera su aprovacion"); 
            $(img).attr("src","");// update the DIV
        }
    });

  };
  function swTimer(hou, sec){
    
    setInterval(function(){
    var a = new Date();
        document.getElementById("timer").innerHTML = hou +" : " + sec ;
        sec--;
        if(sec == 0)
        {
            hou--;
            sec = 60;
            if (hou == 0)
            {
                hou = 2;
            }
        }
        },500);
}
    function ValidURL(s) {
  var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
   return regexp.test(s);
}
        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
   /*$.ajax({
    url: strT()+'api/submit_comment/?post_id='+intID+'&name='+jsNombre+'&email='+jsCorreo+'&content='+jsComentario,
    type: 'GET',
    dataType: 'jsonp',
	
    success: function(data){
	
     console.log(data);
  //$("#formSend").html("<div class='card'><div class='item item-text-wrap'>Ingresado Con Exito</div></div>");
		
    },
    error: function(data){
      console.log(data);
	  
    }
  });  
   var formData = {
            'author'              : jsNombre,
            'email'             : jsCorreo,
            'comment'    : jsComentario,
            'comment_post_ID': intID
        };

    //console.log(formData);
    
   
    $.ajax({ // create an AJAX call...
        data: formData, // get the form data
        type: "POST", // GET or POST
        url: strT()+"wp-comments-post.php", // the file to call
        success: function(response) { // on success..
            console.log(response);
            $(form).html(jsComentario); 
            $(img).attr("src","");// update the DIV
        }
    });
  
     */

 
