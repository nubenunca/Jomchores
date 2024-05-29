import "../../../src/scss/style.scss"
import "../Card/Card.scss"


//create the container and add to main

const main = document.createElement('section');

function createTitles(){
    const sectionOne = document.createElement("section");
    sectionOne.className = "section-container m-5"
    sectionOne.innerHTML = "";
    return sectionOne
}


const section = main.appendChild(createTitles())

// Create the buttons in the container section and execute
function titles(){
   
 
    section.innerHTML += `
    <h1 class="title-services h1 text-capitalize display-3 text-center text-bold ">servicios</h1>
    <div class="d-grid gap-2 m-3 d-flex flex-wrap gap-2 justify-content-center ">
      <button class="btn btn-service fs-4" type="button">Plomeria</button>
      <button class="btn btn-service fs-4" type="button">Aseo</button>
      <button class="btn btn-service fs-4" type="button">Peluqueria</button>
      <button class="btn btn-service fs-4" type="button">Construcción</button>
      <button class="btn btn-service fs-4" type="button">Electricidad</button>
    </div>
    
    `
    
}

titles()


// Create the cards section and add to the main

function createCards() {
    const sectionTwo = document.createElement("section");
    sectionTwo.className = "section-container m-5 d-flex flex-wrap gap-5 justify-content-center"
    sectionTwo.innerHTML = "";
    return sectionTwo
}
const sectionTwo = main.appendChild(createCards())

// This function is responsible for create the cards in the section
async function createCardWorker() {
const response = await fetch("https://55nafuq2d0.execute-api.us-east-2.amazonaws.com/desarrollo/workers");
const data = await response.json(); 
sectionTwo.innerHTML = "";
data.forEach(worker => {

    sectionTwo.innerHTML+=`
    <div class = "card-container" style="width:18rem"> 
        <h4 class = "worker-title text-capitalize">${worker.name} ${worker.lastName}</h4>
        <article class="img-container">
            <img src= ${worker.img} alt="Photo's worker">
        </article>
        <article class = "occupation-container text-capitalize ">
            <p class = "occupation-description text-capitalize text-left">${worker.category}</p>
        </article>
        <a href="#/trabajo"  class = "view-more" id = "${worker.id}">Ver más</a>
    </div>
    `

})
}

createCardWorker()


function listenerCllick() {document.addEventListener("click", (event) => {
   
    if(event.target.className=="view-more"){
        localStorage.setItem("id", event.target.id);
        
        
    }
})}

listenerCllick()

// This function will export the content created

export function serviceCards(){
    const mainHtml = main;
    return mainHtml;
}

serviceCards();