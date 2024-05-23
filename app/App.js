import { Router } from "./Router";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/footer";
import { Main } from "./components/MainComponent";

export const App = () => {
    const divRoot = document.querySelector("#root");
    

    divRoot.append(Header())
    divRoot.append(Main())
    divRoot.append(Footer())
    Router()
}
