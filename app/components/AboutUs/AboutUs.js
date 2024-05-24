
export const AboutUs = () => {
  let section = document.createElement("section");
  section.className = "about-us";
  section.innerHTML = `
      <div class="abaut-us-container">
        <h1>¿Quiénes somos?</h1>
        <div class="copy-about-us">
            <p>En Jomchores, nos dedicamos a simplificar tu vida conectándote con profesionales capacitados y confiables para satisfacer tus necesidades de mantenimiento y reparación en el hogar.
            </p>
            <p>
            Nuestro objetivo es abordar la creciente falta de tiempo y la dificultad para encontrar proveedores de servicios de confianza. Entendemos que buscar profesionales calificados puede ser abrumador, y por eso hemos creado una solución que garantiza una experiencia segura, confiable y conveniente tanto para usuarios como para profesionales independientes. <br>
            En Jomchores, nos esforzamos por cerrar la brecha entre la demanda de servicios para el hogar y la disponibilidad de profesionales capacitados. Con nuestra aplicación móvil, puedes encontrar fácilmente profesionales verificados y revisar sus calificaciones y comentarios de otros usuarios. Además, ofrecemos a los profesionales independientes una plataforma donde pueden promocionar sus habilidades y experiencia de manera efectiva, llegando a una audiencia más amplia y maximizando sus oportunidades de negocio.
            </p>
            <p>
            Creemos en la importancia de la transparencia, la confiabilidad y la calidad en cada servicio que ofrecemos. Por eso, en Jomchores, nos esforzamos por garantizar la satisfacción del cliente y la excelencia en cada trabajo realizado.
            </p>


        </div>
        <button class="register-button"><a href="">Registrarme </a></button>
      </div>`;

  return section;
};
