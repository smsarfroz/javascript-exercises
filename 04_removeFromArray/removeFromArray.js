const removeFromArray = function(array, ...elementsToRemove) {
    let arrayAfterRemoval = [];
    /*basic iteration
    for(let i=0;i<array.length; ++i) {
        if(!elementsToRemove.includes(array[i])) {
            arrayAfterRemoval.push(array[i]);
        }
    }
    */

    /* forEach function for iteration
    array.forEach((item) => {
        if(!elementsToRemove.includes(item)){
            arrayAfterRemoval.push(item);
        }
    });
    */

    //simple and advanced 
    return array.filter((item) =>
        !elementsToRemove.includes(item)
    );
};

// Do not edit below this line
module.exports = removeFromArray;


/*
How do we do this ? 
first of all how to define the arguments for the 
function ? 
we don't even know the number of arguments
it would have ?
there would be a function for taking arbitrary number of arguments 
first argument must be array and its elements
could be anything like integer or string

but what is the intended complexity of the solution ? 
like I can do it in O(n^2)
for O(n), it would prolly need an inbuilt function, which is ? 

*/