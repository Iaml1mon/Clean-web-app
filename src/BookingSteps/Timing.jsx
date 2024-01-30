import { Link, useNavigate } from "react-router-dom";
import styles from "./Timing.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useRef, useState } from "react";
import { BookingStepsContext } from "./BookingStepsContext";
import { House } from "@mui/icons-material";

function DaysSlider() {
  const { state, dispatch } = useContext(BookingStepsContext);
  const dateGetter = new Date();
  const dateSpliter = state.date.split(" ").at(3);
  return (
    <div className={styles.daysSlider}>
      <button>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className={styles.container}>{state.date}</div>
      <button>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

const Handle = (e, state, dispatch) => {
  const flexibleHours = [...e.target.closest("div").parentElement.children].at(
    0
  );
  const fixedHours = [...e.target.closest("div").parentElement.children].slice(
    1
  );
  const targetText = e.target.closest("div").textContent.split(" ");
  targetText.includes("am") || targetText.includes("pm")
    ? ((flexibleHours.style.borderColor = "#d3d8dd"),
      dispatch({ type: "setTime", payload: targetText.at(0) }))
    : ((flexibleHours.style.borderColor = "#1a78f2"),
      dispatch({ type: "setTime", payload: "Flexible" }),
      fixedHours.forEach((a) => (a.style.borderColor = "#d3d8dd")));
  console.log(state.timing);
};

function FlexibleHours() {
  const { state, dispatch } = useContext(BookingStepsContext);
  const [activeBtn, setActiveBtn] = useState(false);
  return (
    <div
      className={styles.flexibleHours}
      onClick={(e) => {
        Handle(e, state, dispatch);
      }}
      style={
        state.timing === "Flexible"
          ? { borderColor: "#1a78f2", color: "#1a78f2" }
          : {}
      }
    >
      <p style={activeBtn ? { color: "#1a78f2" } : {}}>Flexible</p>
      <span style={activeBtn ? { color: "#1a78f2" } : {}}>Save $8.10 off</span>
      <span style={activeBtn ? { color: "#1a78f2" } : {}}>
        Cleaner will arrive between 9am-4pm
      </span>
    </div>
  );
}

function FixedHoursDivs({ value, index, hours, setHours, isChosen }) {
  const { state, dispatch } = useContext(BookingStepsContext);
  return (
    <div
      style={
        isChosen
          ? { borderColor: "#1a78f2", color: "#1a78f2" }
          : { borderColor: "#d3d8dd", color: "#000" }
      }
      key={index * Math.random() * 100}
      className={styles.fixedHours}
      onClick={(e) => {
        Handle(e, state, dispatch);
      }}
    >
      <span>{`${value} ${index <= 3 ? "am" : "pm"}`}</span>
    </div>
  );
}

function FixedHours() {
  const { state, dispatch } = useContext(BookingStepsContext);
  const [hours, setHours] = useState([
    {
      hour: "08:00",
      isChosen: false,
    },
    {
      hour: "09:00",
      isChosen: false,
    },
    {
      hour: "10:00",
      isChosen: false,
    },
    {
      hour: "11:00",
      isChosen: false,
    },
    {
      hour: "12:00",
      isChosen: false,
    },

    {
      hour: "13:00",
      isChosen: false,
    },
    {
      hour: "14:00",
      isChosen: false,
    },

    {
      hour: "15:00",
      isChosen: false,
    },
  ]);

  return (
    <>
      {hours.map((value, index) => (
        <FixedHoursDivs
          key={index}
          value={value.hour}
          index={index}
          hours={hours}
          setHours={setHours}
          isChosen={state.timing === value.hour ? true : value.isChosen}
        />
      ))}
    </>
  );
}

function HoursSlider() {
  const timing = document.getElementById("hoursSlider");
  console.log(timing);
  return (
    <div className={styles.hoursSlider} id="hoursSlider">
      <FlexibleHours />
      <FixedHours />
    </div>
  );
}

function Timing() {
  const { state, dispatch } = useContext(BookingStepsContext);
  return (
    <div className={styles.timing}>
      <h2>Book Timing</h2>
      <span>Save even more by booking off-peak dates and times.</span>
      <div className={styles.timingContainer} id="timingContainer">
        <HoursSlider />
      </div>
      {state.timing && (
        <button className={styles.nextButton}>
          <Link to="/details/frequency">Next</Link>
        </button>
      )}
    </div>
  );
}

export default Timing;
