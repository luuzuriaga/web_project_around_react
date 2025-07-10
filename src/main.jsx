import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { CurrentUserProvider } from "./contexts/CurrentUserContext.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
  </StrictMode>
);
