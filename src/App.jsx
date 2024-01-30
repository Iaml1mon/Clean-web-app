import { useContext, useState } from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Navigate,
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
import { BookingStepsContext } from "./BookingSteps/BookingStepsContext";

const ErrorPage = () => {
  return <LandingPage />;
};

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LandingPage />,
//   },
//   {
//     path: "/details",
//     element: <MainInterface />,
//     errorElement: <ErrorPage />,
//     children: {
//       path: "/requirement",
//       element: <Requirement />,
//     },
//     {
//       path: '/date' ,

//     }
//   },
// ]);

function App() {
  const { state, dispatch } = useContext(BookingStepsContext);
  return (
    <div id="appContainer">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/details" element={<MainInterface />}>
            <Route
              path="requirements"
              element={<Requirement />}
              errorElement={<ErrorPage />}
            />
            <Route
              path="date"
              element={<DateBooking />}
              errorElement={<ErrorPage />}
            />
            <Route
              path="timing"
              element={<Timing />}
              errorElement={<ErrorPage />}
            />
            <Route
              path="frequency"
              element={<Frequency />}
              errorElement={<ErrorPage />}
            />
            <Route
              path="payment-billing"
              element={<PaymentBilling />}
              errorElement={<ErrorPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/details" element={<MainInterface />}>
            <Route
              path="requirements"
              element={<Requirement />}
              errorElement={<ErrorPage />}
            />
            <Route
              path="date"
              element={
                !state.bedrooms || !state.bathrooms || !state.cleaningType ? (
                  <Navigate to="/details/requirements" />
                ) : (
                  <DateBooking />
                )
              }
              errorElement={<ErrorPage />}
            />
            <Route
              path="timing"
              element={
                !state.bedrooms || !state.bathrooms || !state.cleaningType ? (
                  <Navigate to="/details/requirements" />
                ) : (
                  <Timing />
                )
              }
              errorElement={<ErrorPage />}
            />
            <Route
              path="frequency"
              element={
                !state.bedrooms || !state.bathrooms || !state.cleaningType ? (
                  <Navigate to="/details/requirements" />
                ) : (
                  <Frequency />
                )
              }
              errorElement={<ErrorPage />}
            />
            <Route
              path="payment-billing"
              element={
                !state.bedrooms || !state.bathrooms || !state.cleaningType ? (
                  <Navigate to="/details/requirements" />
                ) : (
                  <PaymentBilling />
                )
              }
              errorElement={<ErrorPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// function MainInterfacce() {
//   return <Navigate to="/details/requirements" />;
// }

// function App() {
//   return (
//     <div id="appContainer">
// <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<LandingPage />} />
//     <Route path="/details/" element={<MainInterfacce />}>
//       <Route path="/details/requirements" element={<Requirement />} />
//       <Route path="/details/date" element={<DateBooking />} />
//       <Route path="/details/timing" element={<Timing />} />
//       <Route path="/details/frequency" element={<Frequency />} />
//       <Route
//         path="/details/payment-billing"
//         element={<PaymentBilling />}
//       />
//     </Route>
//   </Routes>
// </BrowserRouter>
//     </div>
//   );
// }

export default App;
