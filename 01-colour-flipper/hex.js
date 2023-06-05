const hexCharacters = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener("click", () => {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    const randomNumber = getRandomNumber();
    hex += hexCharacters[randomNumber];
  }
  document.body.style.backgroundColor = hex;
  color.innerHTML = hex;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hexCharacters.length);
}
