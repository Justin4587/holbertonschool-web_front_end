/**
 * trying things
 */


function welcomeMessage(fullName) {
  return function() {
    alert("Welcome " + fullName);
  }
}

const guillaume = welcomeMessage("Guillame");
const alex = welcomeMessage("Alex");
const Fred = welcomeMessage("Fred");
