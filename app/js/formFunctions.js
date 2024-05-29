//Password encryption library imported
import CryptoJS from 'crypto-js';
import { FormWorker } from '../components/FormWorker/FormWorker';
import { FormUser } from '../components/FormUser/FormUser';

FormWorker();

// Function that reports if the passwords match
export function validatePasswordsWarning(password, confirmPassword,span){
    confirmPassword.addEventListener("input",()=>{
        if(password.value === confirmPassword.value){
            span.textContent = ""
        }else{
            span.textContent = "Las contraseñas no coinciden"
        }
    }) 
}

// Password validation function
export function validatePasswords (password, confirmPassword){
    if(password.value === confirmPassword.value){
        return true
    }else{
        return false
    }
}

// Function that informs if a data is already registered in the database
async function validateInformationWarning (key,inputInformation, url, span, nameKey){
    inputInformation.addEventListener("change", async()=>{
        const response = await fetch (`${url}`);
        const data = await response.json();

        const filterData = data.filter(worker => (
            worker[key] == inputInformation.value
        ));

        if(filterData.length === 0){
            span.textContent = ``
            return true
        }else{
            span.textContent = `El ${nameKey} ya se encuentra registrado`
            return false
        }
    }) 
};

// Function that validates that the information is not in the database.
async function validateInformation(key,inputInformation, url){
    const response = await fetch (url);
        const data = await response.json();

        const filterData = data.filter(worker => (
            worker[key] == inputInformation.value
        ));


    if(filterData.length === 0){
        return true
    }else{

        return false
    }
}

// Function that changes the style of the button when a file has been attached.
export function selectedFile (file, button){
    file.addEventListener("change", () => {
        if(file.files.length>0){
            button.textContent = "Archivo cargado";
            button.className = "workerFile-buttonSelected"
        }
    })
}

//Function that informs if the password is at least 8 characters long, has at least one number, 1 capital letter and 1 special character
export function passwordSecurityWarning (password, span){
    password.addEventListener("input",()=>{
        const capitalLetter = /[A-Z]/.test(password.value);
        const number = /\d/.test(password.value);
        const specialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password.value);
        const passwordLength = password.value.length >= 8;

        if (capitalLetter && number && specialCharacter && passwordLength){
            span.textContent = ""

            return true
        }
        else{
            span.textContent = "La contraseña debe contener al menos un numero, una mayuscula, un caracter especial y tener almnenos 8 caracteres";
            return false
        }
    })
}

//Function that validates that the password is secure
export function passwordSecurity (password){
    const capitalLetter = /[A-Z]/.test(password.value);
    const number = /\d/.test(password.value);
    const specialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password.value);
    const passwordLength = password.value.length >= 8;

    if (capitalLetter && number && specialCharacter && passwordLength){
        return true
    }
    else{
        return false
    }
}

//Password encryption function
export function encPass(password){
    let encrypted = CryptoJS.AES.encrypt(password.value,password.value).toString();
    return encrypted;
}


// Function to add the worker to the data base.
export async function createWorker (name, lastName, email, username, password, phone, address, neighborhood, id, category, workDescription, cost,img, url){

    const newWorker = {
        name: name.value,
        lastName: lastName.value,
        email: email.value,
        username: username.value,
        password: password,
        phone: phone.value,
        address: address.value,
        neighborhood: neighborhood.value,
        id: id.value,
        category: category.value,
        workDescription: workDescription.value,
        cost: cost.value,
        img: img.value
    } 


    await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newWorker)
    })
}

// Function that creates a new user
async function createUser (name, lastName, email, username, password, phone, address, neighborhood, id,img, url){

    const newUser = {
        name: name.value,
        lastName: lastName.value,
        email: email.value,
        username: username.value,
        password: password,
        phone: phone.value,
        address: address.value,
        neighborhood: neighborhood.value,
        id: id.value,
        img: img.value
    } 


    await fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
}

// Function of success alert
function successAlert(message){
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: message,
        showConfirmButton: false,
        timer: 1500
      });
}

// Function of failure alert
function failure(message){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: message,
      });
}


