import { runApp } from "./runApp";

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
