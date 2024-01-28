import { Link } from "react-router-dom";
import styles from "./PaymentBilling.module.css";
import { useContext, useState } from "react";
import { BookingStepsContext } from "./BookingStepsContext";
import { CheckBox } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// ---------Here i put divs of the biggest grid-----------------------

function PaymentDetailsContainer() {
  return (
    <div className={styles.paymentDetailsContainer}>
      <CreditCardInformations />
      <FullNameEmailContainer />
      <PhoneNumberContactWaysContainer />
      <PasswordContainer />
    </div>
  );
}

function FullNameEmailContainer() {
  return (
    <div className={styles.fullNameEmailContainer}>
      <PaymentDetailsContainerInput
        title={"FULL NAME *"}
        placeholder={"Enter your full name here"}
        type={"text"}
        warningText={"invalid name"}
      />
      <PaymentDetailsContainerInput
        title={"EMAIL *"}
        placeholder={"exapleemail@gmail.com"}
        type={"email"}
      />
    </div>
  );
}

function ContactWaysButton({ title, isChosen, options, setOptions }) {
  return (
    <button
      onClick={(e) => {
        const seletedBtnText = e.target.textContent;
        const seletedBtn = options.find((a) => a.title === seletedBtnText);
        options.forEach((opt) => (opt.isChosen = false));
        const newOptions = options.map((value, index) =>
          value.title === seletedBtn.title
            ? { ...value, isChosen: true }
            : value
        );
        setOptions(newOptions);
      }}
      style={
        isChosen
          ? {
              borderColor: "#1a78f2",
              color: "#1a78f2",
              transform: "translateY(-0.1rem)",
            }
          : {
              borderColor: "#d3d8dd",
              color: "black",
              transform: "none",
            }
      }
    >
      {title}
    </button>
  );
}

function PhoneNumberContactWaysContainer() {
  return (
    <div className={styles.phoneNumberContactWaysContainer}>
      <PaymentDetailsContainerInput
        title={"Phone Number *"}
        type={"tel"}
        pattern={"[0-9]{3}-[0-9]{3}-[0-9]{4}"}
        placeholder={"06-56-21-58-83"}
        actionType={"setPhoneNumber"}
      />
      <ContactWaysContainer />
    </div>
  );
}

function ContactWaysContainer() {
  const [options, setOptions] = useState([
    { title: "Call", isChosen: false },
    { title: "Text", isChosen: false },
    { title: "Email", isChosen: false },
  ]);
  return (
    <div className={styles.contactWaysContainer}>
      <span>How to contact you </span>
      <div className={styles.container}>
        {options.map((value, index) => (
          <ContactWaysButton
            title={value.title}
            key={index}
            isChosen={value.isChosen}
            options={options}
            setOptions={setOptions}
          />
        ))}
      </div>
    </div>
  );
}

function PasswordContainer() {
  return (
    <div className={styles.passwordContainer}>
      <PaymentDetailsContainerInput
        title={"Password *"}
        placeholder={"Type  your password"}
        type="password"
        warningText={
          "password shoud contain at least  one number and one uppercase letter"
        }
        actionType={"setPassword"}
      />
      <PaymentDetailsContainerInput
        title={"Confirm Password *"}
        placeholder={"Type  your password"}
        type="password"
        warningText="Not matched"
      />
    </div>
  );
}
// -----------------------------------------------------------------------------

