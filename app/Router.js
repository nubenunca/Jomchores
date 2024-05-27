import { FormUser } from "./components/FormUser/FormUser";
import { FormWorker } from "./components/FormWorker/FormWorker";
import { globalMain } from "./components/Home/Home";
import { addWorker } from "./js/formFunctions";


// Path file, according to the path each component is rendered.

export const Router = () => {
  let { hash } = location;
  let main = document.querySelector("main");
  const urlWorkers = "http://localhost:3000/wokers";
  const urlUsers = "http://localhost:3000/users";

  main.innerHTML = " ";

  if (hash == "" || hash == "#/") {
    main.append(FormWorker());
    addWorker()


  } else if (hash == "#/vista-aliado") {
    main.append(workDetailView);
  }else if (hash == "#/home") {
    main.append(globalMain());
  }
  else if (hash == "#/registro"){
    main.append(FormUser())

    // The values of the users form inputs are obtained
    const form = document.querySelector(".user-form");
    const nameUser = document.querySelector("#name-user");
    const lastNameUser = document.querySelector("#lastName-user");
    const emailUser = document.querySelector("#email-user");
    const usernameUser = document.querySelector("#userName-user");
    const passwordUser = document.querySelector("#password-user");
    const verifyPasswordUser = document.querySelector("#verifyPassword-user");
    const phoneUser = document.querySelector("#phone-user");
    const addressUser = document.querySelector("#address-user");
    const neighborhoodUser = document.querySelector("#neighborhood-user");
    const idUser = document.querySelector("#id-user");
    const profilePictureUser = document.querySelector("#profilePicture-user")

    //An event listener is added to send data to the database. 
    form.addEventListener("submit", (event) =>{
      event.preventDefault();
      createUser (nameUser, lastNameUser,emailUser,usernameUser,passwordUser,phoneUser,addressUser,neighborhoodUser,idUser,profilePictureUser,urlUsers);
  })

  }
  
};
