// Assignment 1
//Q1. Write a program to demonstrate how a function can be passed as a parameter to another function.

function child(pqr){
    console.log( pqr+10);
  }
  
  function funmain(abc, child)
  {
     child(abc);
  }
  
  funmain(5, child);

  
  
  //Assignment2
/*
  Q2. An arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents the first letter of both the arguments. For the arguments Roger and Waters, the function returns ‘RW’. Write this function.
    Submit the github link to the code
*/
  
  
  var ab=(tex1,tex2 ) => {
    return (tex1[0]+tex2[0]);
  }

  console.log(ab("Gaurav", "Kumar"));
  