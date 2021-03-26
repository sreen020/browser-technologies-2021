


function colorShirt() {
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

function formValidation() {
  const form = document.getElementById("order-form");
  const colorForm = document.querySelectorAll("#color-form input");
  const genderForm = document.querySelectorAll("#gender-form input");
  const sizeForm = document.querySelectorAll("#size-form input");
  const errorElement = document.getElementById("errorMsg");

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

function printText() {
  const textInput = document.getElementById("userText");
  const editText = document.getElementById("text-for-edit");

  if (textInput) {
    textInput.addEventListener("keyup", () => {
      editText.innerText = textInput.value;
    });
  }
}

function storeShirt() {
  const form = document.getElementById("order-form");
  form.addEventListener("submit", function (event) {
    const {
      shirtColor,
      gender,
      shirtSize,
      userText,
      amount,
      id,
    } = this.elements;
    const data = {
      id: id.value,
      shirtColor: shirtColor.value,
      gender: gender.value,
      shirtSize: shirtSize.value,
      userText: userText.value,
      amount: amount.value,
    };
    localStorage.setItem(id, JSON.stringify(data));
  });
}

colorShirt();
storeShirt();
printText();
formValidation();