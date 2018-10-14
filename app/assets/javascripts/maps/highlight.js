//
// Highlight
//

'use strict';

var Highlight = (function() {

    // Variables

    var $highlight = $('.highlight');


    // Methods

    function init($this) {
        hljs.highlightBlock($this);
    }


    // Events

    if ($highlight.length) {
        $highlight.each(function(i, block) {
            init(block);
        })
    }

})();