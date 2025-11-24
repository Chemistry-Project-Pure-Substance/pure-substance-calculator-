function calculate() {
  const amount = parseFloat(document.getElementById("amount").value);
  const unit = document.getElementById("unit").value;
  const purity = parseFloat(document.getElementById("purity").value);

  if (isNaN(amount) || isNaN(purity)) {
    alert("Please enter valid numbers.");
    return;
  }

  const pureAmount = amount * (purity / 100);

  document.getElementById("resultBox").style.display = "block";
  document.getElementById(
    "resultBox"
  ).innerHTML = `Pure substance amount: <strong>${pureAmount} ${unit}</strong>`;
}
