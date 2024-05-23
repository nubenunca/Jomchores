import "./Card.scss"
 
export const Card = (props) => {
    let {name, lastName, occupation, img,id} = props;

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