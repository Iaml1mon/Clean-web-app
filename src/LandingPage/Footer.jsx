import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import facebookIcon from "./landingResources/facebook.png";
import twitterIcon from "./landingResources/twitter.png";
import instagramIcon from "./landingResources/instagram.png";
import linkedinIcon from "./landingResources/linkedin.png";
import footerLogo from "./landingResources/footer-logo.png";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.socialMedia}`}>
        <a href="#">
          <img src={facebookIcon} alt="" />
        </a>
        <a href="#">
          <img src={twitterIcon} alt="" />
        </a>
        <a href="#">
          <img src={instagramIcon} alt="" />
        </a>
        <a href="#">
          <img src={linkedinIcon} alt="" />
        </a>
      </div>

      <div className={styles.listsContainer}>
        <ul className={styles.list}>
          <li>Company</li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Career</a>
          </li>
          <li>
            <a href="#">Press</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <ul className={styles.list}>
          <li>Services</li>
          <li>
            <a href="#">Residancial</a>
          </li>
          <li>
            <a href="#">Office Cleaning</a>
          </li>
          <li>
            <a href="#">Commercial Cleaning</a>
          </li>
        </ul>
        <ul className={styles.list}>
          <li>Support</li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">FAQ's</a>
          </li>
        </ul>
      </div>

      <div className={styles.copyrights}>
        <img src={footerLogo} alt="" />
        <div className={`${styles.underLogoSocialMedia}`}>
          <a href="#">
            <img src={facebookIcon} alt="" />
          </a>
          <a href="#">
            <img src={twitterIcon} alt="" />
          </a>
          <a href="#">
            <img src={instagramIcon} alt="" />
          </a>
          <a href="#">
            <img src={linkedinIcon} alt="" />
          </a>
        </div>
        <p>
          © Clean Co 2024, All rights reserved | Implemented by Abdelkhalek
          Djaith
        </p>
        <a href="">. Terms of service . </a>
        <a href="">. Privacy Policy .</a>
      </div>
    </footer>
  );
}

export default Footer;
