var fillNewsPage = function(id_news){
$.ajax({
    url: strT()+'api/get_post/?id='+id_news,
    type: 'GET',
    dataType: 'jsonp',
	timeout: 5000,
    success: function(data){
	
     console.log(data);
  var intCuenta = 0; 
    var topContent=""; var mainContent = ""; var urlBG=""; var jsID = 0;
var jsnComentarios=0;
$.each(data.post, function(i, field){
 
  intCuenta +=1;
 switch(i) {
 case "comment_count":
 jsnComentarios = field;
 break;
    case "title_plain":
    topContent=field;
       
        break;
    case "content":
    mainContent=field;
	if(mainContent !=""){
	mainContent = $('<div></div>').append(mainContent).find('div').removeAttr('class').end().html();
	mainContent = $('<div></div>').append(mainContent).find('div').removeAttr('style').end().html();
mainContent = $('<div></div>').append(mainContent).find('img').removeAttr('width').end().html();
mainContent = $('<div></div>').append(mainContent).find('img').removeAttr('height').end().html();
mainContent = $('<div></div>').append(mainContent).find('img').removeAttr('class').end().html();
mainContent = $('<div></div>').append(mainContent).find('img').removeAttr('style').end().html();
mainContent = $('<div></div>').append(mainContent).find('iframe').removeAttr('width').end().html();
mainContent = $('<div></div>').append(mainContent).find('iframe').removeAttr('height').end().html();
mainContent = $('<div></div>').append(mainContent).find('iframe').removeAttr('class').end().html();
mainContent = $('<div></div>').append(mainContent).find('iframe').removeAttr('style').end().html();
mainContent = $('<div></div>').append(mainContent).find('a').removeAttr('href').end().html();
mainContent = $('<div></div>').append(mainContent).find('img').attr('class', 'lazy lazy-fadeIn').end().html();
mainContent = $('<div></div>').append(mainContent).find('img').attr('width', '100%').end().html();
mainContent = $('<div></div>').append(mainContent).find('iframe').attr('width', '100%').end().html();

}
        break;
 case "id":
   jsID=field;
    
        break;		
        case "thumbnail_images":
$.each(field, function(info, img){
  if(info == "full"){   
 urlBG = img["url"];
 urlBG = urlBG.replace("\"","");
}
});

        break;  
}

//append, html
 

 
        });
		
		/*if(jsnComentarios>0)
		{
		$("#cantidadC").html(jsnComentarios+ " Comentarios");
		}
		else{
		$("#cantidadC").html("No hay comentarios se el primero en comentar");
		}*/
	
	
		 $("#newsPage").html("<div> <h2>"+ topContent + "</h2><br /><div class='row responsive-sm'>"+
  "</div ></div><div >"+
 "<div > <div class='ArticuloEscrito'>"+
 mainContent +"</div></div></div>" );

		
    },
   error: function(XMLHttpRequest, textStatus, errorThrown){

	  
    }
  });

};