function PaymentDetailsContainerInput({
  title,
  placeholder,
  type,
  max,
  actionType,
  warningText,
  pattern,
}) {
  const { state, dispatch } = useContext(BookingStepsContext);
  const [warningSpan, setWarningSpan] = useState(false);
  const [waringMessage, setWarningMessage] = useState(warningText);
  const [onFocus, setOnFocus] = useState(false);
  const [rightInput, setRightInput] = useState(false);
  const [warningColor, setWarningColor] = useState("red");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [eye, setEye] = useState(faEye);
  const [inputPassword, setInputPassword] = useState("password");

  const handleCreditCardNumber = (e) => {
    const inputText = [...e.target.value.replace(/\D/g, "")];
    let formatedText = inputText
      .map((value, index) => {
        if ((value !== 0) & (value !== "-")) {
          if (index === 3 || index === 7 || index === 11 || index === 19)
            return [value, "-"];
          else return value;
        }
      })
      .flat()
      .join("");
    e.target.value = formatedText;
    e.target.value.length === max
      ? (setWarningColor("#1a78f2"),
        setWarningMessage("valid card number"),
        setRightInput(true))
      : (setWarningColor("red"), setRightInput(false));
    dispatch({
      type: actionType,
      payload: formatedText,
    });
    e.target.value.length < max ? setWarningSpan(true) : setWarningSpan(false);
  };

  const handCreditCardExpiry = (e) => {
    const inputText = [...e.target.value.replace(/\D/g, "")];
    let formatedText = inputText
      .map((value, index) => {
        if ((value !== 0) & (value !== "/")) {
          if (index === 1) return [value, "/"];
          else return value;
        }
      })
      .flat()
      .join("");
    let year = Number(
      inputText.length === 6 ? inputText.splice(-4).join("") : ""
    );
    let month = Number(
      inputText.length === 2 ? inputText.slice(0, 2).join("") : ""
    );

    let monthToPrint = month
      ? month >= 13
        ? 12
        : month <= 9
        ? `0${month}`
        : month
      : null;
    let yearToPrint = year
      ? year >= 2030
        ? 2030
        : year <= 2023
        ? 2024
        : year
      : null;
    monthToPrint ? (e.target.value = `${monthToPrint}/`) : null;
    monthToPrint &&
      yearToPrint &&
      (e.target.value = `${monthToPrint}/${yearToPrint}`);
    if (monthToPrint && yearToPrint) {
      setWarningColor("#1a78f2");
      setWarningMessage("valid expiring date");
      setRightInput(true);
    } else {
      setWarningColor("red");
      setWarningMessage("invalid expiring date");
      setRightInput(false);
    }

    dispatch({ type: "setExpDate", payload: formatedText });
  };

  const handleCVV = (e) => {
    const inputText = [...e.target.value.replace(/\D/g, "")];

    // inputText.length >= 3
    //   ? (setRightInput(true),
    //     setWarningColor("#1a78f2"),
    //     setWarningMessage("valid ccv"))
    //   : setRightInput(false),
    //   setWarningColor("red");
    // if(inputText.length <= )
    const formatedText = inputText.join("");
    if (formatedText.length <= 2) {
      setRightInput(false);
      setWarningColor("red");
      setWarningMessage("invalid  cvv");
    } else if (formatedText.length >= 3) {
      setRightInput(true);
      setWarningColor("#1a78f2");
      setWarningMessage("valid ccv");
    }
    e.target.value = formatedText;

    dispatch({ type: actionType, payload: formatedText });
  };

  const handleFullName = (e) => {
    const inputText = [...e.target.value.replace(/[^A-Za-z\s]/g, "")];
    const formatedText = inputText.join("");
    if (formatedText.length <= 2) {
      setRightInput(false);
      setWarningColor("red");
      setWarningMessage("invalid name");
    } else if (formatedText.length >= 3) {
      setRightInput(true);
      setWarningColor("#1a78f2");
      setWarningMessage("valid name");
    }

    e.target.value = formatedText;
  };

  const handleEmail = (e) => {
    const inputText = e.target.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const test = emailPattern.test(inputText);
    if (!test) {
      setRightInput(false);
      setWarningColor("red");
      setWarningMessage("invalid email");
    } else {
      setRightInput(true);
      setWarningColor("#1a78f2");
      setWarningMessage("valid email");
    }
  };

  const handlePhoneNumber = (e) => {
    const inputText = [
      ...e.target.value.replace(/[^\d+]/g, "").replace("+", "00"),
    ];
    e.target.value = inputText.join("");

    inputText.length >= 8
      ? (setWarningColor("#1a78f2"),
        setWarningMessage("valid phone number"),
        setRightInput(true),
        dispatch({ type: actionType, payload: inputText.join("") }))
      : (setWarningColor("red"),
        setWarningMessage("invalid phone number"),
        setRightInput(false),
        dispatch({ type: actionType, payload: "" }));
  };
  const handlePassword = (e) => {
    const inputText = [...e.target.value].join("");
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    const passwordlengh = inputText.length >= 8;

    lowercaseRegex.test(inputText) &&
    uppercaseRegex.test(inputText) &&
    numberRegex.test(inputText) &&
    passwordlengh
      ? (setWarningColor("#1a78f2"),
        setWarningMessage("valid Password"),
        setRightInput(true),
        dispatch({ type: actionType, payload: inputText }))
      : (setWarningColor("red"),
        setWarningMessage(
          "password shoud contain at least  one number and one uppercase letter"
        ),
        setRightInput(false),
        dispatch({ type: actionType, payload: "" }));
  };

  const handleConfirmPassword = (e) => {
    const inputText = [...e.target.value].join("");
    setOnFocus(true);
    inputText === state.password
      ? (setWarningColor("#1a78f2"),
        setWarningMessage("Matched"),
        setRightInput(true))
      : (setWarningColor("red"),
        setWarningMessage("Not matched"),
        setRightInput(false));
  };

  return (
    <div className={`${styles.paymentDetailsContainerInput} ${title}`}>
      <label>{title}</label>
      <input
        type={type === "password" ? inputPassword : `${type}`}
        placeholder={placeholder}
        maxLength={max}
        pattern={pattern}
        onChange={(e) => {
          const inputsLabel = [...e.target.closest("div").children].at(
            0
          ).textContent;

          if (inputsLabel === "Credit Card *") {
            handleCreditCardNumber(e, e.target.value);
          }
          if (inputsLabel === "Exp date *") {
            handCreditCardExpiry(e, e.target.value);
          }
          if (inputsLabel === "CVV *") {
            handleCVV(e);
          }
          if (inputsLabel === "FULL NAME *") {
            handleFullName(e);
          }
          if (inputsLabel === "EMAIL *") {
            handleEmail(e);
          }
          if (inputsLabel === "Phone Number *") {
            handlePhoneNumber(e);
          }
          if (inputsLabel === "Password *") {
            handlePassword(e);
          }
          if (inputsLabel === "Confirm Password *") {
            handleConfirmPassword(e);
          }
          setOnFocus(true);
        }}
        onBlur={() => setOnFocus(false)}
        style={
          onFocus
            ? { borderColor: `${warningColor}` }
            : rightInput
            ? { borderColor: `#1a78f2` }
            : { borderColor: "#d3d8dd" }
        }
      />
      {type === "password" && (
        <button
          className={styles.passwordShow}
          onClick={(e) => {
            if (title === "Password *") {
              setShowPassword(!showPassword);
              showPassword
                ? (setEye(faEyeSlash), setInputPassword("text"))
                : (setEye(faEye), setInputPassword("password"));
            } else {
              setShowConfirmPassword(!showConfirmPassword);
              showConfirmPassword
                ? (setEye(faEyeSlash), setInputPassword("text"))
                : (setEye(faEye), setInputPassword("password"));
            }
          }}
        >
          <FontAwesomeIcon icon={eye} style={{ color: "#2b3641" }} />
        </button>
      )}
      {onFocus && (
        <span style={{ color: `${warningColor}` }}>{waringMessage}</span>
      )}
    </div>
  );
}

