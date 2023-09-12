import React, { Fragment } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import "./Faq.css";

const Faq = () => {

    const arr = [
        {
            que: "Does NDA accept the passing certificate from BBOSE?",
            ans: "Yes, BBOSE certificates are acceptable by every private and government organization. You can apply for any govt. jobs."
        }, {
            que: "Is BBOSE a registered board in Bihar?",
            ans: "The Bihar Board of Open Schooling and Examination is an autonomous organization of Bihar Education Department. It is a registered government society established under societies act."
        }, {
          que: "Does IIT accept passing certificates from BBOSE?",
          ans: "Yes, IIT and other private and government institute accept the BBOSE passing certificate. With BBOSE certificate, you can take admission in any private or government institute."
        },{
          que: "Is BBOSE is valid everywhere?",
          ans:  "BBOSE is a recognized board in India. Candidate passed class 12th from a recognized board are eligible to appear in any entrance examination"
        }, {
          que: "Can BBOSE students take the CLAT exam?",
          ans: "Yes, the students of Bihar Board of Open Schooling and Examination after clear 12th also take CLAT exam. As per the criteria of the CLAT exam, candidates should have passed Higher Secondary School/Intermediate Examination (10+2) or its equivalent examination with minimum 50% marks in aggregate (45% in case of SC/ST/OBC and persons with Disability)."
        },{
          que: "Does NIOS allow any fees concession?",
          ans: "Fee concession is provided to female and SC/ST/Ex-Servicemen and the differently abled candidates as per NIOS norms."
    
        },{
          que: "What is the procedure for taking admission in NIOS?",
          ans: "NIOS has introduced 100% Online admission at the Secondary and the Senior Secondary level in order to facilitate learners to register."
        },{
          que: "What is Open and Distance Learning system?",
          ans: "Open and Distance learning (ODL) is an innovative approach of providing opportunity of learning through Self Learning Material (SLM) and certain other strategies in a flexible manner at the pace of learners. In this mode, the learner is also provided academic support in the form of PCP and TMA in addition to SLM"
        },{
          que: "Can a learner choose any subject combination?",
          ans: "A learner can choose subjects of his/her choice from the list provided at NIOS website and prospectus keeping in view the passing criteria and Certification criteria, as also the requirement of other Boards/University for further education."
        }

    ]

  return (
    // <Fragment>
    //   <div className="faq-container">
    //     <div className="card">
    //       <Accordion activeIndex={0}>
    //         <AccordionTab header={arr[0].que}>
    //           <p className="m-0">
    //             {arr[0].ans}
    //           </p>
    //         </AccordionTab>
    //         <AccordionTab header="Header II">
    //           <p className="m-0">
    //             Sed ut perspiciatis unde omnis iste natus error sit voluptatem
    //             accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
    //             quae ab illo inventore veritatis et quasi architecto beatae
    //             vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
    //             voluptas sit aspernatur aut odit aut fugit, sed quia
    //             consequuntur magni dolores eos qui ratione voluptatem sequi
    //             nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
    //             modi.
    //           </p>
    //         </AccordionTab>
    //         <AccordionTab header="Header III">
    //           <p className="m-0">
    //             At vero eos et accusamus et iusto odio dignissimos ducimus qui
    //             blanditiis praesentium voluptatum deleniti atque corrupti quos
    //             dolores et quas molestias excepturi sint occaecati cupiditate
    //             non provident, similique sunt in culpa qui officia deserunt
    //             mollitia animi, id est laborum et dolorum fuga. Et harum quidem
    //             rerum facilis est et expedita distinctio. Nam libero tempore,
    //             cum soluta nobis est eligendi optio cumque nihil impedit quo
    //             minus.
    //           </p>
    //         </AccordionTab>
    //       </Accordion>
    //     </div>
    //   </div>
    // </Fragment>
    <Fragment>
    <div className="faq-container">
      <Accordion>
        {arr.map((item, index) => (
          <AccordionTab key={index} header={item.que}>
            <p className="m-0">{item.ans}</p>
          </AccordionTab>
        ))}
      </Accordion>
    </div>
  </Fragment>
  );
};

export default Faq;
