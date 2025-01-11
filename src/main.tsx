import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Home from "./views/Home";
import "./main.css";

createRoot(document.querySelector(".root")!).render(
  <StrictMode>
    <Home />
  </StrictMode>
);
