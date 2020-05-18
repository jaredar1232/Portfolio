import React, { Component } from "react";
import styled from "styled-components";

const TopFoldWrapper = styled.div`
  .header {
    height: 100vh;
    background-image: linear-gradient(
        to right bottom,
        rgba(14, 17, 25, 0.899),
        rgba(21, 26, 40, 0.194)
      ),
      url(https://jaredsportfolio.s3-us-west-1.amazonaws.com/LandingImageBlue.jpg);
    background-size: cover;
    background-position: right;
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
    position: relative;
  }

  .header__text-box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .heading-primary {
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 6rem;
    backface-visibility: hidden;
  }

  .heading-primary--main {
    display: block;
    font-size: 6rem;
    font-weight: 400;
    letter-spacing: 3.5rem;

    animation-name: moveInLeft;
    animation-duration: 1s;
    animation-timing-function: ease-out;

    /* animation-iteration-count: 3; */
    /* animation-delay: 3s; */
  }

  .heading-primary--sub {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1.75rem;

    animation: moveInRight 1s ease-out;
  }

  @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-10rem);
    }

    80% {
      transform: translateX(1rem);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }

  @keyframes moveInRight {
    0% {
      opacity: 0;
      transform: translateX(10rem);
    }

    80% {
      transform: translateX(-1rem);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }

  @keyframes moveInButton {
    0% {
      opacity: 0;
      transform: translateY(3rem);
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }

  .btn:link,
  .btn:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 0rem;
    transition: all 0.2s;
    position: relative;
    font-size: 1.6rem;
    background-color: rgba(0, 0, 0, 0.468);
    color: white;
    border: black solid 1px;
  }

  .btn:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }

  .btn:active {
    transform: translateY(-1px);
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.303);
    color: white;
    border: black solid 1px;
  }

  .btn--white {
    background-color: rgba(0, 0, 0, 0.468);
    color: rgba(0, 0, 0, 0.468);
  }

  .btn::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 0rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
    background-color: rgba(0, 0, 0, 0.468);
    color: white;
    border: black solid 1px;
  }

  .btn--white::after {
    background-color: rgba(0, 0, 0, 0.249);
  }

  .btn:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
  }

  .btn--animated {
    animation: moveInButton 0.5 ease-out 0.75s;
    animation-fill-mode: backwards;
  }
`;

export default class TopFold extends Component {
  render() {
    return (
      <TopFoldWrapper>
        <header className="header">
          <div className="header__text-box">
            <h1 className="heading-primary">
              <span className="heading-primary--main">Jared Rothenberg</span>
              <span className="heading-primary--sub">Software Engineer</span>
            </h1>
            <a href="#" className="btn btn--white btn--animated">
              Explore
            </a>
          </div>
        </header>
      </TopFoldWrapper>
    );
  }
}
