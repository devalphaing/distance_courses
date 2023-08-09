import React from "react";
import styles from "./CardContainer.module.css";
import { Fragment } from "react";
import image from "../assets/bgImage.png";

const Card = ()=> {
    return(
        <Fragment>
            <div className={styles['card-container']}>
                <div className={styles['header']}>5 Million +</div>
                <div className={styles['para']}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, nostrum</div>
            </div>
        </Fragment>
    )
}

const CardContainer = () => {
  return (
    <Fragment>
      <div className={styles["outer-container"]}>
        <div className={styles["right-container"]}>
          <img src={image} alt="tree" className={styles["bg-img"]}></img>
          <div className={styles["text-bg"]}>
            What Makes Us<span className={styles["diff-text"]}>&nbsp;Different</span>
          </div>
        </div>

        <div className={styles["left-container"]}>
            <Card />
        </div>
      </div>
    </Fragment>
  );
};

export default CardContainer;
