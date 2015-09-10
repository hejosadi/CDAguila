
   
    var fillSliderTop = function(){
    $.ajax({
    url: strT()+"api/get_page/?page_slug=partidos",
    type: "GET",
    dataType: "jsonp",
timeout: 10000,
    success: function(data){
        console.log(data);
       

      getSliderContent(data);
     
    },
    error: function(XMLHttpRequest, textStatus, errorThrown){
     /* swTimer(0, 18);
	  setInterval(function () {
	   location.reload();
	  }, 10000);*/
    }
       });  
    }
var getSliderContent= function(data){
    $.each(data.page, function(i, field){
        if(i == "content"){ 
        var mainContent = field;
       mainContent = $('<div></div>').append(mainContent).find('tbody').end().html();
mainContent = $('<div></div>').append(mainContent).find('img').removeAttr('width').end().html();
mainContent = $('<div></div>').append(mainContent).find('img').removeAttr('height').end().html();
mainContent = $('<div></div>').append(mainContent).find('img').removeAttr('style').end().html();
mainContent = $('<div></div>').append(mainContent).find('img').attr('class', 'sw-imgTopSlider').end().html();

       $(".swiper-wrapper").html("");
      
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
        $(".swiper-wrapper").append('<div class="swiper-slide"><div class="row no-gutter" >'+
                '<div class="col-33 sw-center negro"><span class="sw-tr">'+elemImg[0]+'</span></div>'+
               ' <div class="col-33 sw-center negro"><span class="sw-tr">'+$(this).html()+'</span></div>'+
                '<div class="col-33 sw-center negro"><span class="sw-tr">'+elemImg[1]+'</span></div>'+
              '</div><div class="col-100 sw-center negro"><span class="sw-tr">'+
              strTime+'</span></div></div>');
        
        
        /* $(".swiper-wrapper").append("<div class=\"swiper-slide\"><span><span class='sw-tr'>"+elemImg[0]+
           "</span><span class='sw-tr'>"+$(this).html()+"</span><span class='sw-tr'>"+elemImg[1]+"</span></span></div>");
       */
       }
         
});

       mySwiper1.update();
        }
      });
};
