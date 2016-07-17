'use strict';

var expect = require('unexpected');
var System = require('jspm').Loader();

(async function() {
  var fn = await System.import('function.js');
  var obj = await System.import('object.js');

  describe('async/await', () => {
    describe('function.js', () => {
      it('should be a function', () => {
        return expect(fn, 'to be a function');
      });
    });

    describe('object.js', () => {
      it('should be an object', () => {
        expect(obj, 'to be an object');
      });

      it('should match signature', () => {
        expect(obj, 'to satisfy', {
          object: true
        });
      });
    });
  });

  run();
})();
