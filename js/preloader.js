jQuery(document).ready(function($) {
    $(window).load(function() {
        setTimeout(function() {
            $('#preloader-background').fadeOut('slow', function() {});
        }, 1000);
        setTimeout(function() {
            $('#preloader-columns').fadeOut('slow', function() {});
        }, 2000);
    });
});