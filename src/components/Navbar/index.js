
import React from 'react';
// import Projects from '../../pages/Projects';

//Bootstp CSS
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
} from 'reactstrap'

//Nav Bar with tabs props

function Navbar(_props) {
  // let { currentPage } = _props;


  return (
    <Nav tabs>
      <NavbarBrand

        style={{
          marginTop: '10px',
          marginLeft: '10px',
          fontSize: '30px',
          marginRight: '900px',
          color: "#284f67",

        }}
      >
        <h1>Francisca Hernandez-Savas Portfolio</h1>
      </NavbarBrand>
      <NavItem >
        <NavLink
          style={{
            color: "#195c83",
               fontWeight: "bold"

          }}
          href="/About">About Me</NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          style={{
            color: "#195c83",
            fontWeight: "bold",

          }}
      //     href="/About">About</NavLink>
      // </NavItem>
      // <NavItem>
      //   <NavLink
      //     style={{
      //       color: "#195c83",
      //       fontWeight: "bold",

      //     }}

          href=" /Projects">Projects</NavLink>

      </NavItem>
      <NavItem>
        <NavLink
          style={{
            color: "#195c83",
            fontWeight: "bold",

          }}

          href="#">Resume</NavLink>

      </NavItem>

    </Nav>
  )
};

export default Navbar;