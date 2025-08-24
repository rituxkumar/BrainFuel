import { createRoot } from "react-dom/client";
import "./index.css";
// import './style.css'
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "../context/AppContext.jsx";
import { Toaster } from "react-hot-toast";
import React from "react";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppProvider>
      <Toaster />
      <App />
    </AppProvider>
  </BrowserRouter>
);
