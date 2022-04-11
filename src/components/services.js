import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

import Logo_Phone from "../assets/Phone.png";
import Logo_Tool from "../assets/tool.png";
import Logo_Nube from "../assets/nube.png";
import Logo_Pc from "../assets/laptop.png";
import Logo_User from "../assets/user.png";
import Logo_Light from "../assets/light.png";

const Services = () => {
  return (
    <div style={{ backgroundColor: "#9FC248" }}>
      <Container>
        <div>
          <h1
            class="text-center fw-bold"
            style={{
              color: "white",
              fontFamily: "Montserrat, sans-serif",
              lineHeight: "5"
            }}
          >
            Servicios
          </h1>
        </div>
        <div>
          <Row className="justify-content-md-center" >
            <Col>
              <Card style={{ padding: "40px", height: "300px" }}>
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={Logo_Phone}
                    style={{
                      height: "2.5rem",
                      width: "1.7rem",
                      marginBottom: "25px",
                    }}
                  />
                  <Card.Title>MOBILE APPS</Card.Title>
                  <Card.Text>
                    Objective C, Swift, Android, iOS, React, Native, Phone Gap
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ padding: "40px", height: "300px" }}>
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={Logo_Tool}
                    style={{
                      height: "2.2rem",
                      width: "2.2rem",
                      marginBottom: "25px",
                    }}
                  />
                  <Card.Title>IT DEVELOPMENT</Card.Title>
                  <Card.Text>
                    PHP, PL/SQL ORACLE APEX, Java, Node.js, C# Desktop or
                    ASP.NET, C,C++, Database Administration, RESTful Services
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ padding: "40px", height: "300px" }}>
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={Logo_Nube}
                    style={{
                      height: "2.2rem",
                      width: "2.2rem",
                      marginBottom: "25px",
                    }}
                  />
                  <Card.Title>INTERNET OF THINGS</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row
            className="justify-content-md-center"
            style={{ marginTop: "30px", paddingBottom: '10rem' }}
          >
            <Col>
              <Card style={{ padding: "40px", height: "300px" }}>
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={Logo_Pc}
                    style={{
                      height: "2.5rem",
                      width: "4rem",
                      marginBottom: "25px",
                    }}
                  />
                  <Card.Title>SMART WEB DESIGN</Card.Title>
                  <Card.Text>
                    HTML/CSS, Responsive Design, Javascript/jQuery, Bootstrap,
                    Material Design, Angular
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ padding: "40px", height: "300px" }}>
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={Logo_User}
                    style={{
                      height: "2.2rem",
                      width: "2rem",
                      marginBottom: "25px",
                    }}
                  />
                  <Card.Title>ARTIFICIAL INTELLIGENCE</Card.Title>
                  <Card.Text>RPA/RDA, WinAutomation, Blue Prism</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ padding: "40px", height: "300px" }}>
                <Card.Body>
                  <Card.Img
                    variant="top"
                    src={Logo_Light}
                    style={{
                      height: "2.2rem",
                      width: "1.8rem",
                      marginBottom: "25px",
                    }}
                  />
                  <Card.Title>E-COMMERCE</Card.Title>
                  <Card.Text>Paypal, Shopify</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Services;
