import "./FormWorker.scss"

export const FormWorker = () => {

    let section = document.createElement("section");
    section.className = "form-section";

    section.innerHTML = 
    `
        <h1>Registrarse</h1>
        <h4 class = "worker-subtitle">Aliado</h4>

        <form class = "worker-form">
            <div class = "pcView-container">
                <div class="inputWorker-container">
                    <label for="name-worker">Nombre</label>
                    <input name="name-worker" id="name-worker" type="text" class = "input-worker" placeholder = "Rafael" >
                </div>

                <div class="inputWorker-container">
                    <label for="lastName-worker">Apellido</label>
                    <input name="lastName-worker" id="lastName-worker" type="text" class = "input-worker" placeholder = "González" >
                </div>
            </div>
            
            <div class = "pcView-container">
                <div class="inputWorker-container">
                    <label for="email-worker">Correo electrónico</label>
                    <input name="email-worker" id="email-worker" type="email" class = "input-worker" placeholder = "rafael@jomchores.com" >
                </div>

                <div class="inputWorker-container">
                    <label for="userName-worker">Nombre de usuario</label>
                    <input name="userName-worker" id="userName-worker" type="text" class = "input-worker" placeholder = "rafagonza" >
                </div>
            </div>

            <div class = "pcView-container">
                <div class="inputWorker-container">
                    <label for="password-worker">Contraseña</label>
                    <input name="password-worker" id="password-worker" type="password" class = "input-worker" placeholder = "Contraseña" >
                </div>

                <div class="inputWorker-container">
                    <label for="verifyPassword-worker">Ingrese nuevamente la contraseña</label>
                    <input name="verifyPassword-worker" id="verifyPassword-worker" type="password" class = "input-worker" placeholder = "Contraseña" >
                </div>
            </div>
            
            <div class = "pcView-container">
                <div class="inputWorker-container">
                    <label for="phone-worker">Celular</label>
                    <input name="phone-worker" id="phone-worker" type="tel" class = "input-worker" placeholder = "3202146890" >
                </div>

                <div class="inputWorker-container">
                    <label for="address-worker">Dirección</label>
                    <input name="address-worker" id="address-worker" type="text" class = "input-worker" placeholder = "cra 22 #33 -120" >
                </div>
            </div>
            
            <div class = "pcView-container">
                <div class="inputWorker-container">
                    <label for="id-worker">Número de cedúla</label>
                    <input name="id-worker" id="id-worker" type="number" class = "input-worker" placeholder = "1234567890 " >
                </div>
                
                <div class="inputWorker-container">
                    <label for="neighborhood-worker">Barrio / Municipio</label>
                    <input list="neighborhoods-worker" name="neighborhood-worker" id="neighborhood-worker" placeholder = "Castilla" >
                    
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
                    <input name="certifications-worker" id="certifications-worker" class = "file-worker" type="file" >
                    <button type="button" class="workerFile-button" onclick = "document.getElementById('certifications-worker').click()">Seleccionar archivo</button>
                </div>
                
                <div class="inputWorker-container">
                    <label for="idDocument-worker">Subir cedúla</label>
                    <input name="idDocument-worker" id="idDocument-worker" class = "file-worker" type="file" >
                    <button type="button" class="workerFile-button" onclick = "document.getElementById('idDocument-worker').click()" >Seleccionar archivo</button>
                </div>
                
            </div>
            
            <div class = "pcView-container">
                <div class="inputWorker-container">
                    <label for="policeRecords-worker">Antecedentes policiales</label>
                    <input name="policeRecords-worker" id="policeRecords-worker" class = "file-worker" type="file" >
                    <button type="button" class="workerFile-button" onclick = "document.getElementById('policeRecords-worker').click()">Seleccionar archivo</button>
                </div>

                <div class="inputWorker-container">
                    <label for="profilePicture-worker">Foto de perfil</label>
                    <input name="profilePicture-worker" id="profilePicture-worker" class = "file-worker" type="file" accept="image/*">
                    <button type="button" class="workerFile-button" onclick = "document.getElementById('profilePicture-worker').click()">Seleccionar archivo</button>
                </div>

                
            </div>

            <div class = "pcView-container">
                <div class="inputWorker-container">
                    <label for="coverPicture-worker">Foto de portada</label>
                    <input name="coverPicture-worker" id="coverPicture-worker" class = "file-worker" type="file" accept="image/*">
                    <button type="button" class="workerFile-button" onclick = "document.getElementById('coverPicture-worker').click()">Seleccionar archivo</button>
                </div>

                <div class="inputWorker-container">
                    <label for="category-worker">Categoría</label>
                    <select name="category-worker" id="category-worker" class = "input-worker" >
                        <option disabled selected ></option>
                        <option value="plomeria">Plomería</option>
                        <option value="aseo">Aseo</option>
                        <option value="peluqueria">Peluquería</option>
                        <option value="construccion">Construcción</option>
                    </select>
                </div>
            </div>
            
            <div class="inputWorker-container">
                <label for="description-worker">Descripción del trabajo</label>
                <textarea name="description-worker" id="description-worker" class = "worker-textarea" placeholder = "Descripción de su trabajo"></textarea>
            </div>
            
            <div class="inputWorker-container">
                <label for="price-worker">Valor hora/ Valor servicio (Valle de Aburrá)</label>
                <input name="price-worker" id="price-worker" type="number" class = "input-worker" placeholder = "Valor servicio ($ COP)" >
            </div>

            <div class="inputWorker-container">
                <div class="workerConditions-container">
                    <label for="conditions-worker">Acepto los terminos y condiciones</label>
                    <input type="checkbox" name="conditions-worker" id="conditions-worker" >
                </div>
            </div>

            <div class = "buttonSendWorker-container">
                <button type="submit" class = "sendWorker-button"> Enviar </button>
            </div>
        </form>
    `

    
    return section
}