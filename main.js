let color = 'black';
let newElement = 'test';
let elements = ['Air', 'Earth', 'Fire', 'Water'];
let allElements = ['Air', 'Earth', 'Fire', 'Water'];
let length = elements.length;
document.getElementById("elements").textContent = elements.join(','); 
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
  elements.push(newElement);
}
function lightMode() {
  if (color = 1) {
    let color = black
    document.getElementById("body").style.backgroundColor = color;
    document.getElementById("settingsDiv").style.backgroundColor = color;
    document.getElementById("lightmode").textContent = `Light Mode: Off`;
   
  } else {
      let color = white
      document.getElementById("body").style.backgroundColor = color;
      document.getElementById("settingsDiv").style.backgroundColor = color;
      document.getElementById("lightmode").textContent = `Light Mode: On`;
  }
}
function signUp() {
  
}
function logIn() {

}
