import React, { Component } from "react";
import styled from "styled-components";

const AboutMeWrapper = styled.div`
  .section-about {
    background-color: #181e2e;
    padding: 25rem 0;
    color: white;
    margin-top: -20vh;
    z-index: 7;
  }

  .u-center-text {
    text-align: center;
  }

  .heading-secondary {
    fonst-size: 3.5rem;
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
  }
`;

export default class AboutMe extends Component {
  render() {
    return (
      <AboutMeWrapper>
        <main>
          <section className="section-about">
            <div className="u-center-text">
              <h2 className="heading-secondary">About Me</h2>
            </div>
          </section>
        </main>
      </AboutMeWrapper>
    );
  }
}
