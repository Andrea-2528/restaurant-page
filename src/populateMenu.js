export { populateMenu };

function populateMenu() {
    const contentDiv = document.querySelector(".content");  //Select container for following elements
    const menuH2 = document.createElement("h2");            //Create h2

    menuH2.classList.add("menu-title");                     //Add class to h2
    menuH2.textContent = "PIZZA";                           //Add text to h2

    contentDiv.appendChild(menuH2);

    const menu = ["Margherita","Marinara","Quattro Formaggi","Diavola","Capricciosa","Prosciutto e Funghi","Napoli","Bufalina","Frutti di Mare","Ortolana"];
    const ingredients = [
        "Tomato sauce, mozzarella, fresh basil, olive oil.",
        "Tomato sauce, garlic, oregano, olive oil.",
        "Mozzarella, gorgonzola, parmesan, provolone.",
        "Tomato sauce, mozzarella, spicy salami, chili flakes.",
        "Tomato sauce, mozzarella, cooked ham, mushrooms, artichokes, black olives.",
        "Tomato sauce, mozzarella, cooked ham, mushrooms.",
        "Tomato sauce, mozzarella, anchovies, capers, oregano.",
        "Tomato sauce, buffalo mozzarella, fresh basil, olive oil.",
        "Tomato sauce, mozzarella, assorted seafood, garlic, parsley.",
        "Tomato sauce, mozzarella, eggplant, zucchini, bell peppers, olive oil."
    ]

    for (let i = 0; i < menu.length; i++) {
        const menuDiv = document.createElement("div");      //Create div
        const menuH3 = document.createElement("h3");        //Create h3
        const menuP = document.createElement("p");          //Create p

        menuDiv.classList.add("menu-item");                 //Add class to div

        menuH3.textContent = menu[i];                       //Add text to h3
        menuP.textContent = ingredients[i];                 //Add text to p

        menuDiv.appendChild(menuH3);                        //Add h3 and p to div
        menuDiv.appendChild(menuP);
        contentDiv.appendChild(menuDiv);                     //Add div to container
    }
}