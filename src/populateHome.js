const test = console.log("Hello World");
export { test, populateHome };
import image from "./pizzeria-AI.png";

function populateHome() {
    const contentDiv = document.querySelector(".content");  //Select container for following elements
    const h1 = document.createElement("h1");                //Create h1
    const img = document.createElement("img");              //Create img
    const homeP = document.createElement("p");              //Create p
    const hoursDiv = document.createElement("div");         //Create div
    const hoursH2 = document.createElement("h2");           //Create h2
    const ul = document.createElement("ul");                //Create ul
    const locationDiv = document.createElement("div");      //Create div
    const locationH2 = document.createElement("h2");        //Create h2
    const locationP = document.createElement("p");          //Create p

    h1.classList.add("home-title");                         //Add class to h1
    img.classList.add("home-img");                          //Add class to img
    homeP.classList.add("home-text");                       //Add class to p
    hoursDiv.classList.add("home-hours");                   //Add class to div
    hoursH2.classList.add("home-hours-title");              //Add class to h2
    ul.classList.add("home-hours-list");                    //Add class to ul
    locationDiv.classList.add("home-location");             //Add class to div
    locationH2.classList.add("home-location-title");        //Add class to h2
    locationP.classList.add("home-location-text");          //Add class to p

    h1.textContent = "Pizza's Pizzeria";                   //Add text to h1    
    img.src = image;                                        //Add img source
    img.alt = "AI image of a pizza in front of an oven";    //Add img alt
    homeP.textContent = `Welcome to Pizza Pizza's Pizzeria, where pizza dreams become pizza reality! Here, we don't just serve pizza, we live pizza, we breathe pizza, we pizza your hunger, and we pizza your soul. From the moment you pizza through our doors, you'll smell the pizza love wafting through the air like a pizza hug. Our ovens are pizza-hot, our staff is pizza-ready, and every pizza bite will be a pizza-perfect slice of happiness. So, sit back, pizza your mind, and let the pizza-liciousness take over. Remember, in this pizza haven, we don't just make pizza — we are pizza. Pizza cheers! 🍕`
    hoursH2.textContent = "Hours";                          //Add text to h2
    locationH2.textContent = "Location";                     //Add text to h2
    locationP.textContent = "123 Main Street, Main City, Main Country"; //Add text to p

    contentDiv.appendChild(h1);                             //Add h1 to container
    contentDiv.appendChild(img);                            //Add img to container
    contentDiv.appendChild(homeP);                          //Add p to container
    contentDiv.appendChild(hoursDiv);                       //Add div to container
    contentDiv.appendChild(locationDiv);                    //Add div to container
    hoursDiv.appendChild(hoursH2);                          //Add h2 to div
    hoursDiv.appendChild(ul);                               //Add ul to div
    locationDiv.appendChild(locationH2);                    //Add h2 to div
    locationDiv.appendChild(locationP);                     //Add p to div


    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]; 

    for (let i=0; i<days.length; i++) {
        const li = document.createElement("li");            //Create li
        if(i<5){
            li.textContent = `${days[i]}: 7PM - 1AM`;       //Add text to li
        }else{
            li.textContent = `${days[i]}: 12PM - 4PM || 7PM - 1AM`;       //Add text to li
        }
        ul.appendChild(li);                                 //Add li to ul
    }
}