'use strict';

var expect = require('unexpected');
var System = require('jspm').Loader();

(async function() {
  var module = await System.import('module.js');

  describe('async/await', () => {
    it('should be a function', () => {
      return expect(module, 'to be a function');
    });
  });

  run();
})();

System.import('module.js').then(module => {

  describe('promise.then', () => {
    it('should be a function', () => {
      return expect(module, 'to be a function');
    });
  });

  run();
});
