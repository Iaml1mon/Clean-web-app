import { Link, useNavigate } from "react-router-dom";
import styles from "./Frequency.module.css";
import { useContext, useEffect, useState } from "react";
import { BookingStepsContext } from "./BookingStepsContext";

function FrequencyPartDiv({
  title,
  percentageOff,
  options,
  setOptions,
  isChosen,
  animationDelay,
}) {
  const { state, dispatch } = useContext(BookingStepsContext);
  const handleClick = function (e) {
    options.forEach((opt) => (opt.isChosen = false));
    const selectedBtnText = [...e.target.closest("div").children].at(
      0
    ).textContent;
    const selectedBtn = options.find((opt) => opt.title === selectedBtnText);
    console.log(selectedBtn);
    const newOptions = options.map((opt) =>
      opt.title === selectedBtn.title ? { ...opt, isChosen: true } : opt
    );
    dispatch({ type: "setFrequency", payload: selectedBtnText });
    dispatch({ type: "setPercentage", payload: selectedBtn.percentageOff });
    setOptions(newOptions);
    //
  };

  return (
    <div onClick={(e) => handleClick(e)} className={styles.frequencyPartDiv}>
      <button
        style={
          isChosen
            ? {
                color: "#1a78f2",
                borderColor: "#1a78f2",
              }
            : {}
        }
      >
        {title}
      </button>
      <span
        style={isChosen ? { color: "#1a78f2", transform: "scale(1.3)" } : {}}
      >
        {percentageOff > 0 ? `${percentageOff}% Off` : null}
      </span>
    </div>
  );
}

