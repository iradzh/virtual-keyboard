export default function handlePhysicalKeyboardInput() {
  document.addEventListener("keydown", (event) => {
    event.preventDefault();

    const keyPressed = event.code;
    const keys = document.querySelectorAll(".key");
    const key = Array.from(keys).find(
      (k) => k.getAttribute("data-code") === keyPressed,
    );
    const textArea = document.querySelector(".text-area");
    if (key) {
      if (key.getAttribute("data-code") === "Backspace") {
        textArea.value = textArea.value.slice(0, -1);
      } else if (key.getAttribute("data-code") === "Enter") {
        textArea.value += "\n";
      } else if (key.getAttribute("data-code") === "Space") {
        textArea.value += " ";
      } else if (key.getAttribute("data-code") === "Tab") {
        textArea.value += "  ";
      } else if (
        key.getAttribute("data-code") === "CapsLock"
        || key.getAttribute("data-code") === "ShiftLeft"
        || key.getAttribute("data-code") === "ShiftRight"
        || key.getAttribute("data-code") === "ControlLeft"
        || key.getAttribute("data-code") === "ControlRight"
        || key.getAttribute("data-code") === "MetaLeft"
        || key.getAttribute("data-code") === "MetaRight"
        || key.getAttribute("data-code") === "AltLeft"
        || key.getAttribute("data-code") === "AltRight"
        || event.metaKey
        || event.ctrlKey
      ) {
        textArea.value += "";
      } else {
        textArea.value += key.innerText;
      }
      key.classList.add("active");
    }
  });

  document.addEventListener("keyup", (event) => {
    const keyPressed = event.code;
    const keys = document.querySelectorAll(".key");
    const key = Array.from(keys).find(
      (k) => k.getAttribute("data-code") === keyPressed,
    );
    if (key) {
      key.classList.remove("active");
    }
  });
}
