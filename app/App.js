import { Router } from "./Router";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/footer";
import { Main } from "./components/MainComponent";
import { WorkerDetailView } from "./components/WorkerDetailView/WorkerDetailView";
import { AboutUs } from "./components/AboutUs/AboutUs";

export const App = () => {
  const divRoot = document.querySelector("#root");
  divRoot.innerHTML = "";
  divRoot.append(Header());
  divRoot.append(Main());
  divRoot.append(Footer());
  Router();
};
