//
// Layout
//

'use strict';

var Layout = (function() {

    $("body").on("click", "[data-action]", function(e) {

        e.preventDefault();

        var $this = $(this);
        var action = $this.data('action');
        var target = $this.data('target');

        switch (action) {
            case "offcanvas-open":
                target = $this.data("target"), $(target).addClass("open"), $("body").append('<div class="body-backdrop" data-action="offcanvas-close" data-target=' + target + " />");
                break;
            case "offcanvas-close":
                target = $this.data("target"), $(target).removeClass("open"), $("body").find(".body-backdrop").remove();
                break;

            case 'aside-open':
                target = $this.data('target');
                $this.addClass('active');
                $(target).addClass('show');
                $('body').append('<div class="body-backdrop" data-action="aside-close" data-target=' + target + ' />');
                break;

            case 'aside-close':
                target = $this.data('target');
                $this.removeClass('active');
                $(target).removeClass('show');
                $('body').find('.body-backdrop').remove();
                break;

            case 'search-open':
                target = $this.data('target');
                $this.addClass('active');
                $(target).addClass('show');
                $('body').addClass('navbar-search-open').append('<div class="body-backdrop body-backdrop-dark" data-action="search-close" data-target="' + target + '" />');
                break;

            case 'search-close':
                target = $this.data('target');
                $('[data-action="search-open"]').removeClass('active');
                $(target).removeClass('show');
                $('body').removeClass('navbar-search-open').find('.body-backdrop').remove();
                break;
        }
    })

})();