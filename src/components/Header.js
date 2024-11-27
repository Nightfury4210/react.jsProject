import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "./logo.png";


export default function Header() {
  const location = useLocation();

  // Function to check if the path is active
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div>Contact Us</div>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Main Navigation */}

      <Navbar expand="lg" className="navbar-custom">
        {/* Logo */}
        <Navbar.Brand href="/" className="navbar-brand-custom">
        <img src={logo} alt="Logo" className="logo" />
        <span className="brand-title"  style={{ backgroundColor: "", color: "black", fontSize: "2.0rem" }}>PHYSICS WITH NAWAID ALI</span>
      </Navbar.Brand>
        <Container>
          {/* Toggle Button for Mobile */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            {/* Nav Links */}
            <Nav className="ms-auto m-5">
              <Nav.Link
                as={Link}
                to="/"
                className={`nav-link-custom ${isActive("/") ? "nav-link-active" : ""}`}
              >
                Home |
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className={`nav-link-custom ${isActive("/about") ? "nav-link-active" : ""}`}
              >
                Courses  |
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/download"
                className={`nav-link-custom ${isActive("/download") ? "nav-link-active" : ""}`}
              >
                Download Orb-ed App  |
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                className={`nav-link-custom ${isActive("/contact") ? "nav-link-active" : ""}`}
              >
                Contact  |
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
