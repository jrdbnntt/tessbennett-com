/**
 * Main
 */

(function() {
    'use strict';

    var sideBar = $('#wrapper');
    var win = $(window);

    // Nav
    $('#topbar-wrapper button').click(function(ev) {
        ev.preventDefault();
        sideBar.toggleClass('toggled');
    });

    win.resize(function() {
        if (win.width() > 1024) {
            sideBar.removeClass('toggled');
        }
    });
})();
