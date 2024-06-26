const html = document.documentElement;

const body = html.children[1];
const ul = body.children[3];

const parent = ul.parentElement;
console.log(parent);

const secondSon = ul.children[1]
console.log(secondSon);

const nextSon = secondSon.nextElementSibling
console.log(nextSon);

const previousSon = secondSon.previousElementSibling;
console.log(previousSon);