(function(){

    // Resize the header according to scroll and window size
    var headerHeight = 100;
    $(window).on('load scroll resize', function() {
        var scroll = $(document).scrollTop();
        var fullHeight = $(window).height();

        $("header").height(Math.max(fullHeight - scroll, headerHeight));
    });
})();