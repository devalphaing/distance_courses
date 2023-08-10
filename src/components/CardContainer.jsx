import React from "react";
import styles from "./CardContainer.module.css";
import { Fragment } from "react";
import image from "../assets/bgImage.png";

const Card = ({ head, para, icon }) => {
  return (
    <Fragment>
      <div className={styles["card-container"]}>
        <div className={styles["card-icon"]}>
          <i className={icon}></i>
        </div>
        <div className={styles["header"]}>{head}</div>
        <div className={styles["para"]}>{para}</div>
      </div>
    </Fragment>
  );
};

const CardContainer = () => {
  return (
    <Fragment>
      <div className={styles["outer-container"]}>
        <div className={styles["right-container"]}>
          <img src={image} alt="tree" className={styles["bg-img"]}></img>
          <div className={styles["text-bg"]}>
            What Makes Us
            <span className={styles["diff-text"]}>&nbsp;Different</span>
          </div>
        </div>

        <div className={styles["left-container"]}>
          <Card
            head={"200 +"}
            para={"Students Trust Us For Unbiased Counselling"}
            icon={"pi pi-users"}
          />
          <div className={styles["card-comp"]}>
            <Card
              head={"Unbiased Experts"}
              para={"Guidance By Our Certified Counselors"}
              icon={"pi pi-home"}
            />
          </div>
          <Card
            head={"Complete Assistance"}
            para={"Till You Complete Your Degree"}
            icon={"pi pi-sync"}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default CardContainer;
