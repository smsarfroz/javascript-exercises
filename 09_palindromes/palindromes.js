const palindromes = function (sentence) {
    /*
    array1 = sentence.split('');
    array2 = [];

    for(let i = 0;i<array1.length; ++i) {
        let alphanumReg = new RegExp(/^[a-zA-Z0-9]/);
        if(alphanumReg.test(array1[i])) {
            array2.push(array1[i].toLowerCase());
        }
    }    

    array3 = [...array2];
    array3.reverse();
    
    //basic iteration
    /*for (let i = 0; i < array2.length; ++i) {
        if (array2[i].toLowerCase() !== array3[i].toLowerCase()) {
            return false;
        }
    }

    let string1 = array2.join('');
    let string2 = array3.join('');

    return (string1 === string2);
    */

    let alphanumReg = new RegExp(/^[a-zA-Z0-9]/);
    let string1 = sentence
    .toLowerCase()
    .split('')
    .filter((ch) => {
        if (alphanumReg.test(ch)) {
            return true;
        }
    }).join('');

    let string2 = string1.split('').reverse().join('');

    return (string1 === string2);
};

// Do not edit below this line
module.exports = palindromes;

/*
It would be a sentence and it's case insensitive
so what to do  ?
should I split the string into array of characters ? 
and then reverse to see if the new array is same as the old one ? 
yeah, that would work 
After splitting into an array, Should I adjust them all chars into lowercase ?

why are both array1 and array2 same ? 
we have to ignore punctuation and word breaks. How to do that ? 

maybe make new arrays for array1 without punctuation and word breaks 
Now, if I had to do using filter, How would I do it ? 

*/