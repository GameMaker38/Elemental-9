let newElement = 'test';
let elements = ['Air', 'Earth', 'Fire', 'Water'];
let length = elements.length;
document.getElementById("elements").textContent = elements.join(','); 
document.getElementById("youMade").textContent = `You made ${newElement}!`
document.getElementById("youHave").textContent = `You have ${length} elements.`;
