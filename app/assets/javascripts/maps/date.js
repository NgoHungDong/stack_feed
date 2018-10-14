//
// Datepicker
//

'use strict';

var Datepicker = (function() {

    //
    // Variables
    //

    var $date = $('[data-toggle="date"]');


    //
    // Methods
    //

    function init($this) {

        var options = {
            isableTouchKeyboard: true,
            autoclose: false
        };

        $this.datepicker(options);
    }


    //
    // Events
    //

    if ($date.length) {

        // Init selects
        $date.each(function() {
            init($(this));
        });
    }

})();