import React from "react";
import styles from "./Services.module.css";
import ServicesCard from "./ServicesCard";

const Services = ({ moreVisible, setMoreVisible, setHead, setContent }) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["blue-head"]}>Our Services</div>
      <div className={styles["black-head"]}>
        Services Built Specifically For You
      </div>
      <div className={styles["card-container-one"]}>
        <ServicesCard
          code={"pi pi-code"}
          head={"Educational Board Selection"}
          para={
            "We provide comprehensive information and guidance to help students select the right educational board for school."
          }
          readMore={
            "We provide comprehensive information and guidance to help students select the right educational board for school. We delve into the curriculum, assessment methods, and advantages of different boards, empowering students to make informed choices."
          }
          moreVisible={moreVisible}
          setMoreVisible={setMoreVisible}
          setHead={setHead}
          setContent={setContent}
        />
        <ServicesCard
          code={"pi pi-file-o"}
          head={"College Degree Program Assistance"}
          para={
            "Our experts assist college-bound students in exploring various degree programs across disciplines."
          }
          readMore={
            "Our experts assist college-bound students in exploring various degree programs across disciplines. We offer guidance on program requirements, career prospects, and growth opportunities, helping students make informed decisions about their college education."
          }
          moreVisible={moreVisible}
          setMoreVisible={setMoreVisible}
          setHead={setHead}
          setContent={setContent}
        />
        <ServicesCard
          code={"pi pi-directions"}
          head={"Personalized Advice and Counseling"}
          para={
            "We provide one-on-one sessions with our experienced education consultants who offer personalized advice and counseling."
          }
          readMore={
            "We provide one-on-one sessions with our experienced education consultants who offer personalized advice and counseling. We take into account students' individual aspirations, strengths, and preferences to guide them towards the right educational path."
          }
          moreVisible={moreVisible}
          setMoreVisible={setMoreVisible}
          setHead={setHead}
          setContent={setContent}
        />
      </div>

      <div className={styles["card-container-two"]}>
        <ServicesCard
          code={"pi pi-user-edit"}
          head={"Access to Educational Resources"}
          para={
            "Our platform offers a curated collection of educational resources, including articles, guides, and tools."
          }
          readMore={
            "Our platform offers a curated collection of educational resources, including articles, guides, and tools. These resources cover a wide range of topics related to educational boards, degree programs, scholarships, and career paths, providing students with valuable insights and information."
          }
          moreVisible={moreVisible}
          setMoreVisible={setMoreVisible}
          setHead={setHead}
          setContent={setContent}
        />
        <ServicesCard
          code={"pi pi-search-plus"}
          head={"Scholarship Assistance"}
          para={
            "We assist students in finding relevant scholarships and grants to support their educational journey."
          }
          readMore={
            "We assist students in finding relevant scholarships and grants to support their educational journey. Our team provides guidance on eligibility criteria, application processes, and tips for maximizing scholarship opportunities."
          }
          moreVisible={moreVisible}
          setMoreVisible={setMoreVisible}
          setHead={setHead}
          setContent={setContent}
        />
        <ServicesCard
          code={"pi pi-desktop"}
          head={"Career Guidance"}
          para={
            "We offer career guidance support to help students make informed decisions about their future career paths."
          }
          readMore={
            "We offer career guidance support to help students make informed decisions about their future career paths. This includes resume building, interview preparation, and exploring potential career opportunities based on their educational choices."
          }
          moreVisible={moreVisible}
          setMoreVisible={setMoreVisible}
          setHead={setHead}
          setContent={setContent}
        />
      </div>
    </div>
  );
};

export default Services;
