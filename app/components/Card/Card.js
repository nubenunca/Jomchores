//Necessary import the styles of module

import "../../../src/scss/style.scss"
import "../Card/Card.scss"


//Create the container and add to main

const main = document.createElement('section')

function createTitles(){
    const sectionOne = document.createElement("section")
    sectionOne.className = "section-container m-5"
    sectionOne.innerHTML = ""
    return sectionOne
}


const section = main.appendChild(createTitles())

// Create the buttons in the container section and execute
function titles(){
   
 
    section.innerHTML += `
    <h1 class="title-services h1 text-capitalize display-3 text-center text-bold ">servicios</h1>
    <div id="content-button-service" class="d-grid gap-2 m-3 d-flex flex-wrap gap-2 justify-content-center">
      <button class="btn btn-service fs-4" id="plomeria" type="button">Plomería</button>
      <button class="btn btn-service fs-4" id="aseo" type="button">Aseo</button>
      <button class="btn btn-service fs-4" id="peluqueria" type="button">Peluquería</button>
      <button class="btn btn-service fs-4" id="construccion" type="button">Construcción</button>
      <button class="btn btn-service fs-4" id="electricidad" type="button">Electricidad</button>
    </div>
    
    `
    
}

titles()

//This function will listen the button click in service and will call the function filter
function servicesClick() {document.addEventListener("click", async (event) => {
   
    if(event.target.id=="construccion"){
        filter("construccion")
    }else if(event.target.id=="plomeria"){
        filter("plomeria")
    }else if(event.target.id=="aseo"){
        filter("aseo")
    }else if(event.target.id=="peluqueria"){
        filter("peluqueria")
    }else if(event.target.id=="electricidad"){
        filter("electricidad")
    }else if(event.target.id=="services-reload"){
        createCardWorker()
        
    }

})}

//This function will filter the workers by category 
async function filter(id){
       const response = await fetch(`https://55nafuq2d0.execute-api.us-east-2.amazonaws.com/desarrollo/workers?category=${id}`)
        const data = await response.json()
        sectionTwo.innerHTML = ""
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
servicesClick()

// Create the cards section and add to the main

function createCards() {
    const sectionTwo = document.createElement("section")
    sectionTwo.className = "section-container m-5 d-flex flex-wrap gap-5 justify-content-center"
    sectionTwo.innerHTML = ""
    return sectionTwo
}
const sectionTwo = main.appendChild(createCards())

// This function is responsible for create the cards in the section
async function createCardWorker() {
const response = await fetch("https://55nafuq2d0.execute-api.us-east-2.amazonaws.com/desarrollo/workers")
const data = await response.json()
sectionTwo.innerHTML = ""
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

// This function listen the click if the button view more is clicked
function listenerClick() {document.addEventListener("click", (event) => {
   
    if(event.target.className=="view-more"){
        localStorage.setItem("id", event.target.id)
        
        
    }
})}

listenerClick()

// This function will export the content created

export function serviceCards(){
    const mainHtml = main
    return mainHtml
}

serviceCards()