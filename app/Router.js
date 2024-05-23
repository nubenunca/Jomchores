import { Footer } from "./components/Footer/footer";

export const Router = () => {
    let {hash} = location;
    let main = document.querySelector("main");
    main.innerHTML = ` `;

    if(hash == "" || hash == "#/"){
        main.append(Footer())
    }
}