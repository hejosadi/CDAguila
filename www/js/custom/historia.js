
   
    var fillHistoriaCDAguila = function(){
    $.ajax({
    url: strT()+"api/get_page/?page_slug=historia",
    type: "GET",
    dataType: "jsonp",
timeout: 5000,
    success: function(data){
        console.log(data);
       

      getHistoriaContent(data);
     
    },
    error: function(XMLHttpRequest, textStatus, errorThrown){
     /* swTimer(0, 18);
	  setInterval(function () {
	   location.reload();
	  }, 10000);*/
    }
       });  
    }
var getHistoriaContent= function(data){
    
  var mainContent = "";
$.each(data.page, function(i, field){
   if(i == "content"){ 
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
}
  

 
        });

	
		 $("#historiaContenido").html(mainContent);


};
