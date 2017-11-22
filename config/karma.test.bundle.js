import 'angular';
import 'angular-mocks/angular-mocks';

describe('Sanity Check:', () => {

    it('Karma is working.', () => {
        expect(0).toBe(0);
    });

});

const context = require.context('./../src', true, /\.spec.js$/);
context.keys().map(context);
