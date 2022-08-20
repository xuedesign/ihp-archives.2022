//lazyload
loadjs('https://cdn.jsdelivr.net/npm/lozad@1.16.0/dist/lozad.min.js', function() {
    const observer = lozad();
    observer.observe();
});

//headerroll
loadjs('https://xuedesign.github.io/ihp-archives.2022/js/headerroll.js');

//checkall
loadjs('https://xuedesign.github.io/ihp-archives.2022/js/checkall.js');


//fancybox
loadjs(['https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css', 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js']);

//dialog
//loadjs('https://xuedesign.github.io/ihp-archives.2022/js/dialog.js');
loadjs('../js/dialog.js');