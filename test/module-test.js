'use strict';
const expect = require('unexpected');

const System = require('jspm').Loader();

const module = await System.import('module.js');

describe('tesing module', () => {
  it('should be a function', () => {
    return expect(module, 'to be a function');
  });
});
