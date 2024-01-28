import { Link } from "react-router-dom";
import styles from "./Requirement.module.css";
import { useContext, useState } from "react";
import { BookingStepsContext } from "./BookingStepsContext";
import { key } from "localforage";

function Button({ content, index, actionType, options, setOptions, isChosen }) {
  const { state, dispatch } = useContext(BookingStepsContext);
  // const [activeBtn, setActiveBtn] = useState(isChosen);
  return (
    <button
      className={`${styles.button}`}
      key={index}
      id={`${index}`}
      style={
        isChosen
          ? {
              borderColor: "#1a78f2",
              color: "#1a78f2",
              boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }
          : {
              borderColor: "#d3d8dd",
              color: "#4f6071",
              boxShadow: " none",
            }
      }
      onClick={(e) => {
        dispatch({ type: actionType, payload: e.target.textContent });
        options.forEach((obj) => (obj.isChosen = false));
        const chosenButton = options.find(
          (value) => value.buttonName === `${e.target.textContent}`
        );
        chosenButton.isChosen = true;
        setOptions(options);
      }}
    >
      {content}
    </button>
  );
}

function BedroomsNumber() {
  const { state, dispatch } = useContext(BookingStepsContext);
  const [options, setOptions] = useState([
    {
      buttonName: "Studio",
      isChosen: false,
    },
    {
      buttonName: "1",
      isChosen: false,
    },
    {
      buttonName: "2",
      isChosen: false,
    },
    {
      buttonName: "3",
      isChosen: false,
    },
    {
      buttonName: "4",
      isChosen: false,
    },
    {
      buttonName: "5",
      isChosen: false,
    },
    {
      buttonName: "6",
      isChosen: false,
    },
    {
      buttonName: "8",
      isChosen: false,
    },
  ]);

  return (
    <div className={styles.mainDiv}>
      <span>Number Of Bedrooms</span>
      <div className={styles.container}>
        {options.map((value, index) => (
          <Button
            content={value.buttonName}
            key={index}
            actionType="setBedrooms"
            // active={state.bedrooms === value.buttonName ? true : false}
            options={options}
            isChosen={
              `${state.bedrooms}` === value.buttonName ? true : value.isChosen
            }
            setOptions={setOptions}
          />
        ))}
      </div>
    </div>
  );
}

function BathroomsNumber() {
  const { state, dispatch } = useContext(BookingStepsContext);
  const [options, setOptions] = useState([
    {
      buttonName: "1",
      isChosen: false,
    },
    {
      buttonName: "2",
      isChosen: false,
    },
    {
      buttonName: "3",
      isChosen: false,
    },
    {
      buttonName: "4",
      isChosen: false,
    },
    {
      buttonName: "5",
      isChosen: false,
    },
    {
      buttonName: "6",
      isChosen: false,
    },
    {
      buttonName: "7",
      isChosen: false,
    },
    {
      buttonName: "8",
      isChosen: false,
    },
  ]);
  return (
    <div className={styles.mainDiv}>
      <span>Number of Bathrooms</span>
      <div className={styles.container}>
        {options.map((value, index) => (
          <Button
            content={value.buttonName}
            key={index}
            actionType="setBathrooms"
            options={options}
            setOptions={setOptions}
            isChosen={
              `${state.bathrooms}` === value.buttonName ? true : value.isChosen
            }
          />
        ))}
      </div>
    </div>
  );
}

function CleaningType() {
  const { state, dispatch } = useContext(BookingStepsContext);

  const [options, setOptions] = useState([
    {
      buttonName: "Standard",
      isChosen: false,
    },
    {
      buttonName: "Deep Clean",
      isChosen: false,
    },
    {
      buttonName: "Moving In/Out",
      isChosen: false,
    },
    {
      buttonName: "Post-Construction",
      isChosen: false,
    },
  ]);

  return (
    <div className={styles.mainDiv}>
      <span>Cleaning type</span>
      <div className={styles.container}>
        {options.map((value, index) => (
          <Button
            content={value.buttonName}
            key={index}
            actionType="setCleaningType"
            active={state.cleaningType === value.buttonName ? true : false}
            options={options}
            setOptions={setOptions}
            isChosen={
              state.cleaningType === value.buttonName ? true : value.isChosen
            }
          />
        ))}
      </div>
    </div>
  );
}

function Requirement() {
  const { state, dispatch } = useContext(BookingStepsContext);
  const today = new Date().toDateString();
  return (
    <div className={styles.requirement}>
      <h2>Custumize your Requirements</h2>
      <BedroomsNumber />
      <BathroomsNumber />
      <CleaningType />
      {state.bedrooms && state.bathrooms && state.cleaningType && (
        <button className={styles.nextButton}>
          <Link to="/details/date">Next</Link>
        </button>
      )}
    </div>
  );
}

export default Requirement;
