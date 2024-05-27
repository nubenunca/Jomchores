//Password encryption library imported
import CryptoJS from 'crypto-js';
import { FormWorker } from '../components/FormWorker/FormWorker';

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
        const response = await fetch (`${url}?${key}=${inputInformation.value}`);
        const data = await response.json();

        if(data.length === 0){
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
    const response = await fetch (`${url}?${key}=${inputInformation.value}`);
    const data = await response.json();

    if(data.length === 0){
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

//Password encryption function
export function encPass(password){
    let encrypted = CryptoJS.AES.encrypt(password.value,password.value).toString();
    return encrypted;
}