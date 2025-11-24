import './runApp.css';

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
        //disabled: true,
    });

    el.append(input);
    el.append(button);

    createAndAppendElement('p', 'First Paragraph', el);
    createAndAppendElement('p', 'Second Paragraph', el);
    createAndAppendElement('p', 'Third Paragraph', el);

    /**
   * Creates HTML element, set its text content and appends it to
   * the specified parent element
   */
    function createAndAppendElement(tag, text, parent) {
        const element = document.createElement(tag);
        element.textContent = text;
        parent.appendChild(element);
    }
    
}