/* global describe,it*/
'use strict';
var expect = require('chai').expect;
var Calc = require('../../app/models/calc');
describe('calc', function(){
  describe('.add', function(){
    it('should add two numbers', function(){
    var sum = Calc.add(2,3);
    expect(sum).to.equal(5);
    });
  });
  describe('.sub', function(){
    it('should subtract two numbers', function(){
    var diff = Calc.sub(5,3);
    expect(diff).to.equal(2);
    });
  });
  
  describe('.distance', function(){
  it('should measure distance between two points in a plane', function(){
  var dist = Calc.distance({x:3, y:7}, {x:5, y:7});
  expect(dist).to.equal(2);
  });
  });

  describe('.line', function (){
  it('should calculate the slope of a line', function(){
  var line = Calc.line({x:3, y:-2}, {x:9, y:2});
  expect(line).to.equal('0.7x-4.0');
  });
  });

  describe('.line', function (){
  it('should calculate the slope of a line', function(){
  var line = Calc.line({x:-3, y:5}, {x:-5, y:-8});
  expect(line).to.equal('6.5x+24.5');
  });
  });
   
  describe('.trip', function (){
  it('should calculate the total distance traversed through a number of point', function(){
  var trip = Calc.trip([{x:1, y:3}, {x:7, y:3}, {x:7, y:8}, {x:11, y:8}, {x:11, y:11}, 
    {x:13, y:11}]);
  expect(trip).to.equal(20);
  });
  });
  
  describe('.mean', function (){
  it('should calculate the mean', function(){
  var mean = Calc.mean([2, 7, 8, 6, 4, 10]);
  expect(mean).to.be.closeTo(6.2, 0.1);
  });
});
  describe('.stdev', function (){
  it('should calculate the standard deviation', function(){
  var stdev = Calc.stdev([2, 7, 8, 6, 4, 10]);
  expect(stdev).to.be.closeTo(2.6, 0.2);
  });
});

});








