import FirstScreen from "./FirstScreen";
import Footer from "./Footer";
import FourthScreen from "./FourthScreen";
import styles from "./LandingPage.module.css";
import { LandingPageContext, LandingPageProvider } from "./LandingPageContext";
import SecondScreen from "./SecondScreen";
import ThirdScreen from "./ThirdScreen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { BookingStepsProvider } from "../BookingSteps/BookingStepsContext";
function AsideBar() {
  const { asideActive, setAsideActive } = useContext(LandingPageContext);
  return (
    <aside
      className={styles.asideBar}
      style={
        asideActive
          ? { transform: "translateX(0)", opacity: "1" }
          : { transform: "translateX(-100%)", opacity: "0" }
      }
    >
      <FontAwesomeIcon
        icon={faXmark}
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          fontSize: "1.5rem",
          cursor: "pointer",
        }}
        onClick={() => {
          setAsideActive(false);
        }}
      />
      <a href="#">Residential</a>
      <a href="#">Office</a>
      <a href="#">Commercial</a>
      <a href="#">FAQ's</a>
    </aside>
  );
}
function LandingPage() {
  return (
    // <LandingPageProvider>
    //   <BookingStepsProvider>
    <main className={styles.landingPageContent}>
      <AsideBar />
      <FirstScreen />
      <SecondScreen />
      <ThirdScreen />
      <FourthScreen />
      <Footer />
    </main>
    // </BookingStepsProvider>
    // </LandingPageProvider>
  );
}

export default LandingPage;
