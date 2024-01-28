import { useState } from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
  useLocation,
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./App.css";
import LandingPage from "./LandingPage/LandingPage";
import { LandingPageProvider } from "./LandingPage/LandingPageContext";
import MainInterface from "./BookingSteps/MainInterface";
import Requirement from "./BookingSteps/Requirement";
import DateBooking from "./BookingSteps/DateBooking";
import Timing from "./BookingSteps/Timing";
import Frequency from "./BookingSteps/Frequency";
import PaymentBilling from "./BookingSteps/PaymentBilling";

function App() {
  return (
    <div id="appContainer">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/details/" element={<MainInterface />}>
            <Route path="/details/requirements" element={<Requirement />} />
            <Route path="/details/date" element={<DateBooking />} />
            <Route path="/details/timing" element={<Timing />} />
            <Route path="/details/frequency" element={<Frequency />} />
            <Route
              path="/details/payment-billing"
              element={<PaymentBilling />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
