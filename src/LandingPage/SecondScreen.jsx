import styles from "./SecondScreen.module.css";
import featureCard01img from "./landingResources/secondScreen-firstCard.png";
import featureCard02img from "./landingResources/secondScreen-secondCard.png";
import featureCard03img from "./landingResources/secondScreen-thirdCard.png";

function FeatureCard({ image, title, explanation }) {
  return (
    <div className={styles.featureCard}>
      <img src={image} />
      <h4>{title}</h4>
      <p>{explanation}</p>
    </div>
  );
}

function SecondScreen() {
  return (
    <section className={styles.secondScreenSection}>
      <div className={styles.header}>
        <h2>Why Choose Shield ?</h2>
        <p>
          We understand your home is important to you. That’s why we focus on
          the quality of the clean. Our cleaners aren’t contract workers - they
          are full-time employees. They care as much as we do.
        </p>
      </div>
      <div className={styles.featuresContainer}>
        <FeatureCard
          image={featureCard01img}
          title="BOOK"
          explanation="Tell us when and where you want your cleaning."
        />
        <FeatureCard
          image={featureCard02img}
          title="CLEAN"
          explanation="A Professional cleaner comes over and cleans your place."
        />
        <FeatureCard
          image={featureCard03img}
          title="FREEDOM"
          explanation="Enjoy your life and come back to a clean space!."
        />
      </div>
    </section>
  );
}

export default SecondScreen;
