// Creare una lista aggiungendo il task desiderato mediante
// il bottone `Aggiungi`.

const addProduct = () => {
  const myUl = document.querySelector("ul");
  const li = document.createElement("li");
  const input = document.querySelector("input");
  const value = input.value;

  li.innerHTML = ` ${value} <input type="checkbox"> `;
  myUl.appendChild(li);
};
