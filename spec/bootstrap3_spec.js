describe('Bootstrap 3 without jQuery', function() {
    
    function getStyle(element, property) {
        if (typeof element === 'string') {
            element = document.querySelector('element');
        }
        var style = window.getComputedStyle(element, null);
        if (!!style) {
            return style.getPropertyValue(property);
        }
        return false;
    }
    
    var DELAY = 500; // To allow for animated effects and DOM manipulation
    
    beforeEach(function(done) {
        setTimeout(function() {
            done();
        }, DELAY);
    });
    
    // Test collapsible menus
    var collapseToggle = document.querySelector('[data-target="#navbar"]');
    var collapseTarget = document.getElementById('navbar');
    
    it('can uncollapse a menu on first click', function(done) {
        collapseToggle.click();
        setTimeout(function() {
            expect(getStyle(collapseTarget, 'height')).not.toBe('0px');
            done();
        }, DELAY);
    });
    
    it('can collapse a menu on second click', function(done) {
        collapseToggle.click();
        setTimeout(function() {
            expect(getStyle(collapseTarget, 'height')).toBe('0px');
            done();
        }, DELAY);
    });
    
    // Test alert boxes
    var alertList = document.querySelectorAll('[data-dismiss="alert"]');
    alertList[0].click();
    
    it('can close and remove an alert box', function() {
        var alertList2 = document.querySelectorAll('[data-dismiss="alert"]');
        expect(alertList2.length).toBeLessThan(alertList.length);
    });

    // Test dropdown lists
    var dropdownToggle = document.getElementById('dropdownMenu1');
    var dropdownList = document.querySelector('[aria-labelledby="dropdownMenu1"]');
    
    it('can open dropdown on first click', function() {
        dropdownToggle.click();
        expect(getStyle(dropdownList, 'display')).toBe('block');
    });
    
    it('can close dropdown on second click', function() {
        dropdownToggle.click();
        expect(getStyle(dropdownList, 'display')).toBe('none');
    });
    
});