//lazyload
loadjs('https://cdn.jsdelivr.net/npm/lozad@1.16.0/dist/lozad.min.js', function() {
    const observer = lozad();
    observer.observe();
});

//headerroll
loadjs('https://ihparchives.pages.dev/js/headerroll.js');

//checkall
loadjs('https://ihparchives.pages.dev/js/checkall.js');

//fontawesome
loadjs('https://kit.fontawesome.com/c66b525810.js');

//fancybox
loadjs(['https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css', 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js']);

//dialog
loadjs('https://ihparchives.pages.dev/js/dialog.js');
//loadjs('../js/dialog.js');

//slide-img
loadjs(['https://ihparchives.pages.dev/css/flexslider.css','https://cdn.jsdelivr.net/npm/flexslider/jquery.flexslider.min.js'], function() {
    $(window).load(function() {
        $('.flexslider').flexslider({
          animation: "slide"
        });
      });
});

//login
loadjs('https://ihparchives.pages.dev/js/login.js');

//lightgallery
loadjs(['https://ihparchives.pages.dev/css/viewer.css','https://cdn.jsdelivr.net/npm/viewerjs@1.10.5/dist/viewer.min.js'],function() {
    var viewer = new Viewer(document.getElementById('viewer'));
    var viewer = new Viewer(document.getElementById('subviewer'));
});

//print-img
loadjs('https://cdn.jsdelivr.net/npm/print-js@1.6.0/dist/print.min.js');