import React, { Fragment } from 'react'
import './Navbar.css'
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';


const Navbar = () => {

  const items = [
    {
      label: 'File',
      icon: 'pi pi-fw pi-user',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            {
              label: 'Bookmark',
              icon: 'pi pi-fw pi-bookmark'
            },
            {
              label: 'Video',
              icon: 'pi pi-fw pi-video'
            },

          ]
        },
        {
          label: 'Delete',
          icon: 'pi pi-fw pi-trash'
        },
        {
          separator: true
        },
        {
          label: 'Export',
          icon: 'pi pi-fw pi-external-link'
        }
      ]
    }
  ];

  // const start = <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="mr-2"></img>;
  const end = <InputText placeholder="Search" type="text" />;

  return (
    <Fragment>
      <div className="card">
        {/* <Menubar model={items} start={start} end={end} /> */}
        <Menubar model={items} />
      </div>
    </Fragment>
  )
}

export default Navbar
