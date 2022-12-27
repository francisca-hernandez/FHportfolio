
import React from 'react';
// import About from './pages/About';
// import Projects from './pages/Projects';


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
          marginRight: '10px',
        }}
      >
        <h1>Francisca Hernandez-Savas Portfolio</h1>
      </NavbarBrand>
      <NavItem>
        <NavLink href="#">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">About</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Projects</NavLink>


      </NavItem>

    </Nav>
  )
};

export default Navbar;