import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <Navbar color="red" light expand="md">
      <NavbarBrand>Sab_Kuch_Le_Longa Bank</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink to="/" activeClassName="is-active" exact={true} className="nav-link ">
            Registration
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/login" activeClassName="is-active" className="nav-link ">
            Sab kuch le lo mera
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
