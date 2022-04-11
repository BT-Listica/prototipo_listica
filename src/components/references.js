import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const References = () => {
  return (
    <div style={{ backgroundColor: "#3888A3" }}>
        <Row style={{ padding: '100px' }} >
          <Col>
            <Card style={{ backgroundColor: "#3888A3", color: "white", paddingRight:'100px', paddingLeft: '100px' }} >
              <Card.Body>
                <Card.Text>
                  Extremely easy to use, helped us develop our Vote for George
                  Washington micro-site extre- mely quickly! We will definitely
                  use it again for other projects
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ backgroundColor: "#3888A3", color: "white", paddingRight:'100px', paddingLeft: '100px' }} >
              <Card.Body>
                <Card.Text>
                  Extremely easy to use, helped us develop our Vote for George
                  Washington micro-site extre- mely quickly! We will definitely
                  use it again for other projects
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
    </div>
  );
};

export default References;
