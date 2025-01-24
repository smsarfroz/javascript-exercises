const getTheTitles = function(books) {
    return titles = books.map((bookObj) => {
        return bookObj.title;
    });
};

// Do not edit below this line
module.exports = getTheTitles;

/*
Okay, How to do this ? 
we can iterate through objects in the books array
then in the object select the title
and push it into titles array

iterate through map

*/