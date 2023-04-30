import { myFunction } from './myModule.cjs';

function component() {
  const element = document.createElement("div");
  element.innerHTML += myFunction();
  return element;
}

document.body.appendChild(component());