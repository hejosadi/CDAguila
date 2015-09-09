var fillTemporada = function(){
 $.ajax({
    url: strT()+"api/get_page/?page_slug=temporada",
    type: "GET",
    dataType: "jsonp",
timeout: 5000,
    success: function(data){
        console.log(data);
        
      getTemporada(data);
    },
    error: function(XMLHttpRequest, textStatus, errorThrown){
    
    }
       });  	
};
var getTemporada= function(data){
	 $.each(data.page, function(i, field){
        if(i == "content"){ 
        var mainContent = field;
       mainContent = $('<div></div>').append(mainContent).find('tbody').end().html();
mainContent = $('<div></div>').append(mainContent).find('img').removeAttr('width').end().html();
mainContent = $('<div></div>').append(mainContent).find('img').removeAttr('height').end().html();
mainContent = $('<div></div>').append(mainContent).find('img').removeAttr('style').end().html();
mainContent = $('<div></div>').append(mainContent).find('img').attr('class', 'sw-imgTopSlider').end().html();

      
      
       $(mainContent).find("tr").each(function () {
       if($(this).text()==""){}else{  
var elemImg=[];
       $(this).find("img").each(function(i, elem){
         elemImg.push($(this)[0].outerHTML);
       
       });
       
       $(this).html($('<div></div>').append($(this).html()).find('img').remove().end().html());
       $(this).find("h5").replaceWith($("<span>"+$(this).find("h5").html()+"</span>"));
       $(this).find("h4").replaceWith($("<span>"+$(this).find("h4").html()+"</span>"));
       var strHref = $(this).find('a').attr("href");
       strHref= strHref.match(/\/\/[^\/]+\/([^\.]+)/)[1];
     
       $(this).html($('<div></div>').append($(this).html()).find('a').removeAttr("href").end().html());
              $(this).html($('<div></div>').append($(this).html()).find('a').attr("href","mach.html?url="+strHref).end().html());
        var strTime = $('<div></div>').append($(this).html()).find('time')[0].outerHTML;
        $(this).html($('<div></div>').append($(this).html()).find('time').remove().end().html());
        $("#ulTemporadaInfinita").append(' <li class="item-content"><div class="item-inner fila"><div class="row no-gutter" >'+
                '<div class="col-33 sw-center "><span class="sw-tr">'+elemImg[0]+'</span></div>'+
               ' <div class="col-33 sw-center "><span class="sw-tr fila sw-center blanco">'+$(this).html()+'</span></div>'+
                '<div class="col-33 sw-center "><span class="sw-tr">'+elemImg[1]+'</span></div>'+
              '</div><div class="row no-gutter" ><div class="col-100 sw-center "><span class="sw-tr blanco">'+
              strTime+'</span></div></div></div></li>');
       }
         
});
        }
      });
      
};
var dncMach= function(){
  $.get('/mach.html', function(data) {
   mainView.router.loadContent(data);
});
};
