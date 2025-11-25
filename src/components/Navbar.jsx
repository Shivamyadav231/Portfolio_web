import React, { useState } from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import './Navbar.css'

export default function Navbar() {
  const [menu, setMenu] = useState("Home");

  return (
    <div className='navbar'>
      <img src='' alt='' />

      <ul className='nav-menu'>

        <li className="li">
          <AnchorLink href="#4 ">
            <p onClick={() => setMenu("Home")}>Home</p>
          </AnchorLink>
        </li>

        <li className="li">
          <AnchorLink href="#5 ">
            <p onClick={() => setMenu("About")}>About Me</p>
          </AnchorLink>
        </li>

        <li className="li">
          <AnchorLink href="#contact">
            <p onClick={() => setMenu("Contact")}>Contact</p>
          </AnchorLink>
        </li>

      </ul>
      <div className="nav-contact"><AnchorLink href="#contact">
        <p onClick={() => setMenu("Contact")}>Contact with me</p>
        </AnchorLink></div>


    </div>
  )
}
