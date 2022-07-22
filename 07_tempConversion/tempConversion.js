const ftoc = function(num) {
  let celsius  = (num-32)/(1.8);
  celsius = Math.round(celsius * 10) / 10
  return celsius
};


const ctof = function(num) {
  let farenheit = (num*1.8)+32;
  farenheit = Math.round(farenheit * 10) / 10;
  return farenheit
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
