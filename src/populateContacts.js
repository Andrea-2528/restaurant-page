export { populateContacts };

function populateContacts() {
    const Names = [
        "Johnny Cheddarson",
        "Sally Saucington",
        "Luke Doughman",
        "Bella Pepperstone",
        "Marty Pineapple",
        "Rachel Basilworth",
        "Tony Bakerstone",
        "Julie Mushington"
    ];
      
    const Roles = [
        "Head Pizza Tosser (Owner)",
        "Tomato Sauce Specialist (Chef)",
        "Crust Whisperer (Dough Expert)",
        "Spice Alchemist (Ingredient Curator)",
        "Controversial Pineapple Advocate (Experimentation Consultant)",
        "Customer Pizza-lationship Manager",
        "Oven Charmer (Wood-fired Oven Specialist)",
        "Magic Toppings Coordinator"
    ];
      
    const Telephones = [
        "(555) 123-PIZZ",
        "(555) 456-SAUCE",
        "(555) 789-CRST",
        "(555) 654-SPCY",
        "(555) 321-PINE",
        "(555) 987-BASIL",
        "(555) 876-FIRE",
        "(555) 234-TOPP"
    ];
      
    const Emails = [
        "johnny@pizza-crustycrew-pizza.com",
        "sally@pizzasauce-crustycrew.com",
        "luke@pizza-doughman-pizzaholic.com",
        "bella@pizza-spicycurator-pizza.com",
        "marty@pizza-pineapple-forever-pizza.com",
        "rachel@pizza-basilqueen-pizzaguru.com",
        "tony@pizza-firemaster-pizzaoven.com",
        "julie@pizza-toppings-magicpizza.com"
    ];
    
    const contentDiv = document.querySelector(".content");  //Select container for following elements
    const contactsH2 = document.createElement("h2");        //Create h2

    contactsH2.classList.add("contacts-title");             //Add class to h2
    contactsH2.textContent = "Contacts";                   //Add text to h2

    contentDiv.appendChild(contactsH2);

    for (let i = 0; i < Names.length; i++) {
        const contactDiv = document.createElement("div");      //Create div
        const contactH3 = document.createElement("h3");        //Create h3
        const contactRoles = document.createElement("p");      //Create p
        const contactTel = document.createElement("p");
        const contactEmail = document.createElement("p");

        contactDiv.classList.add("contact-item");               //Add class to div

        contactH3.textContent = Names[i];                      //Add text to h3
        contactRoles.textContent = Roles[i];                   //Add text to p
        contactTel.textContent = Telephones[i];                //Add text to p
        contactEmail.textContent = Emails[i];                  //Add text to p

        contactDiv.appendChild(contactH3);
        contactDiv.appendChild(contactRoles);
        contactDiv.appendChild(contactTel);
        contactDiv.appendChild(contactEmail);

        contentDiv.appendChild(contactDiv);
    }
}