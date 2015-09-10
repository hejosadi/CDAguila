  var fillTablaPosiciones = function(){
    $.ajax({
    url: strT()+"api/get_page/?page_slug=tabla-de-posiciones",
    type: "GET",
    dataType: "jsonp",
timeout: 5000,
    success: function(data){
        console.log(data);
      $.each(data.page, function(i, field){
        if(i == "content"){ 
        var mainContent = field;
       mainContent = $('<div></div>').append(mainContent).find('table')[0].outerHTML;
mainContent = $('<div></div>').append(mainContent).find('img').removeAttr('width').end().html();
mainContent = $('<div></div>').append(mainContent).find('img').removeAttr('height').end().html();
mainContent = $('<div></div>').append(mainContent).find('img').removeAttr('style').end().html();
mainContent = $('<div></div>').append(mainContent).find('img').attr('class', 'sw-imgSmall').end().html();
mainContent = $('<div></div>').append(mainContent).find('table').attr('class', 'sw-TablaPosicion').end().html();
mainContent = $('<div></div>').append(mainContent).find('td').attr('valign', 'middle').end().html();

       $(".tablaPosiciones").html(mainContent);
      
       
//mainView.router.loadContent(newPageContent);
      
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