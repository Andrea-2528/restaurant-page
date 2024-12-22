//CSS import
import "./styles.css";
//Images import only if needed in JS, otherwise just link in HTML

//JS import
import { test as message, populateHome } from "./populateHome";
import { populateMenu } from "./populateMenu";
import { populateContacts } from "./populateContacts";
//this should also import from existing modules, end of tree

// Run npx webpack serve to start the dev server
// located at http://localhost:8080
// kill it with CTRL + C

message;
const contentDiv = document.querySelector(".content");

const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const contacts = document.querySelector(".contacts");

defaultHome();

home.addEventListener("click", () => {
    defaultHome();
});
menu.addEventListener("click", () => {
    clearPage();
    populateMenu();
    menu.style.backgroundColor = "#c72929";
});
contacts.addEventListener("click", () => {
    clearPage();
    populateContacts();
    contacts.style.backgroundColor = "#c72929";
});

function clearPage() {
    contentDiv.innerHTML = "";
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.style.backgroundColor = "#ffc105"; //Use default color
    });
}

function defaultHome() {
    clearPage();
    populateHome();
    home.style.backgroundColor = "#c72929";
}