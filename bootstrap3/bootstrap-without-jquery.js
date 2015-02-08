    
    // Show a dropdown menu
    function doDropdown(event) {
        event = event || window.event;
        var evTarget = event.currentTarget || event.srcElement;
        var target = evTarget.parentElement;
        var className = (' ' + target.className + ' ');
        
        if (className.indexOf(' open ') > -1) {
            // Hide the menu
            className = className.replace(' open ', ' ');
            target.className = className;
        } else {
            // Show the menu
            target.className += ' open ';
        }
        return false;
    }
    
    // Close a dropdown menu
    function closeDropdown(event) {
        event = event || window.event;
        var evTarget = event.currentTarget || event.srcElement;
        var target = evTarget.parentElement;
        
        target.className = (' ' + target.className + ' ').replace(' open ', ' ');
        
        // Trigger the click event on the target if it not opening another menu
        if(event.relatedTarget) {
            if(event.relatedTarget.getAttribute('data-toggle') !== 'dropdown'){
                event.relatedTarget.click();
            }
        }
        return false;
    }
    
    // Set event listeners for dropdown menus
    var dropdowns = document.querySelectorAll('[data-toggle=dropdown]');
    for (var k = 0, dropdown, lenk= dropdowns.length; k < lenk; k++) {
        dropdown = dropdowns[k];
        dropdown.setAttribute('tabindex', '0'); // Fix to make onblur work in Chrome
        dropdown.onclick = doDropdown;
        dropdown.onblur = closeDropdown;
    }
})();
