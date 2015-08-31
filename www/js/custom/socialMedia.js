var fillSocialMediaRiver = function(ext){
 
    $.ajax({
    url: "http://cdaguila.abogadoscorp.com/lo-que-la-aficion-dice/?json=1",
    type: "GET",
    dataType: "jsonp",
timeout: 5000,
    success: function(data){
        console.log(data);
        var strContentNewsRiver="";
            $.each(data.page, function(i, field){
              if(i == "content"){  
             var strContentVariable = field;
             var strUrl = "";
          alert(strContentVariable);
          
             strContentNewsRiver =$("<div></div>").append(strContentVariable).find("script")[0].outerHTML;
       
       $("#socialMediaRiver").html(strContentNewsRiver);   
              }
            });
            
    },
    error: function(XMLHttpRequest, textStatus, errorThrown){
    

    }
       });
   
     
  }