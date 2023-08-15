import React from "react";
import styles from "./ServicesCard.module.css";

const ServicesCard = ({ code, head, para }) => {
  return (
    <div className={styles["container"]}>
      <i className={styles["icon"] + " " + `${code}`}></i>
      <div className={styles["head"]}>{head}</div>
      <div className={styles["para"]}>{para}</div>
      <button className={styles["btn"]}>Read More</button>
    </div>
  );
};

export default ServicesCard;
