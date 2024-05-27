import "./Card.scss"
import "../../../src/scss/style.scss"


// export let  workers = [
//     {
//         name: "Santiago",
//         lastName: "Suarez",
//         phone: 234424522,
//         address: "cra 22 #23-32",
//         id: 123456789,
//         img: "https://img.freepik.com/psd-gratis/hombre-elegante-brazos-cruzados_1154-563.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1715040000&semt=ais",
//         category: "Plomeria",
//         occupation : "Especialista en tuberias"
//     },
//     {
//         name: "Laura",
//         lastName: "Gomez",
//         phone: 311567890,
//         address: "cll 45 #56-78",
//         id: 987654321,
//         img: "https://img.freepik.com/psd-gratis/mujer-elegante-brazos-cruzados_1154-564.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1715040000&semt=ais",
//         category: "Electricidad",
//         occupation: "Electricista certificada"
//     },
//     {
//         name: "Carlos",
//         lastName: "Perez",
//         phone: 320123456,
//         address: "cra 10 #11-12",
//         id: 112233445,
//         img: "https://img.freepik.com/psd-gratis/hombre-elegante-brazos-cruzados_1154-565.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1715040000&semt=ais",
//         category: "Carpintería",
//         occupation: "Maestro carpintero"
//     },
//     {
//         name: "Mariana",
//         lastName: "Rodriguez",
//         phone: 315789012,
//         address: "av 19 #20-21",
//         id: 334455667,
//         img: "https://img.freepik.com/psd-gratis/mujer-elegante-brazos-cruzados_1154-566.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1715040000&semt=ais",
//         category: "Jardinería",
//         occupation: "Paisajista profesional"
//     }
// ]

//Se crea el contenedor

const main = document.createElement('section');

function createTitles(){
    const sectionOne = document.createElement("section");
    sectionOne.className = "section-container m-5"
    sectionOne.innerHTML = "";
    return sectionOne
}

const section = main.appendChild(createTitles())


function titles(){
   
 
    section.innerHTML += `
    <h1 class="title-services h1 text-capitalize display-3 text-center text-bold ">servicios</h1>
    <div class="d-grid gap-2 m-3 d-flex flex-wrap gap-2 justify-content-center ">
      <button class="btn btn-service fs-4" type="button">plomeria</button>
      <button class="btn btn-service fs-4" type="button">Aseo</button>
      <button class="btn btn-service fs-4" type="button">Peluqueria</button>
      <button class="btn btn-service fs-4" type="button">Construcción</button>
      <button class="btn btn-service fs-4" type="button">Electricidad</button>
    </div>
    
    `
    
}

titles()

function createCards() {
    const sectionTwo = document.createElement("section");
    sectionTwo.className = "section-container m-5 d-flex flex-wrap gap-5 justify-content-center"
    sectionTwo.innerHTML = "";
    return sectionTwo
}
const sectionTwo = main.appendChild(createCards())


async function createCardWorker() {
const response = await fetch("https://55nafuq2d0.execute-api.us-east-2.amazonaws.com/desarrollo/workers");
const data = await response.json(); 
sectionTwo.innerHTML = "";
data.forEach(worker => {

    sectionTwo.innerHTML+=`
    <div class = "card-container" style="width:18rem"> 
        <h4 class = "worker-title text-capitalize">${worker.name} ${worker.lastName}</h4>
        <article class="img-container">
            <img src= ${worker.img} alt="">
        </article>
        <article class = "occupation-container text-capitalize ">
            <p class = "occupation-description text-capitalize text-left">${worker.workDescription}</p>
        </article>
        <a href = "#/${worker.name}-${worker.lastName}" class = "view-more" id = "${worker.id}">Ver mas</a>
    </div>
    `

})
}

createCardWorker()

// export const Card = (workers) => {

//     let {name, lastName, occupation, img,id} = workers;


//     sectionTwo.innerHTML += 
// `
    
    
// `
//     return sectionTwo
   
// }


export function serviceCards(){
    const mainHtml = main;
    return mainHtml;
}

serviceCards();