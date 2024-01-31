import styles from "./MainInterface.module.css";
import {
  createBrowserRouter,
  Link,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Requirement from "./Requirement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faBed,
  faBath,
  faBroom,
  faCalendarDays,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import {
  BookingStepsContext,
  BookingStepsProvider,
} from "./BookingStepsContext";

function BookingDetailsComponent({ title, icon, chosen, path }) {
  // const [state, setState] = useState(initialState);
  return (
    <div className={styles.bookingDetailsComponent}>
      <span>
        <FontAwesomeIcon
          icon={icon}
          style={{ fontSize: "1.4rem", color: "gray" }}
        />
      </span>
      <p>{chosen}</p>
      <p>{title}</p>
    </div>
  );
}

function BookingDetailsComponentTotalPrice() {
  return (
    <div className={styles.totalPrice}>
      <p>610</p>
      <span>Sub Total</span>
    </div>
  );
}

function Header() {
  const { state, dispatch } = useContext(BookingStepsContext);
  return (
    <div className={styles.header} to="/">
      <button>
        <Link to="/">
          <FontAwesomeIcon icon={faXmark} style={{ fontSize: "1.6rem" }} />
        </Link>
      </button>
      <div className={styles.bookingDetails}>
        {/* <div className={styles.upper}> */}
        <BookingDetailsComponent
          title="BEDROOMS"
          icon={faBed}
          chosen={state.bedrooms}
          path="/details/requirements"
        />
        <BookingDetailsComponent
          title="BATHROOMS"
          icon={faBath}
          chosen={state.bathrooms}
          path="/details/requirements"
        />
        <BookingDetailsComponent
          title="CLEANING TYPE"
          icon={faBroom}
          chosen={state.cleaningType}
          path="/details/requirements"
        />
        <BookingDetailsComponent
          title="SCHEDULE DATE"
          icon={faCalendarDays}
          chosen={state.date}
          path="/details/date"
        />
        <BookingDetailsComponent
          title="ADDRESS"
          icon={faLocationDot}
          chosen={state.address}
        />
        <BookingDetailsComponentTotalPrice />
        {/* </div> */}
        <div
          className={styles.progressBar}
          style={{ width: `${state.progressBar}%` }}
        ></div>
      </div>
    </div>
  );
}

function FooterResponsive() {
  return <div></div>;
}

function MainInterface() {
  return (
    <section className={styles.mainInterface}>
      {/* <BookingStepsProvider> */}
      <Header />
      <div className={styles.content}>
        <Outlet />
      </div>
      {/* </BookingStepsProvider> */}
    </section>
  );
}

export default MainInterface;
