const sumAll = function(object1,object2) {
    if(!Number.isInteger(object1)) {
        return "ERROR";
    }else {
        if(object1 < 0) {
            return "ERROR";
        }
    }
    if(!Number.isInteger(object2)) {
        return "ERROR";
    }else {
        if(object1 < 0) {
            return "ERROR";
        }
    }


    let result = 0;

    for(let i = Math.min(object1,object2); i<=Math.max(object1,object2); ++i) {
        result+=i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
