export const WorkerDetailView = () => {
  const detailWorker = document.createElement("worker-detail");

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
<div class="container-name-stars-neighborhood">
  <p class="worker-neighborhood">Buenos aires</p>
  <h3 class="worker-service-price">$50.000</h3>
  <button class="contact"><a href="">Contactar</a></button>
</div>
</div>
`;
  return detailWorker;
};
