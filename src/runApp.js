export function runApp(el) {
    const input = document.createElement('input');
  Object.assign(input, {
    className: 'text-field',
    type: 'text',
    placeholder: 'Введите текст',
  });
  
  const button = document.createElement('button');
  Object.assign(button, {
    className: 'button',
    textContent: 'Нажми меня',
    disabled: true,
  });

  createAndAppendElement('p', 'First Paragraph', el);
  createAndAppendElement('p', 'Second Paragraph', el);
  createAndAppendElement('p', 'Third Paragraph', el);

  el.append(input);
  el.append(button);
}