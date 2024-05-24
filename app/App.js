import { Router } from "./Router";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/footer";
import { Main } from "./components/MainComponent";
import { WorkerDetailView } from "./components/WorkerDetailView/WorkerDetailView";

export const App = () => {
  const divRoot = document.querySelector("#root");

  divRoot.append(Header());
  divRoot.append(Main());
  divRoot.append(WorkerDetailView());
  divRoot.append(Footer());
  Router();
};
