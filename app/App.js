import { Router } from "./Router";
import { Footer } from "./components/Footer/footer";
import { Main } from "./components/MainComponent";

export const App = () => {
    const divRoot = document.querySelector("#root");
    
    divRoot.append(Main())
    divRoot.append(Footer())

    Router()
}
