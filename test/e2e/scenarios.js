'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

    beforeEach(function() {
        browser().navigateTo('index.html');
    });


    it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
        expect(browser().location().url()).toBe("/home");
    });


    describe('home', function() {

        beforeEach(function() {
            browser().navigateTo('#/home');
        });


        it('should render home when user navigates to /home', function() {
            expect(element('h3.muted').text()).
                toMatch('ng-boilerplate');
        });

    });

});