import React, { Component } from "react";
import styled from "styled-components";
import ModalButton from "../components/subcomponents/ModalButton.jsx";

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
    font-size: 5rem;
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
  .project-container {
    width: 75%;
    height: auto;
    background: white;
    border-radius: 20px;
    margin: 0 auto 5rem auto;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.25);
    padding: 4rem;
    max-width: 125rem;
  }

  .heading-tertiary {
    font-size: 3rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .image-container--1 {
    height: auto;
    width: 90%;
    margin: 0 auto 0 auto;
  }

  .image-container--2 {
    height: auto;
    width: 35%;
    margin: 0 auto 0 auto;
  }

  .image-container--3 {
    height: auto;
    width: 90%;
    margin: 0 auto 0 auto;
  }

  .project {
    border-radius: 10px;
    border: solid 1px lightgrey;
    height: auto;
    width: 100%;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 1rem 5rem 0 5rem;
  }

  .github-container {
    justify-self: center;
  }

  .btn-text {
    &:link,
    &:visited {
      font-size: 2rem;
      font-weight: 700;
      background-image: linear-gradient(
        to right,
        rgb(102, 201, 255),
        rgb(120, 139, 249)
      );
      -webkit-background-clip: text;
      color: transparent;
      display: inline-block;
      text-decoration: none;
      border-bottom: 1px solid rgb(120, 139, 249);
      padding: 3px;
      transition: all 0.2s;
    }
  }

  .btn-text:hover {
    -webkit-background-clip: unset;
    color: white;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
    border-radius: 2px;
  }

  .btn-text:active {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    transform: translateY(0);
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
              <h3 className="heading-tertiary">Nike Mock Up</h3>
              <div className="image-container--1">
                <img
                  className="project"
                  src="https://jaredsportfolio.s3-us-west-1.amazonaws.com/Nike.gif"
                  alt="animated"
                />
              </div>
              <div className="btn-container">
                <div className="github-container">
                  <a
                    href="https://github.com/jaredar1232/Nike-Mock-Up"
                    className="btn-text"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    &nbsp; Github
                  </a>
                </div>
                <ModalButton />
              </div>
            </div>

            <div className="project-container">
              <h3 className="heading-tertiary">Streak Tracker</h3>
              <div className="image-container--2">
                <img
                  className="project"
                  src="https://jaredsportfolio.s3-us-west-1.amazonaws.com/Streak.gif"
                  alt="animated"
                />
              </div>
              <a
                href="https://github.com/jaredar1232/Streak-Activity-Tracker"
                className="btn-text"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                &nbsp; Github
              </a>
            </div>

            <div className="project-container">
              <h3 className="heading-tertiary">System Design</h3>
              <div className="image-container--3">
                <img
                  className="project"
                  src="https://jaredsportfolio.s3-us-west-1.amazonaws.com/SystemDesign.gif"
                  alt="animated"
                />
              </div>
              <a
                href="https://github.com/jaredar1232/System-Design--BestBuy"
                className="btn-text"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                &nbsp; Github
              </a>
            </div>
          </div>
        </section>
      </ProjectsWrapper>
    );
  }
}
