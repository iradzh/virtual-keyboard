export function handlePhysicalKeyboardInput() {
  document.addEventListener("keydown", (event) => {
    event.preventDefault();

    const keyPressed = event.code;
    console.log("keyPressed:", keyPressed);
    const keys = document.querySelectorAll(".key");
    console.log("keys:", keys);
    const key = Array.from(keys).find(
      (k) => k.getAttribute("data-code") === keyPressed
    );
    console.log("key:", key);
    const textArea = document.querySelector(".text-area");
    if (key) {
      console.log("key.innerText:", key.innerText);
      textArea.value += key.innerText;
    }
  });
}
