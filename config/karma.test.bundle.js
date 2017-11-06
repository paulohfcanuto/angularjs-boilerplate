import 'angular';
import 'angular-mocks/angular-mocks';

// Make sure Karma is running correctly.
describe('Sanity Check:', () => {
  it('Karma is working.', () => {
    expect(0).toBe(0);
  });
});

// Search for and run all .spec.js files in src/app.
const context = require.context('./../src', true, /\.spec.js$/);
context.keys().forEach(context);
