import "./Header.scss";

export function Header() {
  const header = document.createElement("header");

  header.innerHTML = `

    <section class="contenedor-header d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
        <img class="logo-header" src="./public/img/logo transparente blanco+.png" alt="logo-Jomchores">
        </a>
      </div>


      <nav class="navbar navbar-expand-lg rounded" aria-label="Eleventh navbar example">
      <div class="container-fluid">
        <button class="navbar-toggler collapsed navegador" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse" id="navbarsExample09" style="">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link items" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link items" href="#/quienes-somos">¿Quiénes somos?</a>
            </li>
            <li class="nav-item">
              <a class="nav-link items" href="#/servicios">Servicios</a>
            </li>
            <li class="nav-item">
            <a class="nav-link items" href="#/registro">Registro</a>
            </li>
            <li class="nav-item">
            <a class="nav-link items" href="#/trabajo-con-nosotros">Trabaja con nosotros</a>
            </li>
        </ul>
        </div>
      </div>
    </nav>      
    </section>

`;
  return header;
}