//Function to add the worker
export function addWorker(){
    const form = document.querySelector(".worker-form");
    const nameWorker = document.querySelector("#name-worker");
    const lastNameWorker = document.querySelector("#lastName-worker");
    const emailWorker = document.querySelector("#email-worker");
    const emailWorkerSpan = document.querySelector(".email-security");
    const usernameWorker = document.querySelector("#userName-worker");
    const usernameWorkerSpan = document.querySelector(".username-security")
    const passwordWorker = document.querySelector("#password-worker");
    const passwordSpan = document.querySelector(".password-security")
    const verifyPasswordWorker = document.querySelector("#verifyPassword-worker");
    const passwordCoincidence = document.querySelector(".password-coincidence")
    const phoneWorker = document.querySelector("#phone-worker");
    const phoneWorkerSpan = document.querySelector(".phone-security")
    const addressWorker = document.querySelector("#address-worker");
    const neighborhoodWorker = document.querySelector("#neighborhood-worker");
    const idWorker = document.querySelector("#id-worker");
    const idWorkerSpan = document.querySelector(".id-security")
    const certificationWorker = document.querySelector("#certifications-worker")
    const certificationWorkerButton = document.querySelector("#certifications-workerButton")
    const idDocumentWorker = document.querySelector("#idDocument-worker")
    const idDocumentWorkerButton = document.querySelector("#idDocument-workerButton")
    const profilePictureWorker = document.querySelector("#profilePicture-worker")
    const policeRecordsWorker = document.querySelector("#policeRecords-worker")
    const policeRecordsWorkerButton = document.querySelector("#policeRecords-workerButton")
    const categoryWorker = document.querySelector("#category-worker");
    const descriptionWorker = document.querySelector("#description-worker");
    const priceWorker = document.querySelector("#price-worker");

    const url = "https://55nafuq2d0.execute-api.us-east-2.amazonaws.com/desarrollo/workers"
    
    selectedFile (certificationWorker, certificationWorkerButton);
    selectedFile (idDocumentWorker, idDocumentWorkerButton);
    selectedFile (policeRecordsWorker, policeRecordsWorkerButton);

    validatePasswordsWarning(passwordWorker,verifyPasswordWorker,passwordCoincidence);
    passwordSecurityWarning (passwordWorker, passwordSpan);
    validateInformationWarning ("email", emailWorker, url,emailWorkerSpan, "correo electronico")
    validateInformationWarning ("username", usernameWorker, url,usernameWorkerSpan, "nombre de usuario")
    validateInformationWarning ("phone", phoneWorker, url,phoneWorkerSpan, "número de celular")
    validateInformationWarning ("id", idWorker, url,idWorkerSpan, "número de cedúla")

    form.addEventListener("submit", async(event)=>{
        event.preventDefault();
        const checkPassword = validatePasswords (passwordWorker,verifyPasswordWorker);
        const checkPasswordSecurity = passwordSecurity (passwordWorker);
        const checkEmail = await validateInformation ("email", emailWorker, url)
        const checkUsername = await validateInformation ("username", usernameWorker, url)
        const checkephone = await validateInformation ("phone", phoneWorker, url)
        const checkId= await validateInformation ("id", idWorker, url)

        // If the passwords match and if the email, username, phone, id and password meet the security standards, the worker is added.
        if(checkPassword && checkPasswordSecurity && checkEmail && checkUsername && checkephone && checkId){
            const encryptedPassword = encPass(passwordWorker)
            createWorker (nameWorker, lastNameWorker, emailWorker, usernameWorker, encryptedPassword, phoneWorker, addressWorker, neighborhoodWorker, idWorker, categoryWorker, descriptionWorker, priceWorker,profilePictureWorker, url);
            form.reset()

            certificationWorkerButton.className = "workerFile-button";
            idDocumentWorkerButton.className = "workerFile-button"
            policeRecordsWorkerButton.className = "workerFile-button"
            successAlert("El trabajador se agrego exitosamente")
            window.location.hash = ""


        }else{
            failure("No se pudo registrar, revisa nuevamente los datos")
        }
    })
}


FormUser()
//Function to add the worker
export function addUser(){
    const form = document.querySelector(".user-form");
    const nameUser = document.querySelector("#name-user");
    const lastNameUser = document.querySelector("#lastName-user");
    const emailUser = document.querySelector("#email-user");
    const emailUserSpan = document.querySelector(".email-securityUser");
    const usernameUser = document.querySelector("#userName-user");
    const usernameUserSpan = document.querySelector(".username-securityUser")
    const passwordUser = document.querySelector("#password-user");
    const passwordSpanUser = document.querySelector(".password-securityUser")
    const verifyPasswordUser = document.querySelector("#verifyPassword-user");
    const passwordCoincidenceUser = document.querySelector(".password-coincidenceUser")
    const phoneUser = document.querySelector("#phone-user");
    const phoneUserSpan = document.querySelector(".phone-securityUser")
    const addressUser = document.querySelector("#address-user");
    const neighborhoodUser = document.querySelector("#neighborhood-user");
    const idUser = document.querySelector("#id-user");
    const idUserSpan = document.querySelector(".id-securityUser")
    const idDocumentUser = document.querySelector("#idDocument-user")
    const idDocumentUserButton = document.querySelector("#idDocument-userButton")
    const profilePictureUser = document.querySelector("#profilePicture-user")

    const url = "https://55nafuq2d0.execute-api.us-east-2.amazonaws.com/desarrollo/users"
    
    selectedFile (idDocumentUser, idDocumentUserButton);

    validatePasswordsWarning(passwordUser,verifyPasswordUser,passwordCoincidenceUser);
    passwordSecurityWarning (passwordUser, passwordSpanUser);
    validateInformationWarning ("email", emailUser, url,emailUserSpan, "correo electronico")
    validateInformationWarning ("username", usernameUser, url,usernameUserSpan, "nombre de usuario")
    validateInformationWarning ("phone", phoneUser, url,phoneUserSpan, "número de celular")
    validateInformationWarning ("id", idUser, url,idUserSpan, "número de cedúla")

    
    form.addEventListener("submit", async(event)=>{
        event.preventDefault();
        const checkPasswordUser = validatePasswords (passwordUser,verifyPasswordUser);
        const checkPasswordSecurityUser = passwordSecurity (passwordUser);
        const checkEmailUser = await validateInformation ("email", emailUser, url)
        const checkUsernameUser = await validateInformation ("username", usernameUser, url)
        const checkephoneUser = await validateInformation ("phone", phoneUser, url)
        const checkIdUser = await validateInformation ("id", idUser, url)

        // If the passwords match and if the email, username, phone, id and password meet the security standards, the user is added.
        if(checkPasswordUser && checkPasswordSecurityUser && checkEmailUser && checkUsernameUser && checkephoneUser && checkIdUser){
            const encryptedPasswordUser = encPass(passwordUser)
            createUser (nameUser, lastNameUser, emailUser, usernameUser, encryptedPasswordUser, phoneUser, addressUser, neighborhoodUser, idUser,profilePictureUser, url)
            form.reset()
            //return the original button styles
            idDocumentUserButton.className = "userFile-button"

            const section = document.querySelector("form-section");

            successAlert("El usuario se agrego exitosamente")
            window.location.hash = "#/servicios"
            
        }else{
            failure("No se pudo registrar, revisa nuevamente los datos")
        }
    })
}