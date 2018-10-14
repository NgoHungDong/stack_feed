//
// Dropdown
//

'use strict';

var Dropdown = (function() {

    // Variables

    var $dropdown = $('.dropdown');


    // Methods

    function hideDropdown($this) {

        // Add additional .hide class for animated dropdown menus in order to apply some css behind

        if ($this.hasClass('dropdown-animate')) {
            var $dropdownMenu = $this.find('.dropdown-menu');

            $dropdownMenu.addClass('hide');

            setTimeout(function() {
                $this.removeClass('hide');
            }, 300);
        }
    }


    // Events

    if ($dropdown.length) {
        $dropdown.on({
            'hide.bs.dropdown': function() {
                hideDropdown($dropdown);
            }
        })
    }
})();