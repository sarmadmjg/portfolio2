(function(){

    // Resize the header according to scroll and window size
    var headerHeight = 100;
    var opacityBreakPoint = 400;

    var header = $("header");
    var complications = $(".techs, .certifications");
    var title = $(".title");

    $(window).on('load scroll resize', function() {
        var smallScreen = $(window).width() < 768;
        var scroll = $(document).scrollTop();
        var fullHeight = $(window).height();

        if (! smallScreen) {
            title.css({'text-align': 'left'});
        }

        header.height(Math.max(fullHeight - scroll, headerHeight));

        opacity = (Math.max(fullHeight - scroll, opacityBreakPoint) - opacityBreakPoint) / (fullHeight - opacityBreakPoint);
        complications.css({'opacity': opacity});

        if (scroll >= opacityBreakPoint) {
            complications.css({'display': 'none'});
            title.css({'text-align': 'left'});
        } else {
            complications.css({'display': 'block'});
            if (smallScreen) {
                title.css({'text-align': 'center'});
            }
        }
    });
})();
