import React, { Fragment } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import "./Faq.css";

const Faq = () => {

    const arr = [
        {
            que: "Does NDA accept the passing certificate from BBOSE?",
            ans: "Yes, BBOSE certificates are acceptable by every private and government organization. You can apply for any govt. jobs."
        }, {
            
        }
    ]

  return (
    <Fragment>
      <div className="faq-container">
        <div className="card">
          <Accordion activeIndex={0}>
            <AccordionTab header={arr[0].que}>
              <p className="m-0">
                {arr[0].ans}
              </p>
            </AccordionTab>
            <AccordionTab header="Header II">
              <p className="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
                modi.
              </p>
            </AccordionTab>
            <AccordionTab header="Header III">
              <p className="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus.
              </p>
            </AccordionTab>
          </Accordion>
        </div>
      </div>
    </Fragment>
  );
};

export default Faq;
