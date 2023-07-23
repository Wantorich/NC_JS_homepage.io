const form = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";
const USERNAME = "username";

function onSubmit(event) {
    event.preventDefault();
    const name = loginInput.value;
    localStorage.setItem(USERNAME, name);
    form.classList.add(HIDDEN);
    greetingUser(name)
}

function greetingUser(username) {
    const date = new Date();
    const currentTime = date.getHours();
    let greet = "";
    if (5 < currentTime && currentTime < 12) {
        greet = "Good morning, "
    } else if (currentTime < 18) {
        greet = "Good afternoon, "
    } else if (currentTime < 22) {
        greet = "Good evening, "
    } else {
        greet = "Hello, "
    }
    greeting.innerHTML = `${greet} ${username}`;
    greeting.classList.remove(HIDDEN);
}

const savedUsername = localStorage.getItem(USERNAME);
if (savedUsername === null) {
    form.classList.remove(HIDDEN);
    window.addEventListener("submit", onSubmit);
} else {
    greetingUser(savedUsername);
}