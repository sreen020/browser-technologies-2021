export default function printText() {
  const textInput = document.getElementById("userText");
  const editText = document.getElementById("text-for-edit");

  if (textInput) {
    textInput.addEventListener("keyup", () => {
      editText.innerText = textInput.value;
    });
  }
}
