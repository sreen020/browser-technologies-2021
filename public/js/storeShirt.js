export default function storeShirt() {
  const form = document.getElementById("order-form");
  form.addEventListener("submit", function (event) {
    // event.preventDefault();
    const { shirtColor, gender, shirtSize, userText, amount } = this.elements;
    const data = {
      id: Date.now(),
      shirtColor: shirtColor.value,
      gender: gender.value,
      shirtSize: shirtSize.value,
      userText: userText.value,
      amount: amount.value,
    };
    localStorage.setItem("data", JSON.stringify(data));
  });
}
