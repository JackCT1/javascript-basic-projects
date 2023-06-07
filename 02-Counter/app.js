const countValue = document.getElementById("value");
const buttons = document.querySelectorAll(".btn");

let count = 0;

buttons.forEach(function (button) {
  button.addEventListener("click", function (event) {
    const styles = event.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    countValue.textContent = count;
  });
});
