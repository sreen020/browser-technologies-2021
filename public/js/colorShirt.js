export default function colorShirt() {
  var formRed = document.getElementById("color-red");
  var formBlue = document.getElementById("color-blue");
  var formWhite = document.getElementById("color-white");
  var formBlack = document.getElementById("color-black");
  if (formRed) {
    formRed.addEventListener("change", () => {
      changeColor(formRed.value);
    });
    formBlue.addEventListener("change", () => {
      changeColor(formBlue.value);
    });
    formWhite.addEventListener("change", () => {
      changeColor(formWhite.value);
    });
    formBlack.addEventListener("change", () => {
      changeColor(formBlack.value);
    });
  }
}

function changeColor(value) {
  const shirt = document.getElementById("shirt-g");

  shirt.style.fill = value;
}
