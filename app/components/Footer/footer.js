export function footer() {
  const footer = document.querySelector("footer");

  footer.innerHTML = ` 
 <div class="secciones-footer">
    <a href="#">¿Quiénes somos?</a>
    <a href="#">Servicios</a>
    <a href="#">Regístrate</a>
    <a href="#">Trabaja con nosotros</a>
</div>
<div class="copy-right">
  <img
    class="logo-footer"
    src="./public/img/logo transparente blanco+.png"
    alt="logo-img"
  />
  <p class="copy-footer">2024 Company, Inc</p>
</div>

<div class="icon-footer">
  <ul class="icon-list">
    <li>
      <a href=""><i class="bx bxl-facebook-circle"></i></a>
    </li>
    <li>
      <a href=""><i class="bx bxl-instagram"></i></a>
    </li>
    <li>
      <a href="">
        <i class="bx bx-envelope"></i>
      </a>
    </li>
  </ul>
</div>
`;
}
