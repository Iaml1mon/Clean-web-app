import { Link, Navigate, useNavigate } from "react-router-dom";
import styles from "./DateBooking.module.css";
import { useContext, useEffect, useState } from "react";
import { BookingStepsContext } from "./BookingStepsContext";
import Calendar from "react-calendar";
import "./Calendar.css";
function CalendarComp() {
  const [date, setDate] = useState("");
  return <div>{date}</div>;
}

function DateBooking() {
  const { state, dispatch } = useContext(BookingStepsContext);
  const [selectedDate, setSelectedDate] = useState(
    state.formalDate ? state.formalDate : new Date()
  );
  const today = new Date().getMonth() + 6;
  const maxDate = new Date();
  maxDate.setMonth(new Date().getMonth() + 6);
  const findDate = new Date(state.date);
  const handleDateChange = (date) => {
    setSelectedDate(date);
    const cleaningDay = date.toDateString().split(" ");
    const cleaningDate = `${cleaningDay.at(0)} , ${cleaningDay.at(
      1
    )} ${cleaningDay.at(2)}`;
    dispatch({ type: "setDate", payload: cleaningDate });
    dispatch({ type: "setFormalDate", payload: date });
  };

  return (
    <div className={styles.dateBooking}>
      <h2>Book Date</h2>
      <span>Book a specific date you need your space sparkled</span>
      <div className={styles.calendarContainer}>
        <Calendar
          onChange={handleDateChange}
          value={selectedDate}
          minDate={new Date()}
          maxDate={maxDate}
        />
      </div>
      {/* <CalendarComp /> */}
      {state.date && (
        <button className={styles.nextButton}>
          <Link to="/details/timing">Next</Link>
        </button>
      )}
    </div>
  );
}

export default DateBooking;
