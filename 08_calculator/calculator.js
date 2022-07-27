const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(array) {
  let sum = 0
  for(let i=0;i<array.length;i++){
    sum+= array[i]
  }
  console.log(sum)
  return sum
};


const multiply = function(array) {
  let total = 1
  for(let i=0;i<array.length;i++){
    total= total*array[i]
  }
  return total
};

const power = function(a,b) {
	return a**b
};

const factorial = function(a) {
	let result = a;
  if(a!=0){
    for(let i=1;i<=a-1;i++){
      console.log(i);
      result = result*i;
    }
    return result;
  }else{
    return 1;
  }

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
