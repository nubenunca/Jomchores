//Necessary import the styles of module
import "./LogIn.scss"

// Log in form
export const LogIn = () => {
    const section = document.createElement("section")
    section.className = "login-section"

    section.innerHTML = 
    `
        <img src = "./../../../public/img/logo transparente.png" alt="Logo de Jomchores">

        <form id="login-form">
            <input name="email-admin" id="email-admin" type="text" class = "input-admin" placeholder = "Correo electronico" required>
            <input name="password-admin" id="password-admin" type="password" class = "input-admin" placeholder = "Contraseña" required>

            <div class = "buttonSendAdmin-container">
                <button type="submit" class = "sendAdmin-button"> Enviar </button>
            </div>
        </form>
    `
    return section
}

// Fuction to log in as an administrator
export const LogInValidation = () => {
    const emailAdmin = "admin@jomchores.com"
    const passwordAdmin = "jomchores123"

    const form = document.getElementById("login-form")
    const email = document.querySelector("#email-admin")
    const password = document.querySelector("#password-admin")

    form.addEventListener("submit", (event) =>{
        event.preventDefault()


        // If email and password are correct, you will be redirected to the page to manage the workers.
        if(email.value == emailAdmin && password.value == passwordAdmin){
            localStorage.setItem("profile",email.value)
            window.location.hash = "#/gestionar-trabajadores"
        }
        else{
            form.reset()
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Datos incorrectos",
              })
        }
    })
}