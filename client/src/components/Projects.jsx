import React, { Component } from "react";
import styled from "styled-components";

const ProjectsWrapper = styled.div`
  .project-page {
    background-color: #181e2e;
    padding: 10rem 0;
    margin-top: -1vh;
  }

  .project-container {
    padding: 50rem 0rem;
    background-color: lightgrey;
    clip-path: polygon(0 25%, 100% 0, 100% 75%, 0 100%);
  }

  .heading-secondary {
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    background-image: linear-gradient(
      to right,
      rgb(102, 201, 255),
      rgb(120, 139, 249)
    );
    -webkit-background-clip: text;
    color: transparent;
    margin-bottom: 3rem;
  }
`;

export default class Projects extends Component {
  render() {
    return (
      <ProjectsWrapper>
        <section class="project-page">
          <div className="project-container">
            <h2 className="heading-secondary">Projects</h2>
            <div className="project project--1"></div>
            <div className="project project--2"></div>
            <div className="project project--1"></div>
          </div>
        </section>
      </ProjectsWrapper>
    );
  }
}
