import "./FormUser.scss"

//User registration form
export const FormUser = () => {

    let section = document.createElement("section");
    section.className = "form-section";

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
                        <p>Jomchores</p>
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