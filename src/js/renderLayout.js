function renderLayout() {
  document.body.classList.add("body");

  const title = document.createElement("h1");
  title.classList.add("title");
  title.innerText = "Virtual Keyboard for MacOS";

  const textArea = document.createElement("textarea");
  textArea.classList.add("text-area");
  textArea.cols = "100";
  textArea.rows = "13";

  const linkKeyboard = document.createElement("a");
  linkKeyboard.classList.add("link");
  linkKeyboard.href = "https://www.apple.com/shop/product/MK2A3LL/A/magic-keyboard-us-english?fnode=33db5e2a4dcec81505650aaabeb76d82708583efe21d8df8b43b2913b0b874e2dccb932b611e378268911834fd1ce8fe062e4f0209bead386e6edcb9952ef3fe15381154f904b73b7db34a95b0e8c7675c099411f64730be77b8381422cf0624fb6f0756abb36f1d1d54483f581545b6";
  linkKeyboard.textContent = "Keyboard reference";

  const keyboardContainer = document.createElement("div");
  keyboardContainer.classList.add("keyboard-container");

  document.body.appendChild(title);
  document.body.appendChild(textArea);
  document.body.appendChild(keyboardContainer);
  document.body.appendChild(linkKeyboard);
}

export default renderLayout;
