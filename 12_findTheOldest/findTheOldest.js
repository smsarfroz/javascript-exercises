const findTheOldest = function(people) {
    let oldestPerson = {
        name : "",
        age : 0
    }

    people.map((person) => {
        if(person.yearOfDeath === undefined) {
            person.yearOfDeath = new Date().getFullYear();
        }
        ageofPerson = person.yearOfDeath -
        person.yearOfBirth;
        if(ageofPerson > oldestPerson.age) {
            oldestPerson = {
                name: person.name,
                age: ageofPerson
            }
        }
        //what should we return now ? 
        //isn't return necessary here ?
        //map returns an array 
        //we don't care about array here
        return person; 
    });

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

/*
If death is undefined for some, 
what do we do about it ? 
should we find the age by assuming current year is 2025?

or maybe Don't remain stuck
and solve the simpler versions first

so we know age, right 
a variable that stores max age and a name associated
with it
to iterate, use map 

if someone is not dead then is he automatically oldest ? 
no, among all the living people 
select the one whose birthyear is least 

there is only one such person 
no, age of this living person is still 
presentyear - birthyear 


*/