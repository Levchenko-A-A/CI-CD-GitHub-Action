import "./runApp.css";
import {createAndAppendElement, getClickHandler, inputText} from './function.js';

export function runApp(el) {
  const input = document.createElement("input");
  Object.assign(input, {
    className: "text-field",
    type: "text",
    placeholder: "Введите текст",
  });

  const button = document.createElement("button");
  Object.assign(button, {
    className: "button",
    textContent: "Нажми меня",
    disabled: true,
  });
  

  el.append(input);
  el.append(button);

  createAndAppendElement("p", "First Paragraph", el);
  createAndAppendElement("p", "Second Paragraph", el);
  createAndAppendElement("p", "Third Paragraph", el);
  button.addEventListener('click', getClickHandler(input, button, el));
  input.addEventListener('input', inputText(button));
}