import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LandingPageProvider } from "./LandingPage/LandingPageContext.jsx";
import { BookingStepsProvider } from "./BookingSteps/BookingStepsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LandingPageProvider>
      <BookingStepsProvider>
        <App />
      </BookingStepsProvider>
    </LandingPageProvider>
  </React.StrictMode>
);
