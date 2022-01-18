/**
 * @function outer yell it back to me
 * @function inner yell it back to me
 * @var {string} globalVariable  Welcome
 * @param {string} course Holberton
 * @param {string} exclamation !
 */


const globalVariable = "Welcome";
function outer() {
  alert(globalVariable);
  const course = "Holberton";
  function inner() {
    alert(globalVariable + " " + course);
    const exclamation = "!";
    function inception() {
      alert(globalVariable + " " + course + exclamation);
    }
    inception();
  }
  inner();
} 
outer();
