import React from "react";
import { Container, Dropdown } from "react-bootstrap";
import styled from "styled-components";

// Styled components for additional styling
const CoursesSection = styled.section`
  padding: 5rem 2rem;
  background-color: #f7f9fc;
  text-align: center;
`;

const CoursesHeading = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
`;

export default function Courses() {
  return (
    <CoursesSection>
      <Container>
        <CoursesHeading>Our Courses</CoursesHeading>
        {/* React-Bootstrap Dropdown */}
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Select a Level
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#o-levels">O Levels</Dropdown.Item>
            <Dropdown.Item href="#a-levels">A Levels</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </CoursesSection>
  );
}
