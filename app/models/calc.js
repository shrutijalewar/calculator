'use strict';
function Calc (){}

Calc.add = function(x,y){
  return x + y;

};
Calc.sub = function(x,y){
  return x - y;
};

Calc.distance = function(p1, p2){

  var a = p1.x - p2.x;
  var b = p1.y - p2.y;
  return Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
};

Calc.line = function(p1,p2){
  var m = (p1.y - p2.y)/(p1.x - p2.x);
  var b = p1.y -( m * p1.x);
  var sign = b < 0 ? '-' : '+';
  b = Math.abs(b);
  return m.toFixed(1) +'x'+ sign + b.toFixed(1);
};

Calc.trip = function(points){
  var sum = 0;

  for (var i = 0; i < points.length - 1; i++){
  sum += Calc.distance(points[i], points[i+1]);
  }
  return Math.abs(sum);
};


Calc.mean = function(data){
  var sum = 0;
  for (var i = 0; i < data.length; i++){
  sum += data[i];
  }
  return sum/data.length;
};

Calc.stdev = function(data){
  var m = Calc.mean(data);
  var sum = 0;
 
  for (var i = 0; i < data.length; i++){
  sum += Math.pow((data[i] - m), 2);}
  
  var s = Math.sqrt(sum / data.length);
  return s;
};


module.exports = Calc;





