import React, { Component } from "react";
import styled from "styled-components";

const AProjectWrapper = styled.div`
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
    margin-left: 6rem;
  }

  .image-container {
    height: auto;
    width: ${(props) => props.projectWidth}%;
    margin: 0 auto 0 auto;
    position: relative;
  }

  .project {
    border-radius: 10px;
    border: solid 1px lightgrey;
    height: auto;
    width: 100%;
  }

  .hide-project-info {
    display: none;
    color: white;
  }

  .project-info-container {
    width: 100%;
    height: 100%;
    text-align: center;
    border: solid 1px white;
    border-radius: 10px;
    background-color: white;
    z-index: 1;
    position: absolute;
    top: 0;
    overflow-x: hidden;
    overflow-x: auto;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 1rem 5rem 0 5rem;
  }

  .btn-position {
    justify-self: center;
  }

  .btn-text {
    &:link,
    &:visited {
      font-size: 2rem;
      font-weight: 700;
      background-image: linear-gradient(
        to right bottom,
        rgb(102, 201, 255),
        rgb(120, 139, 249)
      );
      -webkit-background-clip: text;
      color: transparent;
      display: inline-block;
      text-decoration: none;
      border-bottom: 1px solid rgb(120, 139, 249);
      padding: 5px;
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

  .btn--2 {
    font-size: 2rem;
    font-weight: 700;
    background-image: linear-gradient(
      to right bottom,
      rgb(102, 201, 255),
      rgb(120, 139, 249)
    );
    -webkit-background-clip: text;
    color: transparent;
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid rgb(120, 139, 249);
    padding: 5px;
    transition: all 0.2s;
    cursor: pointer;
  }

  .btn--2:hover,
  .btn--2:focus {
    -webkit-background-clip: unset;
    color: white;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
    border-radius: 2px;
  }

  .btn--2:active {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    transform: translateY(0);
  }

  .details-bullet {
    font-size: 2.5rem;
    color: black;
    display: list-item;
    list-style-type: disc;
    list-style-position: inside;
    margin: 2rem;
    text-align: left;
  }
`;

export default class AProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: true,
    };
  }

  displayChanger() {
    this.setState({
      video: !this.state.video,
    });
  }

  render() {
    const aProject = this.props.aProject;
    const projectWidth = aProject.width;
    console.log(projectWidth);

    return (
      <AProjectWrapper projectWidth={projectWidth}>
        <div className="project-container">
          <h3 className="heading-tertiary">{aProject.name}</h3>
          <div className="image-container">
            <div
              className={
                this.state.video
                  ? "hide-project-info"
                  : "project-info-container"
              }
            >
              {aProject.details.map((bulletPoint) => (
                <div className="details-bullet">{bulletPoint}</div>
              ))}
            </div>
            <video
              width="100%"
              height="auto"
              muted
              loop
              autoPlay
              className="project"
            >
              <source src={aProject.video} type="video/mp4"></source>
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="btn-container">
            <div className="btn-position">
              <a href={aProject.github} className="btn-text" target="_blank">
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
            <div className="btn-position">
              <div className="btn--2" onClick={() => this.displayChanger()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z" />
                </svg>
                &nbsp; {this.state.video ? "Details" : "Video"}
              </div>
            </div>
          </div>
        </div>
      </AProjectWrapper>
    );
  }
}
