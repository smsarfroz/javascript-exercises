const reverseString = function(sentence) {
    // let sentenceSize = sentence.length;
    // let reversedSentence = "";
    
    // if(sentenceSize == 0) {
    //     return '';
    // }
    // for(let i = sentenceSize-1 ;i >=0; --i) {

    //     reversedSentence += sentence.charAt(i);
    // }

    // return reversedSentence;

    return sentence.split('').reverse().join('');
    /*
    '' is used as seperator between the words
    .split makes an array of characters from the string
    .reverse reverses the array elements
    .join joins them into a string 
    */
};

// Do not edit below this line
module.exports = reverseString;
