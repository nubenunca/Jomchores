//Necessary import the styles of module
import "./FormWorker.scss"

//Worker registration form

export const FormWorker = () => {
  let section = document.createElement("section")
  section.className = "form-section"

  section.innerHTML = `
        <h1>Registrar Servicio</h1>
        <h4 class = "worker-subtitle">Aliado</h4>

        <form class = "worker-form">
            <div class = "pcView-container">
                <div class="inputWorker-container">
                    <label for="name-worker text-capitalize">Nombre</label>
                    <input name="name-worker" id="name-worker" type="text" class = "input-worker" placeholder = "Rafael" required>
                </div>

                <div class="inputWorker-container">
                    <label for="lastName-worker">Apellido</label>
                    <input name="lastName-worker" id="lastName-worker" type="text" class = "input-worker" placeholder = "González" required>
                </div>
            </div>
            
            <div class = "pcView-container">
                <div class="inputWorker-container">
                    <label for="email-worker">Correo electrónico</label>
                    <input name="email-worker" id="email-worker" type="email" class = "input-worker" placeholder = "rafael@jomchores.com" required>
                    <span class="email-security"></span>
                </div>

                <div class="inputWorker-container">
                    <label for="userName-worker">Nombre de usuario</label>
                    <input name="userName-worker" id="userName-worker" type="text" class = "input-worker" placeholder = "rafagonza" required>
                    <span class="username-security"></span>
                </div>
            </div>

            <div class = "pcView-container">
                <div class="inputWorker-container">
                    <label for="password-worker">Contraseña</label>
                    <input name="password-worker" id="password-worker" type="password" class = "input-worker" placeholder = "Contraseña" required>
                    <span class="password-security"></span>
                </div>

                <div class="inputWorker-container">
                    <label for="verifyPassword-worker">Ingrese nuevamente la contraseña</label>
                    <input name="verifyPassword-worker" id="verifyPassword-worker" type="password" class = "input-worker" placeholder = "Contraseña" required>
                    <span class="password-coincidence"></span>
                </div>
            </div>
            
            <div class = "pcView-container">
                <div class="inputWorker-container">
                    <label for="phone-worker">Celular</label>
                    <input name="phone-worker" id="phone-worker" type="tel" class = "input-worker" placeholder = "3202146890" required>
                    <span class="phone-security"></span>
                </div>

                <div class="inputWorker-container">
                    <label for="address-worker">Dirección</label>
                    <input name="address-worker" id="address-worker" type="text" class = "input-worker" placeholder = "cra 22 #33 -120" required>
                </div>
            </div>
            
            <div class = "pcView-container">
                <div class="inputWorker-container">
                    <label for="id-worker">Número de cedúla</label>
                    <input name="id-worker" id="id-worker" type="number" class = "input-worker" placeholder = "123456789" required>
                    <span class="id-security"></span>
                </div>
                
                <div class="inputWorker-container">
                    <label for="neighborhood-worker">Barrio / Municipio</label>
                    <input list="neighborhoods-worker" name="neighborhood-worker" id="neighborhood-worker" placeholder = "Castilla" required>
                    
                    <datalist id="neighborhoods-worker">
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
            </div>
            
            <div class = "pcView-container">
                <div class="inputWorker-container">
                    <label for="certifications-worker">Certificaciones (opcional)</label>
                    <input name="certifications-worker" id="certifications-worker" class = "file-worker" type="file">
                    <button type="button" id="certifications-workerButton" class="workerFile-button" onclick = "document.getElementById('certifications-worker').click()">Seleccionar archivo</button>
                </div>
                
                <div class="inputWorker-container">
                    <label for="idDocument-worker">Subir cedúla</label>
                    <input name="idDocument-worker" id="idDocument-worker" class = "file-worker" type="file" required>
                    <button type="button" id="idDocument-workerButton" class="workerFile-button" onclick = "document.getElementById('idDocument-worker').click()" >Seleccionar archivo</button>
                </div>
                
            </div>
            
            <div class = "pcView-container">
                <div class="inputWorker-container">
                    <label for="policeRecords-worker">Antecedentes policiales</label>
                    <input name="policeRecords-worker" id="policeRecords-worker" class = "file-worker" type="file" required>
                    <button type="button" id="policeRecords-workerButton" class="workerFile-button" onclick = "document.getElementById('policeRecords-worker').click()">Seleccionar archivo</button>
                </div>

                <div class="inputWorker-container">
                    <label for="profilePicture-worker">Foto de perfil</label>
                    <input name="profilePicture-worker" id="profilePicture-worker" type="url" class = "input-worker" placeholder = "URL" required>
                </div>

                
            </div>

            <div class="inputWorker-container">
                <label for="category-worker">Categoría</label>
                <select name="category-worker" id="category-worker" class = "input-worker" required>
                    <option disabled selected ></option>
                    <option value="plomeria">Plomería</option>
                    <option value="aseo">Aseo</option>
                    <option value="peluqueria">Peluquería</option>
                    <option value="construccion">Construcción</option>
                    <option value="electricidad">Electricidad</option>
                </select>
            </div>

            
            <div class="inputWorker-container">
                <label for="description-worker">Descripción del trabajo</label>
                <textarea name="description-worker" id="description-worker" class = "worker-textarea" placeholder = "Descripción de su trabajo" required></textarea>
            </div>
            
            <div class="inputWorker-container">
                <label for="price-worker">Valor hora/ Valor servicio (Valle de Aburrá)</label>
                <input name="price-worker" id="price-worker" type="number" class = "input-worker" placeholder = "Valor servicio ($ COP)" required>
            </div>

            <div class="inputWorker-container">
                <div class="workerConditions-container">
                    <label for="conditions-worker">Acepto los <a href="" data-bs-toggle="modal" data-bs-target="#exampleModal"> terminos y condiciones </a> </label>                
                    <input type="checkbox" name="conditions-worker" id="conditions-worker" required>
                </div>
            </div>

            <div class = "buttonSendWorker-container">
                <button type="submit" class = "sendWorker-button"> Enviar </button>
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
