import { FormUser } from "./components/FormUser/FormUser";
import { FormWorker } from "./components/FormWorker/FormWorker";
import { globalMain } from "./components/Home/Home";
import { createUser, createWorker } from "./js/formFunctions";

// Path file, according to the path each component is rendered.

export const Router = () => {
  let { hash } = location;
  let main = document.querySelector("main");
  const urlWorkers = "http://localhost:3000/wokers";
  const urlUsers = "http://localhost:3000/users";

  main.innerHTML = " ";

  if (hash == "" || hash == "#/") {
    main.append(FormWorker());

    // The values of the workers form inputs are obtained
    const form = document.querySelector(".worker-form");
    const nameWorker = document.querySelector("#name-worker");
    const lastNameWorker = document.querySelector("#lastName-worker");
    const emailWorker = document.querySelector("#email-worker");
    const usernameWorker = document.querySelector("#userName-worker");
    const passwordWorker = document.querySelector("#password-worker");
    const verifyPasswordWorker = document.querySelector("#verifyPassword-worker");
    const phoneWorker = document.querySelector("#phone-worker");
    const addressWorker = document.querySelector("#address-worker");
    const neighborhoodWorker = document.querySelector("#neighborhood-worker");
    const idWorker = document.querySelector("#id-worker");
    const categoryWorker = document.querySelector("#category-worker");
    const descriptionWorker = document.querySelector("#description-worker");
    const priceWorker = document.querySelector("#price-worker");
    const profilePictureWorker = document.querySelector("#profilePicture-worker")

    //An event listener is added to send data to the database. 
    form.addEventListener("submit", (event) =>{
      event.preventDefault();
      createWorker (nameWorker, lastNameWorker,emailWorker,usernameWorker,passwordWorker,phoneWorker,addressWorker,neighborhoodWorker,idWorker,categoryWorker,descriptionWorker,priceWorker,profilePictureWorker,urlWorkers);
  })

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
