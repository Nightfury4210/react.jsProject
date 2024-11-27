import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaBook, FaChalkboardTeacher, FaFlask } from "react-icons/fa";
import teacherImage from "../NA.jpg"; // Import the teacher's image
import teacherImageText from "../text.png.png";
import { Carousel } from 'react-bootstrap';


export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="text-light py-5" style={{ color: "white", backgroundColor: "#E3963E" }}>
        <Container>
          <Row className="align-items-center mt-5">
            {/* Right Image */}
            
            <Col md={6} className="text-center">
        <div className="text-start mt-5">
           <h4 
             className="font-italic" 
             style={{ fontSize: "3.0rem", lineHeight: "1.3" }} // Increased text size and line height
           >
            <q>Nurture, Educate, Unlock, and Encourage, this is the Alpha Spirit.</q>
           </h4>
           <p 
             className="mt-3 font-weight-bold" 
             style={{ fontSize: "1.5rem" }} // Increased size for the founder's name and designation
           >
            <strong>Nawaid Ali</strong>
           <br />
          Founder
           </p>
          </div>
         </Col>
         <Col md={6} className="text-center">
              <img
                src={teacherImage}
                alt="Nawaid Ali"
                className="img-fluid rounded p-1"
                style={{ height:"100%", marginTop: "85px"}}
              />
            </Col>
        </Row>
        </Container>
      </section>

      {/* Cards Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center">
            <Col md={4} className="mb-4">
              <Card
                className="text-light border-0 shadow h-100"
                style={{ backgroundColor: "#E3963E" }}
              >
                <Card.Body>
                  <div className="display-4 mb-3">
                    <FaBook />
                  </div>
                  <Card.Title>O-Level Physics</Card.Title>
                  <Card.Text>
                    Master the basics of physics with detailed lectures,
                    problem-solving, and hands-on activities.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card
                className="text-light border-0 shadow h-100"
                style={{ backgroundColor: "#E3963E" }}
              >
                <Card.Body>
                  <div className="display-4 mb-3">
                    <FaChalkboardTeacher />
                  </div>
                  <Card.Title>A-Level Physics</Card.Title>
                  <Card.Text>
                    Advance your knowledge with in-depth lessons and preparation
                    for A-level exams.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4} className="mb-4">
              <Card
                className="text-light border-0 shadow h-100"
                style={{ backgroundColor: "#E3963E" }}
              >
                <Card.Body>
                  <div className="display-4 mb-3">
                    <FaFlask />
                  </div>
                  <Card.Title>Practical Labs</Card.Title>
                  <Card.Text>
                    Experience physics concepts with practical, real-world
                    experiments and labs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <h1 className="text-center mb-4" style={{ color: "#333", fontFamily: "inherit" }}>
           Register for May/June 2025 Batch
      </h1>
      
      {/* New Cards Section */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
                             {/* Card 2 */}
        <Col md={4} className="mb-4">
          <Card
            className="border-0 shadow-lg"
            style={{
              background: "linear-gradient(145deg, #f8f9fa, #e9ecef)", // Subtle gradient background
              borderRadius: "12px", // Smooth rounded corners
            }}
          >
            {/* Card Header */}
            <Card.Header
              className="text-center fw-bold"
              style={{
                backgroundColor: "#E3963E",
                color: "#fff",
                borderTopLeftRadius: "12px", // Rounded corners for the header
                borderTopRightRadius: "12px",
                fontSize: "1.2rem", // Slightly larger text
              }}
            >
              O Levels
            </Card.Header>

            {/* Card Body */}
            <Card.Body
              className="text-dark"
              style={{
                padding: "1.5rem",
              }}
            >
              {/* Subtitle */}
              <Card.Subtitle
                className="text-center mb-3"
                style={{
                  color: "#6c757d",
                  fontSize: "1rem",
                }}
              >
                5054/0625
              </Card.Subtitle>

              {/* Description */}
              <Card.Text className="text-center" style={{ fontSize: "0.95rem" }}>
                New Live Session for Grade 10 & 11
              </Card.Text>

              <Card.Text
                className="text-center"
                style={{
                  lineHeight: "1.5",
                  fontSize: "0.95rem",
                }}
              >
                A 6-month-long online course covering 100% of the syllabus for Grade 10 & 11.
              </Card.Text>

              {/* Pricing */}
              <Card.Text
                className="text-center"
                style={{
                  fontWeight: "bold",
                  color: "#E3963E",
                  fontSize: "1.2rem",
                }}
              >
                PKR 9,500 <span className="text-muted" style={{ fontSize: "0.9rem" }}>per month</span>
              </Card.Text>

              {/* Buttons */}
              <div className="d-flex justify-content-center">
                <Button
                  variant="light"
                  className="me-2 text-light"
                  style={{
                    backgroundColor: "#E3963E",
                    border: "none",
                    padding: "0.5rem 1.5rem",
                    fontWeight: "bold",
                    borderRadius: "8px",
                  }}
                >
                  Join Now
                </Button>
                <Button
                  variant="light"
                  className="me-2 text-light"
                  style={{
                    backgroundColor: "#333",
                    border: "none",
                    padding: "0.5rem 1.5rem",
                    fontWeight: "bold",
                    borderRadius: "8px",
                  }}
                >
                  Details
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

            <Col md={4} className="mb-4">
              <Card
                className="border-0 shadow-lg"
                style={{
                  background: "017f96", // Subtle gradient background
                  borderRadius: "12px", // Smooth rounded corners
                }}
              >
                {/* Card Header */}
                <Card.Header
                  className="text-center fw-bold"
                  style={{
                    backgroundColor: "#E3963E",
                    color: "#fff",
                    borderTopLeftRadius: "12px", // Rounded corners for the header
                    borderTopRightRadius: "12px",
                    fontSize: "1.2rem", // Slightly larger text
                  }}
                >
                  AS Level
                </Card.Header>

                {/* Card Body */}
                <Card.Body
                  className="text-dark"
                  style={{
                    padding: "1.5rem",
                    backgroundColor: "017f96",
                  }}
                >
                 {/* Subtitle */}
                  <Card.Subtitle
                    className="text-center mb-3"
                    style={{
                      color: "#6c757d",
                      fontSize: "1rem",
                    }}
                  >
                    5054/0625
                  </Card.Subtitle>

                  {/* Description */}
                  <Card.Text className="text-center" style={{ fontSize: "0.95rem" }}>
                    New Live Session for Grade 10 & 11
                  </Card.Text>

                  <Card.Text
                    className="text-center"
                    style={{
                      lineHeight: "1.5",
                      fontSize: "0.95rem",
                    }}
                  >
                    A 6-month-long online course covering 100% of the syllabus for Grade 10 & 11.
                  </Card.Text>

                  {/* Pricing */}
                  <Card.Text
                    className="text-center"
                    style={{
                      fontWeight: "bold",
                      color: "#E3963E",
                      fontSize: "1.2rem",
                    }}
                  >
                    PKR 9,500 <span className="text-muted" style={{ fontSize: "0.9rem" }}>per month</span>
                  </Card.Text>

                  {/* Buttons */}
                  <div className="d-flex justify-content-center">
                    <Button
                      variant="light"
                      className="me-2 text-light"
                      style={{
                        backgroundColor: "#E3963E",
                        border: "none",
                        padding: "0.5rem 1.5rem",
                        fontWeight: "bold",
                        borderRadius: "8px",
                      }}
                    >
                      Join Now
                    </Button>
                    <Button
                      variant="light"
                      className="me-2 text-light"
                      style={{
                        backgroundColor: "#333",
                        border: "none",
                        padding: "0.5rem 1.5rem",
                        fontWeight: "bold",
                        borderRadius: "8px",
                      }}
                    >
                      Details
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

          <Col md={4} className="mb-4">
            <Card
              className="border-0 shadow-lg"
              style={{
                background: "linear-gradient(145deg, #f8f9fa, #e9ecef)", // Subtle gradient background
                borderRadius: "12px", // Smooth rounded corners
              }}
            >
              {/* Card Header */}
              <Card.Header
                className="text-center fw-bold"
                style={{
                  backgroundColor: "#E3963E",
                  color: "#fff",
                  borderTopLeftRadius: "12px", // Rounded corners for the header
                  borderTopRightRadius: "12px",
                  fontSize: "1.2rem", // Slightly larger text
                }}
              >
                A2 Level
              </Card.Header>

              {/* Card Body */}
              <Card.Body
                className="text-dark"
                style={{
                  padding: "1.5rem",
                }}
              >

                {/* Subtitle */}
                <Card.Subtitle
                  className="text-center mb-3"
                  style={{
                    color: "#6c757d",
                    fontSize: "1rem",
                  }}
                >
                  5054/0625
                </Card.Subtitle>

                {/* Description */}
                <Card.Text className="text-center" style={{ fontSize: "0.95rem" }}>
                  New Live Session for Grade 10 & 11
                </Card.Text>

                <Card.Text
                  className="text-center"
                  style={{
                    lineHeight: "1.5",
                    fontSize: "0.95rem",
                  }}
                >
                  A 6-month-long online course covering 100% of the syllabus for Grade 10 & 11.
                </Card.Text>

                {/* Pricing */}
                <Card.Text
                  className="text-center"
                  style={{
                    fontWeight: "bold",
                    color: "#E3963E",
                    fontSize: "1.2rem",
                  }}
                >
                  PKR 9,500 <span className="text-muted" style={{ fontSize: "0.9rem" }}>per month</span>
                </Card.Text>

                {/* Buttons */}
                <div className="d-flex justify-content-center">
                  <Button
                    variant="light"
                    className="me-2 text-light"
                    style={{
                      backgroundColor: "#E3963E",
                      border: "none",
                      padding: "0.5rem 1.5rem",
                      fontWeight: "bold",
                      borderRadius: "8px",
                    }}
                  >
                    Join Now
                  </Button>
                  <Button
                    variant="light"
                    className="me-2 text-light"
                    style={{
                      backgroundColor: "#333",
                      border: "none",
                      padding: "0.5rem 1.5rem",
                      fontWeight: "bold",
                      borderRadius: "8px",
                    }}
                  >
                    Details
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          </Row>
        </Container>
      </section>
       {/* Sliding Carousel Section */}
       <section className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-4" style={{ color: "#333" }}>
            Student Reviews
          </h2>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400" // Replace with your image URL
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>O-Level Physics</h3>
                <p>
                  Master the basics of physics with detailed lectures and
                  hands-on activities.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400" // Replace with your image URL
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>A-Level Physics</h3>
                <p>
                  Prepare for exams with in-depth lessons and advanced concepts.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x400" // Replace with your image URL
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Practical Labs</h3>
                <p>
                  Apply concepts with real-world experiments and practical
                  learning.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
    </>
  );
}
