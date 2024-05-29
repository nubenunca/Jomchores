//Necessary import the styles of module
import "./FormUser.scss"

//User registration form
export const FormUser = () => {

    let section = document.createElement("section")
    section.className = "form-section"

    section.innerHTML = 
    `
        <h1>Registrarse</h1>
        <h4 class = "user-subtitle">Usuario</h4>

        <form class = "user-form">
            <div class = "pcView-container">
                <div class="inputUser-container">
                    <label for="name-user">Nombre</label>
                    <input name="name-user" id="name-user" type="text" class = "input-user" placeholder = "Rafael" required>
                </div>

                <div class="inputUser-container">
                    <label for="lastName-user">Apellido</label>
                    <input name="lastName-user" id="lastName-user" type="text" class = "input-user" placeholder = "González" required>
                </div>
            </div>
            
            <div class = "pcView-container">
                <div class="inputUser-container">
                    <label for="email-user">Correo electrónico</label>
                    <input name="email-user" id="email-user" type="email" class = "input-user" placeholder = "rafael@jomchores.com" required>
                    <span class="email-securityUser"></span>
                </div>

                <div class="inputUser-container">
                    <label for="userName-user">Nombre de usuario</label>
                    <input name="userName-user" id="userName-user" type="text" class = "input-user" placeholder = "rafagonza" required>
                    <span class="username-securityUser"></span>
                </div>
            </div>

            <div class = "pcView-container">
                <div class="inputUser-container">
                    <label for="password-user">Contraseña</label>
                    <input name="password-user" id="password-user" type="password" class = "input-user" placeholder = "Contraseña" required>
                    <span class="password-securityUser"></span>
                </div>

                <div class="inputUser-container">
                    <label for="verifyPassword-user">Ingrese nuevamente la contraseña</label>
                    <input name="verifyPassword-user" id="verifyPassword-user" type="password" class = "input-user" placeholder = "Contraseña" required>
                    <span class="password-coincidenceUser"></span>
                </div>
            </div>
            
            <div class = "pcView-container">
                <div class="inputUser-container">
                    <label for="phone-user">Celular</label>
                    <input name="phone-user" id="phone-user" type="tel" class = "input-user" placeholder = "3202146890" required>
                    <span class="phone-securityUser"></span>
                </div>

                <div class="inputUser-container">
                    <label for="address-user">Dirección</label>
                    <input name="address-user" id="address-user" type="text" class = "input-user" placeholder = "cra 22 #33 -120" required>
                </div>
            </div>
            
            <div class = "pcView-container">
                <div class="inputUser-container">
                    <label for="neighborhood-user">Barrio / Municipio</label>
                    <input list="neighborhoods-user" name="neighborhood-user" id="neighborhood-user" placeholder = "Castilla" required>
                    
                    <datalist id="neighborhoods-user">
                        <option data-value="popular">Popular</option>
                        <option data-value="santa-cruz">Santa Cruz</option>
                        <option data-value="manrique">Manrique</option>
                        <option data-value="aranjuez">Aranjuez</option>
                        <option data-value="castilla">Castilla</option>
                        <option data-value="doce-de-octubre">Doce de Octubre</option>
                        <option data-value="robledo">Robledo</option>
                        <option data-value="villa-hermosa">Villa Hermosa</option>
                        <option data-value="buenos-aires">Buenos Aires</option>
                        <option data-value="la-candelaria">La Candelaria</option>
                        <option data-value="laureles-estadio">Laureles Estadio</option>
                        <option data-value="la-america">La América</option>
                        <option data-value="san-javier">San Javier</option>
                        <option data-value="el-poblado">El Poblado</option>
                        <option data-value="guayabal">Guayabal</option>
                        <option data-value="belen">Belén</option>
                        <option data-value="san-sebastian-de-palmitas">San Sebastián de Palmitas</option>
                        <option data-value="san-cristobal">San Cristóbal</option>
                        <option data-value="altavista">Altavista</option>
                        <option data-value="san-antonio-de-prado">San Antonio de Prado</option>
                        <option data-value="santa-elena">Santa Elena</option>
                        <option data-value="bello">Bello</option>
                        <option data-value="itagui">Itagüí</option>
                        <option data-value="envigado">Envigado</option>
                        <option data-value="sabaneta">Sabaneta</option>
                        <option data-value="la-estrella">La Estrella</option>
                        <option data-value="copacabana">Copacabana</option>
                        <option data-value="girardota">Girardota</option>
                        <option data-value="barbosa">Barbosa</option>
                        <option data-value="caldas">Caldas</option>
                    </datalist>
                </div>

                <div class="inputUser-container">
                    <label for="id-user">Número de cedúla</label>
                    <input name="id-user" id="id-user" type="number" class = "input-user" placeholder = "1234567890 " required>
                    <span class="id-securityUser"></span>
                </div>
            </div>
            
            <div class = "pcView-container">
                <div class="inputUser-container">
                    <label for="idDocument-user">Subir cedúla</label>
                    <input name="idDocument-user" id="idDocument-user" class = "file-user" type="file" required>
                    <button type="button" id="idDocument-userButton" class="userFile-button" onclick = "document.getElementById('idDocument-user').click()" >Seleccionar archivo</button>
                </div>

                <div class="inputUser-container">
                    <label for="profilePicture-user">Foto de perfil</label>
                    <input name=profilePicture-user" id="profilePicture-user" type="url" class = "input-user" placeholder = "URL " required>
                </div>
            </div>

            <div class="inputUser-container">
                <div class="workerConditions-container">
                    <label for="conditions-worker">Acepto los <a href="" data-bs-toggle="modal" data-bs-target="#exampleModal"> terminos y condiciones </a> </label>
                    <input type="checkbox" name="conditions-worker" id="conditions-worker" required>
                </div>
            </div>
            
            <div class = "buttonSendUser-container">
                <button type="submit" class = "sendUser-button"> Enviar </button>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Terminos y condiciones</h1>
                    </div>
                    <div class="modal-body">
                        <h3>Política de Privacidad y Exención de Responsabilidad</h3>
                        <p>Bienvenido a Jomchores. Nos dedicamos a simplificar tu vida conectándote con profesionales capacitados y confiables para satisfacer tus necesidades de mantenimiento y reparación en el hogar. A continuación, te presentamos nuestra Política de Privacidad y Exención de Responsabilidad, la cual debes leer y aceptar para usar nuestra aplicación.</p>

                        <h6>1. Recopilación y Uso de Información</h6>

                        <p>En Jomchores, valoramos tu privacidad y nos comprometemos a proteger tus datos personales. Recopilamos información para mejorar nuestra plataforma y ofrecerte el mejor servicio posible. Los datos que recopilamos incluyen:</p>


                        <p>Información Personal: Nombre, dirección, correo electrónico y número de teléfono. </p>
                        <p>Información de Uso: Detalles de cómo interactúas con nuestra aplicación, incluidas las páginas visitadas, el tiempo de uso y las preferencias.</p>
                        <p>Información de Ubicación: Datos de geolocalización para conectar con profesionales cercanos.</p>

                        <h6>Usamos esta información para:</h6>

                        <p>Facilitar la conexión con profesionales del hogar.</p>
                        <p>Mejorar y personalizar tu experiencia en nuestra plataforma</p>
                        <p>Procesar pagos y emitir facturas.</p>
                        <p>Enviar comunicaciones importantes y actualizaciones del servicio.</p>

                        <h6>2. Compartición de Información</h6>

                        <p>Jomchores no comparte tu información personal con terceros sin tu consentimiento, excepto en los siguientes casos:</p>
                        
                        <p>Con profesionales para realizar el servicio solicitado.</p>
                        <p>Con proveedores de servicios que nos ayudan a operar nuestra plataforma (ej. procesadores de pagos).</p>
                        <p>Para cumplir con obligaciones legales o proteger los derechos y la seguridad de Jomchores y sus usuarios.</p>

                        <h6>3. Seguridad de los Datos</h6>

                        <p>Implementamos medidas de seguridad técnicas y organizativas para proteger tu información contra el acceso no autorizado, la pérdida o la alteración. Sin embargo, ningún sistema es completamente seguro, y no podemos garantizar la seguridad absoluta de tus datos.</p>

                        <h6>4. Exención de Responsabilidad </h6>

                        <p>En Jomchores, facilitamos la conexión entre usuarios y profesionales independientes para servicios de mantenimiento y reparación del hogar. Sin embargo, no asumimos responsabilidad por daños, lesiones o agravios que puedan ocurrir durante la prestación de los servicios.</p>

                        <h6>Al usar nuestra aplicación, entiendes y aceptas que:</h6>

                        <p>Jomchores no ofrece los servicios directamente, sino que actúa como un intermediario.</p>
                        <p>Jomchores no ofrece los servicios directamente, sino que actúa como un intermediario. </p>
                        <p>Los profesionales son contratistas independientes y no empleados de Jomchores. </p>
                        <p>No somos responsables de la conducta, calidad, cumplimiento o resultados de los servicios proporcionados por los profesionales. </p>

                        <h6>5. Modificaciones a la Política de Privacidad </h6>
                        <p> Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier momento. Te notificaremos sobre cambios significativos a través de nuestra aplicación o por correo electrónico. El uso continuo de nuestra plataforma después de tales modificaciones constituye tu aceptación de los cambios.</p>

                        <h6>6. Contacto </h6>
                        <p>Si tienes preguntas o inquietudes sobre esta Política de Privacidad, puedes contactarnos en: contacto@jomchores.com</p>

                        <h6>Al registrarte y utilizar Jomchores, confirmas que has leído, entendido y aceptado esta Política de Privacidad y Exención de Responsabilidad.</h6>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    </div>
                    </div>
                </div>
            </div>
            
        </form>
    `

    return section
}