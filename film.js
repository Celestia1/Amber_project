
    // If you want to autoplay when the window resized wider than 780px 
    // after load, you can add this:

    (window).resize(function() {
        if(document.body.clientWidth >= 870) {
            $('video').attr('autoplay', false);
        }
    }) 
    
