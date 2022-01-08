import React, { useRef, useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleNavLinks = () => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    const linksContainerHeigt =
      linksContainerRef.current.getBoundingClientRect().height;
    if (linksContainerHeigt === 0) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = 0;
    }
    // console.log(linksContainerRef.current.style.height);
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <h3>shoping</h3>
          </Link>
          <button className="btn toggle-btn" onClick={toggleNavLinks}>
            <FaAlignJustify />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links-list" ref={linksRef}>
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="link">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
