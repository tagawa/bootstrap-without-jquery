/*!
 * Bootstrap without jQuery v0.4 for Bootstrap 3
 * By Daniel Davis under MIT License
 * https://github.com/tagawa/bootstrap-without-jquery
 */

(function() {
    'use strict';
    
    /*
     * Utility functions
     */
     
    // transitionend - source: https://stackoverflow.com/questions/5023514/how-do-i-normalize-css3-transition-functions-across-browsers#answer-9090128
    function transitionEndEventName () {
        var i,
            el = document.createElement('div'),
            transitions = {
                'transition':'transitionend',
                'OTransition':'otransitionend',  // oTransitionEnd in very old Opera
                'MozTransition':'transitionend',
                'WebkitTransition':'webkitTransitionEnd'
            };

        for (i in transitions) {
            if (transitions.hasOwnProperty(i) && el.style[i] !== undefined) {
                return transitions[i];
            }
        }

        return false;
    }
    var transitionend = transitionEndEventName();
    

    // Get the height of an element, even when collapsed
    function getHeight(element) {
        var children = element.children;
        var height = 0;
        for (var i = 0, len = children.length, child; i < len; i++) {
            child = children[i];
            height += Math.max(child.clientHeight, child.offsetHeight, child.scrollHeight);
        }
        return height;
    }
    
    /*
     * Collapse action
     * 1. Get list of all elements that are collapse triggers
     * 2. Add click event listener to these elements
     * 3. When clicked, change target element's class name from "collapse" to "collapsing"
     * 4. When action (collapse) is complete, change target element's class name from "collapsing" to "collapse in"
     * 5. Do the reverse, i.e. "collapse in" -> "collapsing" -> "collapse"
     */
     
    // Show a target element
    function show(element) {
        element.classList.remove('collapse');
        element.classList.add('collapsing');
        
        // Get hidden height of child elements
        var height = getHeight(element);
        element.style.height = height + 'px';
        
        // Call the complete() function after the transition has finished
        if (transitionend) {
            element.addEventListener(transitionend, function() {
                complete(element);
            }, false);
        } else {
            // For browsers that don't support transitions (e.g. IE9 and lower);
            complete(element);
        }
    }
    
    // Hide a target element
    function hide(element) {
        element.classList.remove('collapse');
        element.classList.remove('in');
        element.classList.add('collapsing');
        
        // Reset height of child elements
        element.style.height = '0px';
    }
    
    // Change classes once transition is complete
    function complete(element) {
        element.classList.remove('collapsing');
        element.classList.add('collapse');
        
        // Check whether the element is unhidden
        if (element.style.height !== '0px') {
            element.classList.add('in');
        }
    }

    // Start the collapse action on the chosen element
    function doCollapse(event) {
        // Get target element from data-target attribute
        event = event || window.event;
        var evTarget = event.currentTarget || event.srcElement;
        var dataTarget = evTarget.getAttribute('data-target');
        var target = document.querySelector(dataTarget);
        
        // Add the "in" class name when elements are unhidden
        if (target.classList.contains('in')) {
            hide(target);
        } else {
            show(target);
        }
        return false;
    }
    
    // Get all elements that are collapse triggers and add click event listeners
    var collapsibles = document.querySelectorAll('[data-toggle=collapse]');
    for (var i = 0, leni = collapsibles.length; i < leni; i++) {
        collapsibles[i].onclick = doCollapse;
    }
})();