function FrequencyPart() {
  const { state, dispatch } = useContext(BookingStepsContext);
  const [options, setOptions] = useState([
    {
      title: "One time",
      percentageOff: 0,
      isChosen: false,
    },
    {
      title: "Weekly",
      percentageOff: 20,
      isChosen: false,
    },
    {
      title: "Every 2 weeks",
      percentageOff: 15,
      isChosen: false,
    },
    {
      title: "Every 4 weeks",
      percentageOff: 10,
      isChosen: false,
    },
  ]);

  return (
    <div className={styles.frequencyPart}>
      <h2>Select Frequency</h2>
      <span>Book ForShield’s recurring plan and save 20% annually.</span>
      <div className={styles.frequencyPartContainer}>
        <span>Recurring</span>
        <div className={styles.container}>
          {options.map((value, index) => (
            <FrequencyPartDiv
              title={value.title}
              percentageOff={value.percentageOff}
              key={index}
              options={options}
              setOptions={setOptions}
              isChosen={state.frequency === value.title ? true : value.isChosen}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AddressPart() {
  const { state, dispatch } = useContext(BookingStepsContext);

  const handleChange = function (e) {
    if ([...e.target.parentElement.children].at(0).textContent === "Address") {
      dispatch({ type: "setAddress", payload: e.target.value });
    } else {
      dispatch({ type: "setApartementNumber", payload: e.target.value });
    }
  };
  return (
    <div className={styles.addressPart}>
      <h2>Add Your Address & Details</h2>
      <span>Be specific of any additional details we might need from you</span>
      <div className={styles.addressPartContainer}>
        <div className={styles.addressMainInput}>
          <label>Address</label>
          <input
            type="text"
            required
            value={state.address ? state.address : ""}
            placeholder={state.address ? "" : "Enter a location"}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className={styles.addressAptNumber}>
          <label>APT number</label>
          <input
            type="text"
            required
            value={state.apartmentNumber ? state.apartmentNumber : ""}
            // placeholder={state.address ? "" : "Enter a location"}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
    </div>
  );
}

function HowToGetInPartBtn({
  title,
  isChosen,
  options,
  setOptions,
  othersTab,
  setOthersTab,
}) {
  const { state, dispatch } = useContext(BookingStepsContext);
  return (
    <button
      className={styles.howToGetInPartBtn}
      style={
        isChosen
          ? {
              color: "#1a78f2",
              borderColor: "#1a78f2",
              transform: "translateY(-0.2rem)",
            }
          : {}
      }
      onClick={(e) => {
        options.forEach((opt) => (opt.isChosen = false));
        const selectedBtnText = e.target.textContent;
        const selectedBtn = options.find((a) => a.title === selectedBtnText);
        const newOptions = options.map((opt) =>
          opt.title === selectedBtn.title ? { ...opt, isChosen: true } : opt
        );
        setOptions(newOptions);
        dispatch({ type: "setHowToGetIn", payload: selectedBtnText });
        if (selectedBtnText === "Others") {
          setOthersTab(true);
        } else {
          setOthersTab(false);
        }
      }}
    >
      {title}
    </button>
  );
}

function HowToGetInOthersTab() {
  const { state, dispatch } = useContext(BookingStepsContext);
  return (
    <div className={styles.howToGetInOthersTab}>
      <label>Others ways </label>
      <input
        onChange={(e) =>
          dispatch({ type: "setHowToGetInOthers", payload: e.target.value })
        }
        type="text"
        value={state.howToGetInOthers ? state.howToGetInOthers : ""}
        placeholder={
          state.howToGetInOthers
            ? "Enter the other way"
            : state.howToGetInOthers
        }
      />
    </div>
  );
}

function HowToGetInPart() {
  const { state, dispatch } = useContext(BookingStepsContext);
  const [options, setOptions] = useState([
    {
      title: "Someone is Home",
      isChosen: false,
    },
    {
      title: "Doorman",
      isChosen: false,
    },
    {
      title: "Hidden Key",
      isChosen: false,
    },
    {
      title: "Others",
      isChosen: false,
    },
  ]);

  const [othersTab, setOthersTab] = useState(false);

  return (
    <div className={styles.howToGetInPart}>
      <span>HOW DO WE GET IN</span>
      <div className={styles.howToGetInPartContainer}>
        {options.map((value, index) => (
          <HowToGetInPartBtn
            key={index}
            title={value.title}
            options={options}
            setOptions={setOptions}
            isChosen={state.howToGetIn === value.title ? true : value.isChosen}
            setOthersTab={setOthersTab}
            othersTab={othersTab}
          />
        ))}
      </div>
      {state.howToGetIn === "Others" && <HowToGetInOthersTab />}
    </div>
  );
}

function PetsButton({ options, setOptions, setPets, isChosen, children }) {
  const { state, dispatch } = useContext(BookingStepsContext);
  return (
    <button
      style={
        isChosen
          ? {
              color: "#1a78f2",
              borderColor: "#1a78f2",
              transform: "translateY(-0.2rem)",
            }
          : {}
      }
      onClick={(e) => {
        e.target.textContent === "Yes" ? setPets(true) : setPets(false);
        options.forEach((opt) => (opt.isChosen = false));
        const selectedBtn = options.find(
          (a) => a.title === e.target.textContent
        );
        dispatch({ type: "setPets", payload: e.target.textContent });
        e.target.textContent === "No"
          ? (dispatch({
              type: "setMainInformationAboutPets",
              payload: "",
            }),
            dispatch({
              type: "setAdditionalAboutPets",
              payload: "",
            }))
          : null;

        console.log(state);
        const newOptions = options.map((opt) =>
          opt.title === selectedBtn.title ? { ...opt, isChosen: true } : opt
        );

        setOptions(newOptions);
      }}
      className={styles.petsButton}
    >
      {children}
    </button>
  );
}

function PertInputs() {
  const { state, dispatch } = useContext(BookingStepsContext);

  const onChangeHandler = (e) => {
    if (e.target.tagName === "INPUT") {
      dispatch({
        type: "setMainInformationAboutPets",
        payload: e.target.value,
      });
    } else {
      dispatch({
        type: "setAdditionalAboutPets",
        payload: e.target.value,
      });
    }
  };
  return (
    <div className={styles.petsPartInputs}>
      <input
        onChange={(e) => onChangeHandler(e)}
        type="text"
        value={
          state.mainInfromationAbouPets ? state.mainInfromationAbouPets : ""
        }
        placeholder={
          state.mainInfromationAbouPets
            ? ""
            : "What types of pets?  Some of our cleaners have pet allergies."
        }
      />
      <div>
        <label>ADDITIONAL INFORMATIONS</label>
        <textarea
          value={state.additionalAboutPets ? state.additionalAboutPets : ""}
          placeholder={
            state.additionalAboutPets
              ? ""
              : "I would like Sophie to be my cleaner.  Please change my sheets (fresh bedding is on the bed) and empty the dishwasher."
          }
          onChange={(e) => onChangeHandler(e)}
          name=""
          id=""
        />
      </div>
    </div>
  );
}

function PetsPart() {
  const { state, dispatch } = useContext(BookingStepsContext);
  const [pets, setPets] = useState(false);
  const [options, setOptions] = useState([
    {
      title: "Yes",
      isChosen: state.pets === "Yes" ? true : false,
    },
    {
      title: "No",
      isChosen: state.pets === "No" ? true : false,
    },
  ]);
  return (
    <div className={styles.petsPart}>
      <span>ANY PETS ?</span>
      <div className={styles.yesNoPets}>
        {options.map((value, index) => (
          <PetsButton
            options={options}
            setOptions={setOptions}
            setPets={setPets}
            key={index}
            isChosen={state.pets === value.title ? true : value.isChosen}
          >
            {value.title}
          </PetsButton>
        ))}
      </div>
      {state.pets === "Yes" && <PertInputs />}
    </div>
  );
}

function Frequency() {
  const { state, dispatch } = useContext(BookingStepsContext);
  window.addEventListener("load", () => {
    window.scrollTo(0, 0);
  });

  return (
    <div className={styles.frequency}>
      <FrequencyPart />
      <AddressPart />
      <HowToGetInPart />
      <PetsPart />
      {state.frequency &&
        state.address &&
        state.apartmentNumber &&
        state.pets && (
          <button
            className={styles.nextButton}
            onClick={() => console.log(state)}
          >
            <Link to="/details/payment-billing">Next</Link>
          </button>
        )}
    </div>
  );
}

export default Frequency;
