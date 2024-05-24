import { FormWorker } from "./components/FormWorker/FormWorker";
import { AboutUs } from "./components/AboutUs/AboutUs";

export const Router = () => {
  let { hash } = location;
  let main = document.querySelector("main");
  main.innerHTML = ` `;

  if (hash == "" || hash == "#/") {
    main.append(FormWorker());
  } else if (hash == "#/vista-aliado") {
    main.append(workDetailView());
  } else if (hash == "#/abaut-us") {
    main.append(AboutUs());
  }
};
