export default function formValidation() {
  const form = document.getElementById("order-form");
  const colorForm = document.querySelectorAll("#color-form input");
  const genderForm = document.querySelectorAll("#gender-form input");
  const sizeForm = document.querySelectorAll("#size-form input");
  const errorElement = document.getElementById("errorMsg");

  colorForm.forEach((form) => {
    form.required = false
  })
  genderForm.forEach((form) => {
    form.required = false
  })
  sizeForm.forEach((form) => {
    form.required = false
  })

  form.addEventListener("submit", (e) => {
    let messages = [];
    if (![...colorForm].some((el) => el.checked == true)) {
      messages.push("Select a color");
    }
    if (![...genderForm].some((el) => el.checked == true)) {
      messages.push("Select a gender");
    }
    if (![...sizeForm].some((el) => el.checked == true)) {
      messages.push("Select a size");
    }

    if (messages.length > 0) {
      e.preventDefault();
      errorElement.innerText = messages.join(", ");
    }
  });
}
