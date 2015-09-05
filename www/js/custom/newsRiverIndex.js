var fillNewsRiver = function(){
    $.ajax({
    url: strT()+"api/get_recent_posts/",
    type: "GET",
    dataType: "jsonp",
timeout: 10000,
    success: function(data){
        console.log(data);
        var strContentNewsRiver="";
            $.each(data.posts, function(i, field){
             var strContentVariable = field["content"];
             var strUrl = "";
             if(typeof(field["thumbnail_images"])!= 'undefined'){
               
              strUrl = field["thumbnail_images"]["medium"]["url"];
       if(strUrl ==""){}
       else{
         strUrl=field["thumbnail_images"]["full"]["url"]
       }}
       var obj = [];
       obj['urlImg']=strUrl;
       obj['content']=$(strContentVariable).text();
        obj['title']=field["title_plain"];
      obj['id']=field["id"];
              strContentNewsRiver+= strLayoutImgCard(obj); 
            });
            $("#newsRiverSoccer").html("");
       $("#newsRiverSoccer").append(strContentNewsRiver);   
    },
    error: function(XMLHttpRequest, textStatus, errorThrown){
    

    }
       });
  }