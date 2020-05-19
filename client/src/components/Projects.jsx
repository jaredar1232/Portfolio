import React, { Component } from "react";
import styled from "styled-components";

const ProjectsWrapper = styled.div`
  .project-page-buffer {
    background-color: #181e2e;
    padding: 10rem 0;
    margin-top: -1vh;
    border: solid 1px red;
  }

  .project-page-clipart {
    padding: 10rem 0rem;
    background-color: white;
  }

  .u-center-text {
    text-align: center;
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
    color: black;
    margin-bottom: 3rem;
  }
  .project-container {
    width: 120rem;
    height: 100rem;
    background: white;
    border-radius: 20px;
    margin: 0 auto 5rem auto;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.25);
  }

  .image-container {
    height: 70rem;
    width: 70rem;
    display: block;
    border: solid 1px blue;
    margin: 1rem;
  }

  .project {
    border-radius: 10px;
  }

  .project--1 {
    height: auto;
    width: 100%;
  }

  .project--2 {
    height: 100%;
    width: auto;
  }

  .project--3 {
    height: auto;
    width: 100%;
  }
`;

export default class Projects extends Component {
  render() {
    return (
      <ProjectsWrapper>
        <section className="project-page-buffer">
          <div className="project-page-clipart">
            <div className="u-center-text">
              <h2 className="heading-secondary">Applications</h2>
            </div>

            <div className="project-container">
              <div className="image-container">
                <img
                  className="project project--1"
                  src="https://jaredsportfolio.s3-us-west-1.amazonaws.com/Nike.gif"
                  alt="animated"
                />
              </div>
            </div>

            <div className="project-container">
              <div className="image-container">
                <img
                  className="project project--2"
                  src="https://jaredsportfolio.s3-us-west-1.amazonaws.com/Streak.gif"
                  alt="animated"
                />
              </div>
            </div>

            <div className="project-container">
              <div className="image-container">
                <img
                  className="project project--3"
                  src="https://jaredsportfolio.s3-us-west-1.amazonaws.com/SystemDesign.gif"
                  alt="animated"
                />
              </div>
            </div>
          </div>
        </section>
      </ProjectsWrapper>
    );
  }
}
