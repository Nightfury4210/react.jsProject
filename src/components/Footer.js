import React from "react";
import { Container, Nav } from "react-bootstrap";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#333", color: "#fff", padding: "2rem", textAlign: "center", fontSize: "0.9rem" }}>
      <Container>
        {/* Navigation Links */}
        <Nav className="justify-content-center mb-3">
          <Nav.Item>
            <Nav.Link href="/" style={{ color: "#aaa", textDecoration: "none" }} className="footer-link">
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about" style={{ color: "#aaa", textDecoration: "none" }} className="footer-link">
              Courses
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact" style={{ color: "#aaa", textDecoration: "none" }} className="footer-link">
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>

        {/* Copyright */}
        <div style={{ fontSize: "0.8rem", color: "#aaa" }}>
          &copy; 2024 Physics with Nawaid Ali
        </div>
      </Container>
    </footer>
  );
} 