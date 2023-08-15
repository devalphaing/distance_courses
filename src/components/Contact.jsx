import React from "react";
import styles from "./Contact.module.css";
import one from "../assets/founderOne.jpg";
import two from "../assets/founderTwo.jpg";
import three from "../assets/founderThree.jpg";
import four from "../assets/founderFour.jpg";

const Contact = () => {
  return (
    <div className={styles["outer-container"]}>
      <div className={styles["left-container"]}>
        <div className={styles["talk-text"]}>Talk To Our Experts</div>
        <div className={styles["card-container"]}>
          <span className={styles["support-text"]}>Support</span>

          <div className={styles["contact"]}>
            <i className="pi pi-phone"></i>
            <span className={styles["call"]}>Call Us :</span>
            <span className={styles["blue-info"]}>9191919191</span>
          </div>

          <div className={styles["contact"]}>
            <i className="pi pi-google"></i>
            <span className={styles["call"]}>Email :</span>
            <span className={styles["blue-info"]}>xyz@gmail.com</span>
          </div>
        </div>

        <div className={styles["need-answer"]}>Need answers ? Call us!</div>

        <div className={styles["callus"]}>
          Our team of experts are available for you round the clock
        </div>
      </div>
      <div className={styles["right-container"]}>
        <div className={styles["right-upper-img"]}>
          <img src={one} alt="one" className={styles["img-tag"]}></img>
          <img src={two} alt="two" className={styles["img-tag"]}></img>
        </div>

        <div className={styles["right-lower-img"]}>
          <img src={three} alt="three" className={styles["img-tag"]}></img>
          <img src={four} alt="four" className={styles["img-tag"]}></img>
        </div>
      </div>
    </div>
  );
};

export default Contact;
