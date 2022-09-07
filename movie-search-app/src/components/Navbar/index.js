import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
            <h1>MovieBook</h1>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/about" activeSyle>
                About
            </NavLink>
            <NavLink to="/services" activeSyle>
                Services
            </NavLink>
            <NavLink to="/contact-us" activeSyle>
                Contact Us
            </NavLink>
            <NavLink to="/sign-up" activeSyle>
                Sign Up
            </NavLink>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar