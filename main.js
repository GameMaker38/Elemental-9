let color = black
let backgroundColor = 1
let newElement = 'test';
let elements = ['Air', 'Earth', 'Fire', 'Water'];
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
function elementAdd() {
  elements.push(newElement);
}
function lightMode() {
  if (backgroundColor = 1) {
    let backgroundColor = 0
    document.getElementById("body").style.backgroundColor = "black";
    document.getElementById("settingsDiv").style.backgroundColor = "black";
    document.getElementById("lightmode").textContent = `Light Mode: Off`;
  } else {
    let backgroundColor = 1
    document.getElementById("body").style.backgroundColor = "white";
    document.getElementById("settingsDiv").style.backgroundColor = "white";
    document.getElementById("lightmode").textContent = `Light Mode: On`;
  }
}
