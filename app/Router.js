import { AboutUs } from "./components/AboutUs/AboutUs";
import { serviceCards } from "./components/Card/Card";
import { FormUser } from "./components/FormUser/FormUser";
import { FormWorker } from "./components/FormWorker/FormWorker";
import { globalMain } from "./components/Home/Home";
import { addUser, addWorker } from "./js/formFunctions";

// Path file, according to the path each component is rendered.

export const Router = () => {
  let { hash } = location;
  let main = document.querySelector("main");

  main.innerHTML = " ";

  if (hash == "" || hash == "#/") {
    main.append(globalMain());
  } else if (hash == "#/quienes-somos") {
    main.append(AboutUs());
  }  else if (hash == "#/servicios") {
    main.append(serviceCards());
  } else if (hash == "#/registro") {
    main.append(FormUser());
    addUser();

  } else if (hash == "#/trabajo-con-nosotros") {
    main.append(FormWorker());
    addWorker();
  } else if(hash == "#/trabajo") {
    main.append(workDetailView());
  }
};
