export default function storeShirt() {
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

function createButton() {
  document.querySelectorAll(".edit-button");
}
