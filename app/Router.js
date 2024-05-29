import { AboutUs } from "./components/AboutUs/AboutUs";
import { serviceCards } from "./components/Card/Card";
import { FormUser } from "./components/FormUser/FormUser";
import { FormWorker } from "./components/FormWorker/FormWorker";
import { globalMain } from "./components/Home/Home";
import { addUser, addWorker } from "./js/formFunctions";
import { WorkerDetailView } from "./components/WorkerDetailView/WorkerDetailView";

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
  } else {
    const url = "https://55nafuq2d0.execute-api.us-east-2.amazonaws.com/desarrollo/workers";
    async function singleCard (){
      const response = await fetch(url);
      const data = await response.json();


      const dataFilter = data.forEach((worker) => {
        if(worker.id == localStorage.getItem("id")){
          main.append(WorkerDetailView(worker))
        }
      })
    }
    singleCard ()
    let id = localStorage.getItem("id")
   
    
  } 
};
