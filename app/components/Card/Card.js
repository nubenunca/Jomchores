import "./Card.scss"
import "../../../src/scss/style.scss"


let  workers = [
    {
        name: "Santiago",
        lastName: "Suarez",
        phone: 234424522,
        address: "cra 22 #23-32",
        id: 123456789,
        img: "https://img.freepik.com/psd-gratis/hombre-elegante-brazos-cruzados_1154-563.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1715040000&semt=ais",
        category: "Plomeria",
        occupation : "Especialista en tuberias"
    },
    {
        name: "Laura",
        lastName: "Gomez",
        phone: 311567890,
        address: "cll 45 #56-78",
        id: 987654321,
        img: "https://img.freepik.com/psd-gratis/mujer-elegante-brazos-cruzados_1154-564.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1715040000&semt=ais",
        category: "Electricidad",
        occupation: "Electricista certificada"
    },
    {
        name: "Carlos",
        lastName: "Perez",
        phone: 320123456,
        address: "cra 10 #11-12",
        id: 112233445,
        img: "https://img.freepik.com/psd-gratis/hombre-elegante-brazos-cruzados_1154-565.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1715040000&semt=ais",
        category: "Carpintería",
        occupation: "Maestro carpintero"
    },
    {
        name: "Mariana",
        lastName: "Rodriguez",
        phone: 315789012,
        address: "av 19 #20-21",
        id: 334455667,
        img: "https://img.freepik.com/psd-gratis/mujer-elegante-brazos-cruzados_1154-566.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1715040000&semt=ais",
        category: "Jardinería",
        occupation: "Paisajista profesional"
    }
]








export const Card = (workers) => {
    let {name, lastName, occupation, img,id} = workers;

    const section = document.createElement("a");

    section.className = "a-container"


    section.innerHTML = 
    `
        <section class = "card-container"> 
            <h4 class = "worker-title">${name} ${lastName}</h4>
            <article class="img-container">
                <img src= ${img} alt="">
            </article>
            <article class = "occupation-container">
                <p class = "occupation-description">${occupation}</p>
            </article>
            <a href = "#/${name}-${lastName}" class = "view-more" id = "${id}">Ver mas</a>
        </section>
        
    `
    
    return section
}