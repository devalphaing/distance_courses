import React from "react";
import styles from "./AboutUs.module.css";
import image from "../assets/founderTwo.jpg";

const AboutUs = () => {
  return (
    <div className={styles["about-container"]}>
      <div className={styles["image-container"]}>
        <img
          src={image}
          alt="img-founder"
          className={styles["image-div"]}
        ></img>
      </div>
      <div className={styles["text-container"]}>
        <div className={styles["blue-head"]}>About Us</div>
        <div className={styles["black-head"]}>
          Founder's Corner: Mission & Vision
        </div>

        <div className={styles["content"]}>
          <p>
            Welcome to DistanceCourseWala.com, your trusted destination for
            discovering the perfect educational boards for school and the ideal
            degree programs for college. With personalized guidance and
            comprehensive resources, we empower you to make informed decisions
            for a successful educational journey. Whether you're exploring
            educational boards or degree programs, our expert team offers
            valuable insights and support to help you find the right path that
            aligns with your aspirations. Trust DistanceCourseWala.com to be
            your partner in unlocking your educational potential and shaping a
            successful future.
          </p>
          {/* <p>
            At DistanceCourseWala.com, we understand the importance of making
            well-informed choices for your academic and career success. With our
            expert guidance and curated resources, we provide detailed
            information on educational boards for school and a wide range of
            degree programs for college. Whether you're a school student looking
            for the right board or a college-bound student exploring degree
            options, we have the tools and expertise to assist you. Discover the
            opportunities that await you with DistanceCourseWala.com and take
            the first step towards a rewarding educational journey.
          </p> */}
        </div>
        <button className={styles['btn']}>More Details</button>
      </div>
    </div>
  );
};

export default AboutUs;