function CreditCardInformations() {
  return (
    <div className={styles.creditCardInformations}>
      <PaymentDetailsContainerInput
        title={"Credit Card *"}
        placeholder={"xxxx-xxxx-xxxx-xxxx"}
        type={"text"}
        actionType={"setCreditCardNumber"}
        max={19}
        warningText={"invalid card number"}
      />
      <PaymentDetailsContainerInput
        title={"Exp date *"}
        placeholder={"MM/YYYY"}
        type={"text"}
        actionType={"setExpDate"}
        max={7}
        warningText={"invalid expiry date"}
      />
      <PaymentDetailsContainerInput
        title={"CVV *"}
        placeholder={""}
        type={"text"}
        actionType={"setCVV"}
        max={4}
        warningText={"invalid CVV number"}
      />
    </div>
  );
}

function PaymentDetails() {
  return (
    <div className={styles.paymentDetails}>
      <h2>Payment Details</h2>
      <span>Add in your payment details through our secure gateway</span>
      <PaymentDetailsContainer />
    </div>
  );
}
// _________________Biling Details________________________
function BillingDetails() {
  const { state, dispatch } = useContext(BookingStepsContext);

  return (
    <div className={styles.billingDetails}>
      <h2>Billing</h2>
      <BillingDetailsContainer />
    </div>
  );
}

