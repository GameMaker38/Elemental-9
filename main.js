let newUsername = '1'
let color = 'black';
let newElement = 'test';
// list of your elements
let yourElements = ['Air', 'Earth', 'Fire', 'Water'];
// list of all the elements
let allElements = ['Air', 'Earth', 'Fire', 'Water'];
// makes the list of elements appear on the screen
document.getElementById("elements").innerHTML = yourElements.join(', '); 
// gives you an element when you make an existing combo
function makeNewElement() {
  document.getElementById("youMade").textContent = `You made ${newElement}!`;
  yourElements.push(var newElement);
}
document.getElementById("youHave").textContent = `You have ${yourElements.length} out of ${allElements.length} elements.`;
// looks if a combo exists
function lookIfComboExists(newElement) {
  // searches the array for a certain element
  allElements.find(newElement);
}
// adds an element to the game
function elementAdd() {
  // adds the new element to your inventory
  yourElements.push(var newElement);
  // adds the new element to the database
  allElements.push(var newElement);
}
function signUp() {
  var newUsername = document.getElementById("signUpUsername");
  accountUsernames.push(var newUsername);
}
function logIn() {
}
