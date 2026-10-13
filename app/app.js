const btnPress = document.getElementById("ticketBtn");
const confirm = document.getElementById("finalMessage");

btnPress.addEventListener("click", () => {
  getPrice();
});

function getPrice() {
  let name = document.getElementById("nameInput").value;
  let age = document.getElementById("ageInput").value;

  if (name === "") {
    confirm.innerText = "Please enter a name.";
    confirm.style.color = "red";
  } else {
    if (Number(age) <= 3 && Number(age) >= 0) {
      confirm.innerText = `${name}, your ticket is free!`;
      confirm.style.color = "#191970";
    } else if (Number(age) <= 12 && Number(age) >= 4) {
      confirm.innerText = `${name}, your ticket is $10.`;
      confirm.style.color = "#191970";
    } else if (Number(age) <= 64 && Number(age) >= 13) {
      confirm.innerText = `${name}, your ticket is $20.`;
      confirm.style.color = "#191970";
    } else if (Number(age) >= 65) {
      confirm.innerText = `${name}, your ticket is $12.`;
      confirm.style.color = "#191970";
    } else {
      confirm.innerText = `Please enter a valid age.`;
      confirm.style.color = "red";
    }
  }
}
