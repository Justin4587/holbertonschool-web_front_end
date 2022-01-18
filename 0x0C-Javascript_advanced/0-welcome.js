/**
 * @function welcome yell it back to me
 * @param {string} firstName
 * @param {string} lastName
 */

 function welcome(firstName, lastName) {
   const fullName = firstName + " " + lastName;
   function displayFullName() {
     alert("Welcome " + fullName + "!");
   }
   displayFullName();
 }
 