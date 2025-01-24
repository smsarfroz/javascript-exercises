const fibonacci = function(num) {
    num = parseInt(num);
    if(num < 0) {
        return "OOPS";
    }
    if(num == 0) {
        return 0;
    }
    if(num == 1 || num == 2) {
        return 1; 
    }

    return fibonacci(num-1) + fibonacci(num-2);
};

// Do not edit below this line
module.exports = fibonacci;

/*
Do we have to ensure we have infinite knowledge of the sequence of fibonacci ? 
or we could just find i-th one on the spot ? 

if the given input is a string then it should be entirely integers
and should form a valid number. 
f(i)=f(i-1)+f(i-2)
1 1 2 3 
function f(int num) {
    if(num == 1 || num == 2){
        return 1;
    }
    return f(num-1) + f(num-2);
}

.split('')
now chars should be either a number or "9" like character 
but what if first character is 0 ? 
then that would be invalid ? 
Well, How about you do assuming it's a valid number not even a string ? 

*/