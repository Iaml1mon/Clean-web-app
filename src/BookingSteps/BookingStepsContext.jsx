import { Action } from "@remix-run/router";
import { createContext, useContext, useReducer, useState } from "react";

const BookingStepsContext = createContext();
const today = new Date().toDateString().split(" ");
function BookingStepsProvider({ children }) {
  const initialState = {
    bedrooms: "",
    bathrooms: "",
    cleaningType: "",
    date: "",
    formalDate: "",
    timing: "",
    frequency: "",
    percentageOff: "",
    address: "",
    apartmentNumber: "",
    howToGetIn: "",
    howToGetInOthers: "",
    pets: "",
    mainInfromationAbouPets: "",
    additionalAboutPets: "",
    creditCardNumber: "",
    expDate: "",
    cvv: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    howToContactYou: "",
    password: "",
    totalPrice: "",
    discounts: "",
    progressBar: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "setBedrooms":
        return {
          ...state,
          bedrooms: action.payload,
          // progressBar: state.progressBar + 9,
        };
      case "setBathrooms":
        return {
          ...state,
          bathrooms: action.payload,
          // progressBar: state.progressBar + 10,
        };
      case "setCleaningType":
        return {
          ...state,
          cleaningType: action.payload,
          // progressBar: state.progressBar + 29,
        };
      case "setDate":
        return {
          ...state,
          date: action.payload,
          // progressBar: state.progressBar + 25,
        };
      case "setFormalDate":
        return { ...state, formalDate: action.payload };
      case "setTime":
        return { ...state, timing: action.payload };
      case "setFrequency":
        return { ...state, frequency: action.payload };
      case "setPercentage":
        return { ...state, percentageOff: action.payload };
      case "setAddress":
        return {
          ...state,
          address: action.payload,
        };
      case "setApartementNumber":
        return {
          ...state,
          apartmentNumber: action.payload,
        };
      case "setHowToGetIn":
        return { ...state, howToGetIn: action.payload };
      case "setHowToGetInOthers":
        return { ...state, howToGetInOthers: action.payload };
      case "setPets":
        return { ...state, pets: action.payload };
      case "setMainInformationAboutPets":
        return { ...state, mainInfromationAbouPets: action.payload };
      case "setAdditionalAboutPets":
        return { ...state, additionalAboutPets: action.payload };
      case "setProgress":
        return { ...state, progressBar: action.payload };
      case "setCreditCardNumber":
        return { ...state, creditCardNumber: action.payload };
      case "setExpDate":
        return { ...state, expDate: action.payload };
      case "setCVV":
        return { ...state, cvv: action.payload };
      case "setFullName":
        return { ...state, fullName: action.payload };
      case "setEmail":
        return { ...state, email: action.payload };
      case "setPhoneNumber":
        return { ...state, phoneNumber: action.payload };
      case "setHowToContactYou":
        return { ...state, howToContactYou: action.payload };
      case "setPassword":
        return { ...state, password: action.payload };
    }

    //     fullName: "",
    // email: "",
    // phoneNumber: "",
    // howToContactYou: "",
    // password: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BookingStepsContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingStepsContext.Provider>
  );
}

export const useBookingSteps = () => {
  const context = useContext(BookingStepsContext);
  if (!context) throw new Error("no context");
  return context;
};

export { BookingStepsContext, BookingStepsProvider };
