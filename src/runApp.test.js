/* eslint-disable jest/no-commented-out-tests */
import { runApp } from "./runApp";

// describe('Проверка функции createAndAppendElement()', () => {
//     let testElement;

//     beforeEach(() => {
//         testElement = document.createElement('div');
//     });

//     test('Создание элемента с правильным ТЭГом', () => {
//         const tag = 'p';
//         createAndAppendElement(tag, 'Test', testElement);

//         expect(testElement.querySelector('p')).not.toBeNull();
//         expect(testElement.querySelector('p').tagName).toBe('P');
//     });

//     test('Элемент имеет правильный текст', () => {
//         const text = 'Test Text Content';
//         createAndAppendElement('span', text, testElement);

//         expect(testElement.querySelector('span').textContent).toBe(text);
//     });

//     test('Элемент добавляется в родительский контейнер', () => {
//         createAndAppendElement('div', 'Test', testElement);

//         expect(testElement.children.length).toBe(1);
//         expect(testElement.firstChild.tagName).toBe('DIV');
//     });

//     test('Создание элементов с разными тегами', () => {
//         const tags = ['h1', 'span', 'div', 'button'];

//         tags.forEach(tag => {
//             createAndAppendElement(tag, `Test ${tag}`, testElement);
//         });

//         expect(testElement.children.length).toBe(tags.length);
//         tags.forEach((tag, index) => {
//             expect(testElement.children[index].tagName).toBe(tag.toUpperCase());
//         });
//     });

//     test('Элемент создается с пустым текстом', () => {
//         createAndAppendElement('p', '', testElement);

//         expect(testElement.querySelector('p').textContent).toBe('');
//     });

//     test('Множественные вызовы добавляют несколько элементов', () => {
//         createAndAppendElement('p', 'First', testElement);
//         createAndAppendElement('p', 'Second', testElement);
//         createAndAppendElement('p', 'Third', testElement);

//         const paragraphs = testElement.querySelectorAll('p');
//         expect(paragraphs.length).toBe(3);
//         expect(paragraphs[0].textContent).toBe('First');
//         expect(paragraphs[1].textContent).toBe('Second');
//         expect(paragraphs[2].textContent).toBe('Third');
//     });
// });

describe("Проверка функции runApp()", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
  });

  test("Создает input элемент", () => {
    runApp(container);

    const input = container.querySelector("input.text-field");
    expect(input).not.toBeNull();
    expect(input.type).toBe("text");
    expect(input.placeholder).toBe("Введите текст");
  });

  test("Создает button элемент", () => {
    runApp(container);

    const button = container.querySelector("button.button");
    expect(button).not.toBeNull();
    expect(button.textContent).toBe("Нажми меня");
  });

  test("Создает три параграфа", () => {
    runApp(container);

    const paragraphs = container.querySelectorAll("p");
    expect(paragraphs.length).toBe(3);
    expect(paragraphs[0].textContent).toBe("First Paragraph");
    expect(paragraphs[1].textContent).toBe("Second Paragraph");
    expect(paragraphs[2].textContent).toBe("Third Paragraph");
  });

  test("Все элементы добавляются в контейнер", () => {
    runApp(container);
    expect(container.children.length).toBe(5);
  });
});
