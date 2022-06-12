let newUsername = '1'
let color = 'black';
let newElement = 'test';
let elements = ['Air', 'Earth', 'Fire', 'Water'];
let allElements = ['Air', 'Earth', 'Fire', 'Water'];
let length = elements.length;
document.getElementById("elements").textContent = elements.join(', '); 
function makeNewElement() {
  document.getElementById("youMade").textContent = `You made ${newElement}!`
}
document.getElementById("youHave").textContent = `You have ${length} elements.`;
function divToggle() {
  var x = document.getElementById("settingsDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function lookIfComboExists(combo) {
  elements.find();
}
function elementAdd() {
  elements.push(var newElement);
}
function signUp() {
  var newUsername = document.getElementById("signUpUsername");
  accountUsernames.push(var newUsername);
}
function logIn() {

}
