import React from "react";
import { Container, Button } from "react-bootstrap";
import styled from "styled-components";

// Styled component for additional section styling
const DownloadSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background-color: #f7f9fc;
`;

export default function Contact() {
  return (
    <DownloadSection>
      <Container>
        <h2 className="mb-3" style={{ fontSize: "2.5rem", color: "#333" }}>
            Contact Us
        </h2>
        <p className="mb-4" style={{ fontSize: "1.2rem", color: "#555" }}>
          Get started with the Orb-ed app to experience a unique learning
          platform. Download now and join our community of learners.
        </p>
        <Button
          href="https://yourappdownloadlink.com"
          target="_blank"
          variant="primary"
          size="lg"
        >
          Download Now
        </Button>
      </Container>
    </DownloadSection>
  );
}
