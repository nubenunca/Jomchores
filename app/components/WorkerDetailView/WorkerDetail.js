export function workerDetail() {
  const detailWorker = document.querySelector(".worker-detail");

  detailWorker.innerHTML = `
<div class="worker-container">
<h1 class="name-worker">Rafael González</h1>
<figure class="img-photo-worker">
  <img
    class="photo-worker"
    src="https://media.istockphoto.com/id/1346124841/es/foto/pensamiento-exitoso-del-trabajador-del-sitio-de-construcci%C3%B3n.jpg?s=612x612&w=0&k=20&c=aNZUadteECWp2tzIWt_RQPInVvzqNkMyAtfrneVTX3k="
    alt=""
  />
</figure>
<h2 class="service-worker">Reparación de tuberías</h2>
<p class="work-experience">
  Listo para solucionar cualquier problema que tengas con tus
  tuberías. Ya sea una fuga, un atasco o cualquier otro inconveniente,
  estoy aquí para asegurar que todo vuelva a funcionar perfectamente
  en tu hogar. Con años de experiencia, herramientas adecuadas y un
  servicio amigable y profesional, te garantizo soluciones eficientes
  y duraderas a precios competitivos.
</p>
</div>
<div class="worker-qualification">
<!-- <figure class="photo-worker-qualification">
  <img
    class="photo-worker-qualification"
    src="https://media.istockphoto.com/id/1346124841/es/foto/pensamiento-exitoso-del-trabajador-del-sitio-de-construcci%C3%B3n.jpg?s=612x612&w=0&k=20&c=aNZUadteECWp2tzIWt_RQPInVvzqNkMyAtfrneVTX3k="
    alt=""
  />
</figure> -->
<div class="container-name-stars-neighborhood">
  <h3 class="name-worker-qualification">Rafael González</h3>
  <p class="worker-neighborhood">Buenos aíres</p>
  <div class="stars-rating">
    <i class="bx bxs-star"></i>
    <i class="bx bxs-star"></i>
    <i class="bx bxs-star"></i>
    <i class="bx bxs-star"></i>
    <i class="bx bxs-star"></i>
  </div>
  <span class="worker-service-price">$50.000</span>
  <button class="contact"><a href="">Contactar</a></button>
</div>
</div>
`;
}
