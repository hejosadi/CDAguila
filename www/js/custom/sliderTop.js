
    var strT = function(){
      var strOnline = "http://cdaguila.abogadoscorp.com/api/get_page/?page_slug=partidos";
     //strOnline= "/logs/topSlider.json";
      return strOnline; 
    }
    var fillSliderTop = function(){
    $.ajax({
    url: strT(),
    type: "GET",
    dataType: "jsonp",
timeout: 5000,
    success: function(data){
        console.log(data);
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
         $(".swiper-wrapper").append("<div class=\"swiper-slide\"><span><span class='sw-tr'>"+elemImg[0]+
           "</span><span class='sw-tr'>"+$(this).html()+"</span><span class='sw-tr'>"+elemImg[1]+"</span></span></div>");
       }
         
});
//mainView.router.loadContent(newPageContent);
       mySwiper1.update();
        }
        
      });
      
      
      
    },
    error: function(XMLHttpRequest, textStatus, errorThrown){
     /* swTimer(0, 18);
	  setInterval(function () {
	   location.reload();
	  }, 10000);*/

    }
       });  
    }

function swTimer(hou, sec){
    
    setInterval(function(){
    var a = new Date();
        document.getElementById("timer").innerHTML = hou +" : " + sec ;
        sec--;
        if(sec == 00)
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