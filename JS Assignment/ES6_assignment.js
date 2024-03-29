/*  Question 1 :-  Refactor the following function into a one-liner:

    const printName = (name) => {
                     return “Hi” + name;
    }
*/
// Solution: 1 

const printName = (name) => "Hi " + name;
console.log(printName('Aman'));


/* Question:2 :- Rewrite the following code using template literals

const printBill = (name, bill) => {
                     return “Hi “ + name + “, please pay: “ + bill;
           }

*/

// Solution:2 :- 

const printBill = (name, bill) => `Hi ${name}, please pay: ${bill}`;
console.log(printBill('Aman', 300));


/* Question:- 3 
        Modify the following code such that the object properties are destructured and logged.
            
            const person = {
                      name: “Noam Chomsky”,
                      age: 92
            }
           
           let name = person.name;
           let age = person.age;
           console.log(name);
           console.log(age);
*/

// Solution: 3 :- 

    const person = {
        name: "Noam Chomsky",
        age: 92,
        //marks: 84
    };

    const {name, age }= person;
    console.log(name,age);
    //console.log(a);