var mocha = require('mocha');
var expect = require("chai").expect;

describe('wgap-datalist', function() {
  var datalist = require('../index');
  
  describe('general functionality', function() {
    
    it('should implement the datalist API', function() {
      expect(function() {
        datalist({
          foo: 'bar'
        })
      }).to.throw('fn must implement the datalist API');      
    });
    
    it('should return a function', function () {
      expect(datalist(require('weasels'))).to.be.a('function');
    });
    
  });
  
  describe('check options', function() {
    var check = datalist(require('buzzwords'));
    
    it('should accept an array of unacceptable words', function() {
      expect(function() {
        check('The synergistic cloud!', { unacceptable: 'synergistic' });
      }).to.throw('opts.unacceptable must be an array');
    });
    
    it('should accept an array of acceptable words', function() {
      expect(function() {
        check('The synergistic cloud!', { acceptable: 'cloud' });
      }).to.throw('opts.acceptable must be an array');
    });
   
  })
  
  describe('check functionality', function() {
    var check = datalist(require('buzzwords'));
    
    it('should detect words in the data list', function() {
      var suggestions = check('The synergistic cloud!');
      expect(suggestions.length).to.equal(1);
    });
    
    it('should allow additional words to be added to the blacklist', function() {
      var suggestions = check('The synergistic cloud!', { unacceptable: ['synergistic']});
      expect(suggestions.length).to.equal(2);
    });
    
    it('should allow words to be removed from the blacklist', function() {
      var suggestions = check('The synergistic cloud!', { acceptable: [ 'cloud' ]});
      expect(suggestions.length).to.equal(0);
    });
  });
});