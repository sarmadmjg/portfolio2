(function(){

    // Resize the header according to scroll and window size
    var headerHeight = 100;
    var opacityBreakPoint = 400;

    var header = $("header");
    var complications = $(".techs, .certifications");
    var title = $(".title");
    var subtitle = $('.job-title');

    var smallScreen = $(window).width() < 768;

    $(window).on('load scroll resize', function() {
        var scroll = $(document).scrollTop();
        var fullHeight = $(window).height();

        // Adjust header height
        header.height(Math.max(fullHeight - scroll, headerHeight));

        // Adjust opacity of complications
        opacity = (Math.max(fullHeight - scroll, opacityBreakPoint) - opacityBreakPoint) / (fullHeight - opacityBreakPoint);
        complications.css({'opacity': opacity});
        subtitle.css({'opacity': opacity});

        // Align title to left/center in small screens
        if (scroll >= opacityBreakPoint) {
            complications.css({'display': 'none'});
            title.css({'text-align': 'left'});
        } else {
            complications.css({'display': 'block'});
            if (smallScreen) {
                title.css({'text-align': 'center'});
            }
        }

        // drop shadow
        if (header.height() <= headerHeight) {
            header.css({'box-shadow': '2px 2px 3px #ccc'});
        } else {
            header.css({'box-shadow': 'none'});
        }
    });

    // recaluculate screen size check after resizing the window
    $(window).on('load resize', function() {
        smallScreen = $(window).width() < 768;
        if (! smallScreen) {
            title.css({'text-align': 'left'});
            headerHeight = 100;
        } else {
            headerHeight = 70;
        }
    });
})();
