$(document).ready( function(){
	
	fillSliderTop();
	fillNewsRiver();
  
});
var strLayoutImgCard = function(arrayOptions){
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
    "<a href='news.html?id_post="+arrayOptions["id"]+"' class='link'>Lee mas</a>"+
  "</div>"+      
       "</div>"; 
       
   return strReturn; 
  }