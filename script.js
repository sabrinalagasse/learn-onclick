const changeParagraph = () => {
  const paragraph = document.querySelector("p");
  paragraph.textContent =
    "This text has changed because you clicked the button!";
};

const button = document.querySelector("#myButton");
button.addEventListener("click", changeParagraph);
