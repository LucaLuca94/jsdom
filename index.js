// const body = document.querySelector("body");
const title = document.querySelector("h1")
title.innerText = "ciao"
console.log(title)

const paragraph = document.createElement("p")
paragraph.innerText = "eccomi"
title.appendChild(paragraph)
console.log(paragraph);
