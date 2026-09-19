let myButton = document.querySelector("button");
function setusername() {
  const myName = prompt("can i have your name?");
}
myButton.addEventListener("click", () => {
  setusername();
});
