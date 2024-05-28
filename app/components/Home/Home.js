// Styles

import "./Home.scss";

//Se crea el contenedor
const main = document.createElement('section');

function createTitle(titleText) {
    const title = document.createElement('h2');
    title.classList.add("text-center", "fw-bold", "display-3");
    title.innerHTML = titleText;
    return title;
}

main.appendChild(createTitle(`¿A quién necesitas para <span class="text-dark-blue">resolver</span> tu <span class="text-dark-blue">problema</span>?
`));

//This function create the card services
function createSection() {
    const section = document.createElement('section');
    section.classList.add("container-fluid", "row", "justify-content-center", "align-content-center", "gap-2");
    section.innerHTML = "";
    return section;
}

const section = main.appendChild(createSection());

async function createCardService() {
    const response = await fetch("https://55nafuq2d0.execute-api.us-east-2.amazonaws.com/desarrollo/services");
    const data = await response.json();
    section.innerHTML = "";
    data.forEach(service => {
        section.innerHTML += `
        <div class="card col-sm-12 col-md-12 mt-3 shadow p-3 mb-5 bg-body-tertiary rounded animate__animated animate__backInLeft" style="width: 18rem;">
            <img src="${service.image}" class="card-img-top img-fluid rounded-4 mt-3 "alt="${service.title} image" style="width: 18rem; height: 11rem;">
            <div class="card-body">
                <h5 class="card-title text-center" style="height:48px;">${service.title}</h5>
                <p class="card-text text-center" style="height:96px;">${service.description}</p>
                <a href="#" class="btn btn-red text-white fw-medium d-flex align-content-center justify-content-center animate__animated animate__pulse animate__slower animate__infinite">${service.callToAction}</a>
            </div>
        </div>
        `;
    });
}

createCardService()

//This function create the carousel
function createSectionTwo() {
    const sectionTwo = document.createElement('section');
    sectionTwo.classList.add("container-fluid");
    sectionTwo.innerHTML = "";
    return sectionTwo;
}

const sectionTwo = main.appendChild(createSectionTwo());

function createCarousel() {
    sectionTwo.innerHTML = `
        <div data-aos="fade-up-right" data-aos-once="false" id="carouselExampleInterval" class="carousel slide mt-3" data-bs-ride="carousel">
            <div class="carousel-inner" style="height:450px;">
            <div class="carousel-item active" data-bs-interval="10000">
                <img src="./public/img/img1.webp" class="d-block w-100" alt="image carousel">
            </div>
            <div class="carousel-item" data-bs-interval="2000">
                <img src="./public/img/img2.webp" class="d-block w-100" alt="image carousel">
            </div>
            <div class="carousel-item" data-bs-interval="3000">
                <img src="./public/img/img3.webp" class="d-block w-100" alt="image carousel">
            </div>
            <div class="carousel-item">
                <img src="./public/img/img4.webp" class="d-block w-100" alt="image carousel">
            </div>
            <div class="carousel-caption bg-light-blue rounded-4 opacity-75">
                <h5 class="text-white fw-bold display-1">Jomchores</h5>
                <p class="text-white fw-medium h3">Encuentra el servicio que necesitas para tu hogar de inmediato.</p>
            </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div>
        `;
}

createCarousel()

//This function create the comments card

function createSectionThree() {
    const sectionThree = document.createElement('section');
    sectionThree.classList.add("container-fluid", "mt-3", "d-flex", "flex-wrap", "justify-content-center", "align-content-center", "gap-2");
    sectionThree.innerHTML = "";
    return sectionThree;
}

const sectionThree = main.appendChild(createSectionThree());

async function createComments() {
    const response = await fetch("http://localhost:3000/comments");
    const data = await response.json();
    sectionThree.innerHTML = "";
    sectionThree.appendChild(createTitle(`Lo que piensan nuestros usuarios`));
    data.forEach(comment => {
        sectionThree.innerHTML += `
        <div data-aos="zoom-in" data-aos-once="false" class="card mb-3 mt-4" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4 p-2">
                    <img src="${comment.image}" class="img-fluid rounded-start img-fluid h-100" alt="comment profile picture">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title text-dark-blue fw-medium h2">${comment.name}</h5>
                        <p class="card-text">${comment.comment}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
    });
}

createComments();

//This function create the most demanded services
function createSectionFour() {
    const sectionFour = document.createElement('section');
    sectionFour.classList.add("container-fluid");
    sectionFour.setAttribute("data-aos", "flip-left", "data-aos-once", "false");
    sectionFour.innerHTML = "";
    return sectionFour;
}

const sectionFour = main.appendChild(createSectionFour());

function createGraphic() {
    sectionFour.innerHTML = `
        <h2 class="text-center fw-bold display-3 mb-3">Servicios más demandados</h2>
        <h5 class="text-start fw-bold">Electricistas</h5>
        <div class="progress mb-2" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-success fw-medium" style="width: 50%">50%</div>
        </div>
        <h5 class="text-start fw-bold">Reparador de electrodomésticos</h5>
        <div class="progress mb-2" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning fw-medium" style="width: 25%">25%</div>
        </div>
        <h5 class="text-start fw-bold">Constructores</h5>
        <div class="progress mb-2" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-dark-blue fw-medium" style="width: 15%">15%</div>
        </div>
        <h5 class="text-start fw-bold">Plomeros</h5>
        <div class="progress mb-2" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger fw-medium" style="width: 10%">10%</div>
        </div>
        `;
}

createGraphic()

export function globalMain(){
    const mainHtml = main;
    return mainHtml;
}

globalMain();