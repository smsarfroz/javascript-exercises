const leapYears = function(year) {
    if ( (year%4==0 && year%100!=0) || (year%400==0)) {
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;

//divisible by 4, not divisible by 100
//it's fine if they are divisible by 400