import React, { Component } from "react";
import styled from "styled-components";
import AProject from "../components/AProject.jsx";

const ProjectsWrapper = styled.div`
  .project-page-buffer {
    background-color: white;
    padding: 10rem 0;
    margin-top: -30vh;

    transform: skewY(-7deg);
    & > * {
      transform: skewY(7deg);
    }
  }

  @media screen and (min-width: 140rem) {
    .project-page-buffer {
      transform: skewY(-4deg);
      & > * {
        transform: skewY(4deg);
      }
    }
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
`;

export default class Projects extends Component {
  render() {
    const projectDataArray = [
      {
        name: "Nike Mock Up",
        width: 90,
        video: "https://jaredsportfolio.s3-us-west-1.amazonaws.com/Nike.mp4",
        github: "https://github.com/jaredar1232/Nike-Mock-Up",
      },
      {
        name: "Streak Tracker",
        width: 35,
        video: "https://jaredsportfolio.s3-us-west-1.amazonaws.com/Streak.mp4",
        github: "https://github.com/jaredar1232/Streak-Activity-Tracker",
      },
      {
        name: "System Design",
        width: 90,
        video:
          "https://jaredsportfolio.s3-us-west-1.amazonaws.com/SystemDesign.mp4",
        github: "https://github.com/jaredar1232/System-Design--BestBuy",
      },
    ];
    return (
      <ProjectsWrapper>
        <section className="project-page-buffer">
          <div className="u-center-text">
            <h2 className="heading-secondary">Applications</h2>
          </div>
          {projectDataArray.map((aProject) => (
            <AProject aProject={aProject} key={aProject.name} />
          ))}
        </section>
      </ProjectsWrapper>
    );
  }
}

//   <div className="project-container">
//     <h3 className="heading-tertiary">Nike Mock Up</h3>
//     <div className="image-container--1">
//       <video
//         width="100%"
//         height="auto"
//         muted
//         loop
//         autoPlay
//         className="project"
//       >
//         <source
//           src="https://jaredsportfolio.s3-us-west-1.amazonaws.com/Nike.mp4"
//           type="video/mp4"
//         ></source>
//         Your browser does not support the video tag.
//       </video>
//     </div>
//     <div className="btn-container">
//       <div className="btn-position">
//         <a
//           href="https://github.com/jaredar1232/Nike-Mock-Up"
//           className="btn-text"
//           target="_blank"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//           </svg>
//           &nbsp; Github
//         </a>
//       </div>
//       <div className="btn-position">
//         <div className="btn--2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z" />
//           </svg>
//           &nbsp; Details
//         </div>
//       </div>
//     </div>
//   </div>

//   <div className="project-container">
//     <h3 className="heading-tertiary">Streak Tracker</h3>
//     <div className="image-container--2">
//       <video
//         width="100%"
//         height="auto"
//         muted
//         loop
//         autoPlay
//         className="project"
//       >
//         <source
//           src="https://jaredsportfolio.s3-us-west-1.amazonaws.com/Streak.mp4"
//           type="video/mp4"
//         ></source>
//         Your browser does not support the video tag.
//       </video>
//     </div>
//     <div className="btn-container">
//       <div className="btn-position">
//         <a
//           href="https://github.com/jaredar1232/Streak-Activity-Tracker"
//           className="btn-text"
//           target="_blank"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//           </svg>
//           &nbsp; Github
//         </a>
//       </div>
//       <div className="btn-position">
//         <div className="btn--2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z" />
//           </svg>
//           &nbsp; Details
//         </div>
//       </div>
//     </div>
//   </div>

//   <div className="project-container">
//     <h3 className="heading-tertiary">System Design</h3>
//     <div className="image-container--3">
//       <video
//         width="100%"
//         height="auto"
//         muted
//         loop
//         autoPlay
//         className="project"
//       >
//         <source
//           src="https://jaredsportfolio.s3-us-west-1.amazonaws.com/SystemDesign.mp4"
//           type="video/mp4"
//         ></source>
//         Your browser does not support the video tag.
//       </video>
//     </div>

//     <div className="btn-container">
//       <div className="btn-position">
//         <a
//           href="https://github.com/jaredar1232/System-Design--BestBuy"
//           className="btn-text"
//           target="_blank"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//           </svg>
//           &nbsp; Github
//         </a>
//       </div>
//       <div className="btn-position">
//         <div className="btn--2">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//           >
//             <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z" />
//           </svg>
//           &nbsp; Details
//         </div>
//       </div>
//     </div>
//   </div>