function BillingDetailsContainer() {
  return (
    <div className={styles.billingDetailsContainer}>
      <GeneralInformationsContainer />
      <DiscountContainer />
      <TotalPriceContainer />
      <button>Place a booking</button>
    </div>
  );
}

function GeneralInformationsContainer() {
  const { state, dispatch } = useContext(BookingStepsContext);
  const bedroomsTemplate = `${state.bedrooms} ${
    state.bedrooms !== "Studio"
      ? Number(state.bedrooms) > 1
        ? "beds"
        : "bed"
      : ""
  }`;

  const bathroomsTemplate = `${state.bathrooms} ${
    Number(state.bathrooms) > 1 ? "baths" : "bath"
  }`;

  const timingTemplate = ` ${state.timing} ${
    state.timing !== "Flexible" &&
    (Number([...state.timing].slice(0, 2).join("")) < 12 ? "am" : "pm")
  }`;

  const address = [...state.apartmentNumber, " , ", ...state.address]
    .slice(0, 45)
    .join("");

  const Keys =
    state.howToGetIn === "Others"
      ? `${state.howToGetInOthers}`
      : state.howToGetIn;

  const addressTemplate = address.length > 45 ? `${address}...` : address;
  console.log(addressTemplate);
  return (
    <div className={styles.generalInformationsContainer}>
      <>
        <p>{bedroomsTemplate}</p>
        <p>{bathroomsTemplate}</p>
        <p>{state.cleaningType}</p>
        <p>
          {state.frequency} <span>{`${state.date} at ${timingTemplate}`}</span>
        </p>

        <p>{addressTemplate}</p>
        <p>{`keys : ${Keys}`}</p>
      </>
    </div>
  );
}

function DiscountContainer() {
  return (
    <div className={styles.discountContainer}>
      <input placeholder="Discount" />
      <button>Apply</button>
    </div>
  );
}

function TotalPriceContainer() {
  const { state, dispatch } = useContext(BookingStepsContext);
  return (
    <div className={styles.totalPriceContainer}>
      <p>
        {/* Appointment value : <span>$ {state.totalPrice}</span> */}
        Appointment value : <span>$ 340</span>
      </p>

      <p>
        {/* discounts : <span>- $ {state.discounts}</span> */}
        discounts : <span>- $ 100</span>
      </p>
      <p>
        Subtotal : <span>$ 110</span>
      </p>
      <p>
        discounts : <span>$ 10</span>
      </p>
      <p>
        Total : <span>$ 400</span>
      </p>
    </div>
  );
}

// __________________________________________________________

function PaymentBilling() {
  return (
    <div className={styles.paymentBilling}>
      <PaymentDetails />
      <BillingDetails />
    </div>
  );
}

function PlaceOrderButton() {
  return (
    <button className={styles.placeOrder}>
      <Link to="/details/date">Place an order</Link>
    </button>
  );
}

export default PaymentBilling;
