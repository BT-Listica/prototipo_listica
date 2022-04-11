import React from "react";
import { Container } from "react-bootstrap";

import Project from "../assets/project.png";

const Briefcase = () => {
  return (
      <div>
          <Container>
        <div>
          <h1
            class="text-center fw-bold"
            style={{
              color: "#9FC248",
              fontFamily: "Montserrat, sans-serif",
              paddingTop: '5rem',
              paddingBottom: '3rem'
            }}
          >
            Portafolio
          </h1>
          <h4 class="text-center" style={{ paddingRight: '15rem', paddingLeft: '15rem', paddingBottom: '5rem' }} >
            Les mostramos algunos de los proyectos que hemos realizado, dando
            solución a las necesidades de nuestros clientes.
          </h4>
        </div>
        <div class="text-center">
          <img src={Project} style={{ width: "90%" }} />
        </div>
      </Container>
      </div>
  );
};

export default Briefcase;
