import { useContext, useState } from "react";
import styles from "./FourthScreen.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { LandingPageContext } from "./LandingPageContext";
import { Link } from "react-router-dom";

function BookingItem({ name, choice01, choice02, choice03, setState, plural }) {
  const [activeChoices, setActiveChoices] = useState(false);
  const choicesOpener = function (e) {
    e.preventDefault();
    const choicesDiv = [...e.target.closest("div").children].at(1);
    setActiveChoices(!activeChoices);
    console.log(e.target.children);
  };

  const spanClicker = function (e) {
    e.preventDefault();
    setState(
      `${e.target.textContent} ${
        plural != "" ? (+e.target.id > 1 ? `${plural}s` : plural) : plural
      }`
    );
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

function FourthScreen() {
  const {
    bedroom,
    setBedroom,
    bathroom,
    setBathroom,
    cleaningType,
    setCleaningType,
  } = useContext(LandingPageContext);
  return (
    <section className={styles.fourthScreenSection}>
      <div className={styles.bookingBar}>
        <BookingItem
          name={bedroom}
          choice01="One"
          choice02="Two"
          choice03="Three"
          setState={setBedroom}
          plural="bedroom"
        />
        <BookingItem
          name={bathroom}
          choice01="One"
          choice02="Two"
          choice03="Three"
          setState={setBathroom}
          plural="bathroom"
        />
        <BookingItem
          name={cleaningType}
          choice01="Standard"
          choice02="Deep cleaning"
          choice03="Move-in/out"
          setState={setCleaningType}
          plural=""
        />
        <Link to="/details/requirements">Book From $80</Link>
      </div>
    </section>
  );
}

export default FourthScreen;
