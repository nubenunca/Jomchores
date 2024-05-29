//inner code html in the document from javascript
export function Footer() {
  const footer = document.createElement("footer")
  footer.setAttribute(
    "class",
    "d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top "
  )

  footer.innerHTML = ` 
 <div class="secciones-footer">
    <a href="#/quienes-somos">¿Quiénes somos?</a>
    <a href="#/servicios">Servicios</a>
    <a href="#/registro">Regístrate</a>
    <a href="#/trabajo-con-nosotros">Registrar servicio</a>
</div>
<div class="copy-right">
  <img
    class="logo-footer animate__animated animate__headShake animate__delay-5s animate__infinite animate__slower"
    src="./public/img/logo_blanco.ico"
    alt="logo-img"
  />
  <p class="copy-footer"> &copy; 2024 Jomchores, todos los derechos reservados</p>
</div>

<div class="icon-footer">
  <ul class="icon-list">
    <li>
      <a href="https://web.facebook.com/" target="_blank"><i class="bx bxl-facebook-circle"></i></a>
    </li>
    <li>
      <a href="https://www.instagram.com/" target="_blank"><i class="bx bxl-instagram"></i></a>
    </li>
    <li>
      <a href="mailto:ayudas@jomchores.com">
        <i class="bx bx-envelope"></i>
      </a>
    </li>
  </ul>
</div>
`
  return footer
}
