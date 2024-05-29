// This function  will cans to show the page with the direct contact information to what'sapp

export const WorkerDetailView = (props) => {
  let{name, lastName, img, id, category, workDescription,neighborhood,cost} = props
  const detailWorker = document.createElement("worker-detail");
  cost = parseInt(cost)
  let costid= currencyFormatter(cost)
  detailWorker.innerHTML = `
<div class="worker-container">
<h1 class="name-worker text-capitalize">${name} ${lastName}</h1>
<figure class="img-photo-worker">
  <img
    class="photo-worker"
    src="${img}"
    alt="Imagen de ${id}"
  />
</figure>
<h2 class="service-worker text-capitalize">${category}</h2>
<p class="work-experience lh-bas">
  ${workDescription}
</p>
</div>
<div class="worker-qualification">
<div class="container-name-stars-neighborhood">
  <p class="worker-neighborhood">${neighborhood}</p>
  <h3 class="worker-service-price"> ${costid}</h3>
  <button class="contact"><a href="https://wa.me/17865432489${id}" target="_blank">Contactar</a></button>
</div>
</div>
`
  return detailWorker
}

// This function create the format currency for the price of worker
function currencyFormatter(valor) {
  return valor.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
}