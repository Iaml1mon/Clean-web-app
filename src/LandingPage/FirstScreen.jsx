import styles from "./FirstScreen.module.css";
// import img from "../assets/";
import firstScreenBackground from "./landingResources/firstScreen-illustration.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons";
import mainLogo from "./landingResources/mainLogo.svg";
import { useContext, useState } from "react";
import { LandingPageContext } from "./LandingPageContext.jsx";
import { Link } from "react-router-dom";
import {
  BookingStepsContext,
  useBookingSteps,
} from "../BookingSteps/BookingStepsContext.jsx";

function Header() {
  const { asideActive, setAsideActive } = useContext(LandingPageContext);
  return (
    <header className={styles.header}>
      <a href="#" className={styles.mainLogo}>
        <img src={mainLogo} alt="" />
      </a>

      <nav>
        <ul className={styles.navLinks}>
          <li className={styles.navLink}>
            <a href="#">Residancial</a>
          </li>
          <li className={styles.navLink}>
            <a href="#">Office</a>
          </li>
          <li className={styles.navLink}>
            <a href="#">Commercial</a>
          </li>
          <li className={styles.navLink}>
            <a href="#">FAQ's</a>
          </li>
          <li className={`${styles.navLink} ${styles.loginButtonLink}`}>
            <a href="#">Login</a>
          </li>
          <li>
            <button
              className={styles.navBars}
              onClick={() => {
                setAsideActive(!asideActive);
              }}
            >
              <FontAwesomeIcon icon={faBars} style={{ fontSize: "1.5rem" }} />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function BookingItem({ name, choice01, choice02, choice03, setState, plural }) {
  const { state, dispatch } = useContext(BookingStepsContext);
  const [activeChoices, setActiveChoices] = useState(false);
  const choicesOpener = function (e) {
    e.preventDefault();
    const choicesDiv = [...e.target.closest("div").children].at(1);
    setActiveChoices(!activeChoices);
    console.log(e.target.children);
  };

  const spanClicker = function (e) {
    e.preventDefault();
    console.log(state);
    const payload =
      e.target.textContent === "One"
        ? 1
        : e.target.textContent === "Two"
        ? 2
        : 3;
    console.log(e.target.textContent);
    dispatch({
      type: plural ? `set${plural}s` : "setCleaningType",
      payload: plural ? payload : e.target.textContent,
    });
    setState(
      `${e.target.textContent} ${
        plural != ""
          ? +e.target.id > 1
            ? `${plural.toLowerCase()}s`
            : plural
          : plural
      }`
    );
    // console.log(plural ? plural : "cleaning type");
    setActiveChoices(false);
  };
  return (
    <div
      className={`${styles.bookingItem} ${name.toLowerCase()}Booking`}
      onMouseLeave={(e) => setActiveChoices(false)}
    >
      <p
        onClick={(e) => {
          choicesOpener(e);
        }}
      >
        <span>{name}</span>
        <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: "0.7rem" }} />
      </p>
      <div
        className={styles.bookingChoices}
        style={
          !activeChoices
            ? { display: "none", transform: "translateY(-1rem)", opacity: "0" }
            : { display: "flex", opacity: "1", transform: "translateY(0)" }
        }
      >
        <span
          onClick={(e) => {
            spanClicker(e);
          }}
          id="1"
        >
          {choice01}
        </span>
        <span
          onClick={(e) => {
            spanClicker(e);
          }}
          id="2"
        >
          {choice02}
        </span>
        <span
          onClick={(e) => {
            spanClicker(e);
          }}
          id="3"
        >
          {choice03}
        </span>
      </div>
    </div>
  );
}

function BookingContainer() {
  const {
    bedroom,
    setBedroom,
    bathroom,
    setBathroom,
    cleaningType,
    setCleaningType,
  } = useContext(LandingPageContext);
  const { state, dispatch } = useContext(BookingStepsContext);
  // const [bedroom, setBedroom] = useState("Bedroom");
  // const [bathroom, setBathroom] = useState("Bathroom");
  // const [cleaningType, setCleaningType] = useState("Standard");
  return (
    <div className={styles.bookingContainer}>
      <h2>
        Your One Stop Cleaning <br /> Centre For All Needs
      </h2>

      <div className={styles.bookingBar}>
        <BookingItem
          name={bedroom}
          choice01="One"
          choice02="Two"
          choice03="Three"
          setState={setBedroom}
          plural="Bedroom"
        />
        <BookingItem
          name={bathroom}
          choice01="One"
          choice02="Two"
          choice03="Three"
          setState={setBathroom}
          plural="Bathroom"
        />
        <BookingItem
          name={cleaningType}
          choice01="Standard"
          choice02="Deep Clean"
          choice03="Moving In/Out"
          setState={setCleaningType}
          plural=""
        />
        <Link to="/details/requirements">Book From $80</Link>
      </div>
    </div>
  );
}

function FirstScreen() {
  return (
    <section className={styles.firstScreenSection}>
      <Header />
      <BookingContainer />
    </section>
  );
}

export default FirstScreen;
