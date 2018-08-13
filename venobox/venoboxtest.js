$(document).ready(function(){

    /* default settings */
    // $('.venobox').venobox(); 


    /* custom settings */
    $('.venobox').venobox({
        // framewidth: '400px',        // default: ''
        // frameheight: '300px',       // default: ''
        border: '2px',             // default: '0'
        bgcolor: 'ffffff',         // default: '#fff'
        // titleattr: 'data-title',    // default: 'title'
        numeratio: true,            // default: false
        infinigall: true            // default: false
    });

    /* auto-open #firstlink on page load */
    // $("#firstlink").venobox().trigger('click');
});