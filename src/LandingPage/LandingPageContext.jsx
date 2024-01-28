import { createContext, useState } from "react";

const LandingPageContext = createContext();
function LandingPageProvider({ children }) {
  const [bedroom, setBedroom] = useState("Bedroom");
  const [bathroom, setBathroom] = useState("Bathroom");
  const [cleaningType, setCleaningType] = useState("Standard");
  const [asideActive, setAsideActive] = useState(false);
  return (
    <LandingPageContext.Provider
      value={{
        bedroom,
        bathroom,
        cleaningType,
        setBedroom,
        setBathroom,
        setCleaningType,
        asideActive,
        setAsideActive,
      }}
    >
      {children}
    </LandingPageContext.Provider>
  );
}

export { LandingPageProvider, LandingPageContext };
