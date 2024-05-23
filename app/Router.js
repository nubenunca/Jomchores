import { Footer } from "./components/Footer/footer";
import { FormWorker } from "./components/FormWorker/FormWorker";

export const Router = () => {
    let {hash} = location;
    let main = document.querySelector("main");
    main.innerHTML = ` `;

    if(hash == "" || hash == "#/"){
        main.append(FormWorker());
    }
}