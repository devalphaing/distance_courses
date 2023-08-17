import React from "react";
import styles from "./ServicesCard.module.css";

const ServicesCard = ({ code, head, para, readMore, moreVisible, setMoreVisible, setHead, setContent }) => {
  const submitHandler = () => {
    setHead(head)
    setContent(readMore)
    setMoreVisible(true)
  };

  return (
    <div className={styles["container"]}>
      <i className={styles["icon"] + " " + `${code}`}></i>
      <div className={styles["head"]}>{head}</div>
      <div className={styles["para"]}>{para}</div>
      <button className={styles["btn"]} onClick={submitHandler}>
        Read More
      </button>
    </div>
  );
};

export default ServicesCard;
