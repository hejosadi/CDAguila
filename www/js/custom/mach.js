var fillMachRiver = function(ext){
    var $div = $('<div></div>');

$div.load("http://cdaguila.abogadoscorp.com/"+ext+" article", function(){
  machOrderContent($(this).html());
 
});
       
  
  }
var machOrderContent = function(strHTMLContent){  
    var title="";
    var machTeams="";
    title=$('<div></div>').append(strHTMLContent).find('h1.entry-title').html();
    machTeams=$('<div></div>').append(strHTMLContent).find('.sp-event-logos').html();
  //console.log(machTeams);
  
machTeams = $('<div></div>').append(machTeams).find('img').removeAttr('width').end().html();
machTeams = $('<div></div>').append(machTeams).find('img').removeAttr('height').end().html();
machTeams = $('<div></div>').append(machTeams).find('img').removeAttr('style').end().html();
machTeams = $('<div></div>').append(machTeams).find('img').removeAttr('class').end().html();
machTeams = $('<div></div>').append(machTeams).find('img').attr('class', 'sw-imgTopSlider').end().html();

var i = 0;
    $("<div></div>").append(machTeams).find("span").each(function(i, elem){
       //console.log($(this).html());
       var strInsert =$('<div></div>').append($(this).html()).find('img')[0].outerHTML +"<br/>"+
       $('<div></div>').append($(this).html()).find('.sp-team-name').html();
       $(".machTeam:eq("+i+")").html(strInsert);
       i+=1;
       
    });
 strHTMLContent =  $('<div></div>').append(strHTMLContent).find('.sp-event-logos').remove().end().html();
    
 strHTMLContent =  $('<div></div>').append(strHTMLContent).find('.entry-header').remove().end().html();
 
   $("#machTitle").html(title);
   
   
     $( "#machRiver" ).html(strHTMLContent);
     
  }
  
  var summitComment = function(ext){
   
        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var formData = {
            'author'              : "hecto  r",
            'email'             : "info2@hotmail.com",
            'comment'    : "sos groso",
            'comment_post_ID': "108",
            'comment_parent': "0",
            'comment_image_108': ext 
        };

    
    
   
    $.ajax({ // create an AJAX call...
        data: formData, // get the form data
        type: "POST", // GET or POST
        url: "http://cdaguila.abogadoscorp.com/wp-comments-post.php", // the file to call
        success: function(response) { // on success..
            console.log(response); // update the DIV
        }
    });

   
  };