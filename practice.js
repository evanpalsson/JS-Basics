//Once you complete a problem, open up Chrome and check the answer in the console.

Problem #1

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here

var isTyler = function(name) {
  if(name === 'Tyler') {
    return true;
  }
  else {
    return false;
  }
}

isTyler('Tyler')  <--- This will return true
isTyler('Evan') <--- This will return false





//Next problem --------------------------------------------------------------------

Problem #2

//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.

 //Code Here


var getName = function() {
  var userName = prompt('Your name');  // <--- Not understanding why this need parens (display strong vs variable?)
    return userName;
}


getName()





//Next problem --------------------------------------------------------------------

Problem #3

//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here

var welcome = function(getName) {
  alert("Welcome, " + getName);  // <--- The + getName is getName and not userName because
}

welcome(getName)  // <--- I am being told by the console that 'userName is not defined'. well, i want it to prompt me to get it defined, but it is not executing.

welcome(getName()) // <--- This is correct because the function is calling a function





//Next problem --------------------------------------------------------------------

Problem #4

//Write a function called adder that uses the 'arguments' keyword that comes with every function to loop over all the arguments the function received, add 
// them all together, then return the result.
//Save the result of the return value from your adder function, then alert "The Total Number was " + the number that was
//returned from adder.

  //Code Here

var adder = function() {
  var total = 0;
    for (var i = 0; i < arguments.length; i++) {
      total = total + arguments[i];
    }
  return total;
}

adder(500, 300, 200);




//Next problem --------------------------------------------------------------------



//What is the difference between arguments and parameters?

  //Answer Here


//Next problem --------------------------------------------------------------------



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here



//Next problem --------------------------------------------------------------------



//Create a function called myName that returns your name

  //Code Here

//Now save the function definition of myName into a new variable called newMyName

  //Code Here

//Now alert the result of invoking newMyName



//Next problem --------------------------------------------------------------------



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

//Now invoke innerFn.