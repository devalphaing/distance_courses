import React, { Fragment } from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles["outer-container"]}>
      <div className={styles["container"]}>
        <p className={styles["container-p"]}>
          Anticipated to reach 9.6 million, the net count of Indian students
          engaging in online education is set to grow by the close of 2023.
          Despite this substantial figure, the realm of online education in
          India remains largely disorganized, resulting in various challenges
          for students in accessing relevant information. In response, Distance
          Courses endeavors to address the current predicaments faced by
          students. Serving as India's pioneering online platform, Distance
          Courses aggregates all online universities, offering a comprehensive
          single-point interface. Through Distance Courses, students can access
          impartial and comprehensive information about various online courses
          and the respective universities providing them.
        </p>
      </div>

      <div className={styles["container-two-p"]}>
        © 2023 Distance Courses, Inc. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
