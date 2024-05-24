import { FormWorker } from "./components/FormWorker/FormWorker";

export const Router = () => {
  let { hash } = location;
  let main = document.querySelector("main");
  main.innerHTML = ` `;

  if (hash == "" || hash == "#/") {
    main.append(FormWorker());
  } else if (hash == "#/vista-aliado") {
    main.append(workDetailView);
  }
};
