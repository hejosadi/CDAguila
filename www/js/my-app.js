// Initialize your app
var myApp = new Framework7({
  onAjaxStart: function (xhr) { myApp.showPreloader();},
  onAjaxComplete: function (xhr) { myApp.hidePreloader();},
});

// Export selectors engine
var $$ = Dom7;
 
// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
myApp.onPageInit('tabla', function (page) {
 fillTablaPosiciones();	
});
myApp.onPageInit('social', function (page) {
 fillSocialMediaRiver(2);	
});

myApp.onPageInit('comentarios', function (page) {
 fillFirtsComments(page.query.ext);	

});


myApp.onPageInit('index', function (page) {
fillSliderTop();
fillNewsRiver();
mySwiper1 = myApp.swiper('.swiper-1', {
  pagination:'.swiper-1 .swiper-pagination',
  spaceBetween: 0,
    paginationHide: true,
  paginationClickable: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
});
   //mainView.router.refreshPage();
  
// Or we can trigger it manually:

      
  
});

myApp.onPageInit('historia', function (page) {
 fillHistoriaCDAguila();
});
myApp.onPageInit('juntadirectiva', function (page) {
 fillJuntaCDAguila();
});
myApp.onPageInit('estadio', function (page) {
 fillEstadioCDAguila();
});

myApp.onPageInit('temporada', function (page) {
fillTemporada();
});
myApp.onPageInit('news', function (page) {
fillNewsPage(page.query.id_post);
});
// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageBeforeAnimation('mach', function (page) {
  fillMachRiver(page.query.url);
});

var mySwiper1 = myApp.swiper('.swiper-1', {
  pagination:'.swiper-1 .swiper-pagination',
  spaceBetween: 0,
    paginationHide: true,
  paginationClickable: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
});
$$('.open-links').on('click', function () {
    var clickedLink = this;
    myApp.popover('.popover-links', clickedLink);
});  

