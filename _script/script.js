//lazyload
loadjs('https://cdn.jsdelivr.net/npm/lozad@1.16.0/dist/lozad.min.js', function() {
    const observer = lozad();
    observer.observe();
});

//fancybox
loadjs(['https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css', 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js']);