import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styles/index.css";
import LandingPage from "./pages/LandingPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>
);
