export function createBase() {
  document.body.classList.add("body");

  const title = document.createElement("h1");
  title.classList.add("title");
  title.innerText = "Virtual Keyboard";

  const textArea = document.createElement("textarea");
  textArea.classList.add("text-area");
  textArea.cols = "80";
  textArea.rows = "15";

  const keyboardContainer = document.createElement("div");
  keyboardContainer.classList.add("keyboard-container");

  document.body.appendChild(title);
  document.body.appendChild(textArea);
  document.body.appendChild(keyboardContainer);
}
