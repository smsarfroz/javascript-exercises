const add = function(a,b) {
  return a+b ;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	// let result = 0;
  // array.forEach(element => {
  //   result+=element;
  // });

  return array.reduce((total, current) => {
    return (total+current);
  },0);
  // return result;
};

const multiply = function(array) {
  // let result = 1 ;

  // array.forEach(element => {
  //   result*=element;
  // });
  // return result;

  return array.reduce((result,current) => {
    return result*current;
  },1);
};

const power = function(a,b) {
	
  let result = 1;
  for(let i=0;i<b; ++i) {
    result *= a;
  }
  return result; 
};

const factorial = function(a) {
  let result = 1; 
  for(let i = a; i>=1; --i) {
    result *= i;
  }
  return result;
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
