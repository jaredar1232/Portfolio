import React, { Component } from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  display: inline-block;
  justify-self: center;

  .modal {
    opacity: 0;
    visibility: hidden;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: left;
    background: rgba(0, 0, 0, 0.9);
    transition: opacity 0.25s ease;
  }

  .modal__bg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    cursor: pointer;
  }

  .modal-state {
    display: none;
  }

  .modal-state:checked + .modal {
    opacity: 1;
    visibility: visible;
  }

  .modal-state:checked + .modal .modal__inner {
    top: 0;
  }

  .modal__inner {
    transition: top 0.25s ease;
    position: absolute;
    top: -20%;
    right: 0;
    bottom: 0;
    left: 0;
    width: 50%;
    margin: auto;
    overflow: auto;
    background: #fff;
    border-radius: 5px;
    padding: 1rem 2rem;
    height: 50%;
  }

  .modal__close {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 1.1rem;
    height: 1.1rem;
    cursor: pointer;
  }

  .modal__close:after,
  .modal__close:before {
    content: "";
    position: absolute;
    width: 2px;
    height: 1.5rem;
    background: #ccc;
    display: block;
    transform: rotate(45deg);
    left: 50%;
    margin: -3px 0 0 -1px;
    top: 0;
  }

  .modal__close:hover:after,
  .modal__close:hover:before {
    background: #aaa;
  }

  .modal__close:before {
    transform: rotate(-45deg);
  }

  @media screen and (max-width: 768px) {
    .modal__inner {
      width: 90%;
      height: 90%;
      box-sizing: border-box;
    }
  }

  /* Other
 * =============================== */

  .btn {
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

  .btn:hover,
  .btn:focus {
    -webkit-background-clip: unset;
    color: white;
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
    border-radius: 2px;
  }

  .btn:active {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    transform: translateY(0);
  }
`;

export default class ModalButton extends Component {
  render() {
    return (
      <ModalWrapper>
        <div>
          <p>
            <label className="btn" htmlFor="modal-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z" />
              </svg>
              &nbsp; Details
            </label>
          </p>
        </div>

        <input className="modal-state" id="modal-1" type="checkbox" />
        <div className="modal">
          <label className="modal__bg" htmlFor="modal-1"></label>
          <div className="modal__inner">
            <label className="modal__close" htmlFor="modal-1"></label>
            <h2>Caaaats FTW!</h2>
            <p>
              Aliquam in sagittis nulla. Curabitur euismod diam eget risus
              venenatis, sed dictum lectus bibendum. Nunc nunc nisi, hendrerit
              eget nisi id, rhoncus rutrum velit. Nunc vel mauris dolor. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Aliquam fringilla quis nisi eget imperdiet.
            </p>
          </div>
        </div>
      </ModalWrapper>
    );
  }
}
