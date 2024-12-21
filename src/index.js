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

home.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    populateHome();
});
menu.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    populateMenu();
});
contacts.addEventListener("click", () => {
    contentDiv.innerHTML = "";
    populateContacts();
});