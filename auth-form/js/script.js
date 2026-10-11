// catching elements
const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

// add event listener while elements clicking
// the condition while register button click
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
})
// the condition while login button click
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
})