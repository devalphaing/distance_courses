import React, { Fragment, useState } from "react";
import "./Navbar.css";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import logoImage from "../assets/logoDC.jpg";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

const Navbar = () => {
  const items = [
    // {
    //   label: 'File',
    //   icon: 'pi pi-fw pi-user',
    //   items: [
    //     {
    //       label: 'New',
    //       icon: 'pi pi-fw pi-plus',
    //       items: [
    //         {
    //           label: 'Bookmark',
    //           icon: 'pi pi-fw pi-bookmark'
    //         },
    //         {
    //           label: 'Video',
    //           icon: 'pi pi-fw pi-video'
    //         },
    //       ]
    //     },
    //     {
    //       label: 'Delete',
    //       icon: 'pi pi-fw pi-trash'
    //     },
    //     {
    //       separator: true
    //     },
    //     {
    //       label: 'Export',
    //       icon: 'pi pi-fw pi-external-link'
    //     }
    //   ]
    // }
  ];

  const aboutItem = {
    label: "About",
    icon: "pi pi-info",
    command: () => {
      setHead("About Us");
      setContent(
        `Welcome to DistanceCourseWala.com, your trusted destination for discovering the perfect educational boards for school and the ideal degree programs for college. With personalized guidance and comprehensive resources, we empower you to make informed decisions for a successful educational journey. Whether you're exploring educational boards or degree programs, our expert team offers valuable insights and support to help you find the right path that aligns with your aspirations. Trust DistanceCourseWala.com to be your partner in unlocking your educational potential and shaping a successful future.`
      );
      setOpen(true);
    },
  };

  const contactItem = {
    label: "Contact",
    icon: "pi pi-envelope",
    command: () => {
      setHead("COntact Us");
      setContent(
        `<div>Hello</div>`
      );
      setOpen(true);
    },
  };

  items.push(aboutItem);
  items.push(contactItem);

  const start = (
    <img
      alt="logo"
      src={logoImage}
      onError={(e) => console.log(e)}
      height="40"
      className="mr-2"
    />
  );

  const handleSubmit = () => {
    setOpen(false);
  };

  const [head, setHead] = useState("");
  const [content, setContent] = useState("");
  const [isOpen, setOpen] = useState(false);

  return (
    <Fragment>
      <div className="card">
        <Menubar model={items} start={start} />
      </div>
      <Dialog
        header={head}
        visible={isOpen}
        onHide={() => setOpen(false)}
        closable={false}
        // style={{ width: '50%' }}
        className="dialog-navbar-popup"
      >
        <div className="dialog-navbar-parent-container" onClick={handleSubmit}>
          {content}
          <Button onClick={handleSubmit} className="dialog-navbar-btn">
            Ok
          </Button>
        </div>
      </Dialog>
    </Fragment>
  );
};

export default Navbar;
