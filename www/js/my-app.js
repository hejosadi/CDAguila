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
 //fillSliderTop();
 fillTablaPosiciones();
	//fillNewsRiver();
});

myApp.onPageInit('social', function (page) {
 //fillSliderTop();
 fillSocialMediaRiver();
	//fillNewsRiver();
});
myApp.onPageInit('news', function (page) {
 //fillSliderTop();
 
	//fillNewsRiver();
});
// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageBeforeAnimation('mach', function (page) {
    // run createContentPage func after link was clicked
   //alert('onPageInit for evgram -- '+page.url+' page.query.id='+page.query.url);
  //console.log(page);
  fillMachRiver(page.query.url);
});

/*$$(document).on('pageInit', function (e) {
    var page = e.detail.page;
    // Code for About page
    if (page.name === 'mach') {
       alert('onPageInit for evgram -- '+page.url+' page.query.id='+page.query.url);
    }
});*/

var mySwiper1 = myApp.swiper('.swiper-1', {
  pagination:'.swiper-1 .swiper-pagination',
  spaceBetween: 0,
    paginationHide: true,
  paginationClickable: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
});


