// import React, { Component } from "react";
// import styled from "styled-components";

// const ModalWrapper = styled.div`
//   display: inline-block;
//   justify-self: center;

//   .modal {
//     opacity: 0;
//     visibility: hidden;
//     position: fixed;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     text-align: left;
//     background: rgba(0, 0, 0, 0.9);
//     transition: opacity 0.25s ease;
//   }

//   .modal__bg {
//     position: absolute;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     cursor: pointer;
//   }

//   .modal-state {
//     display: none;
//   }

//   .modal-state:checked + .modal {
//     opacity: 1;
//     visibility: visible;
//   }

//   .modal-state:checked + .modal .modal__inner {
//     top: 0;
//   }

//   .modal__inner {
//     transition: top 0.25s ease;
//     position: absolute;
//     top: -20%;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     width: 50%;
//     margin: auto;
//     overflow: auto;
//     background: #fff;
//     border-radius: 5px;
//     padding: 1rem 2rem;
//     height: 50%;
//   }

//   .modal__close {
//     position: absolute;
//     right: 1rem;
//     top: 1rem;
//     width: 1.1rem;
//     height: 1.1rem;
//     cursor: pointer;
//   }

//   .modal__close:after,
//   .modal__close:before {
//     content: "";
//     position: absolute;
//     width: 2px;
//     height: 1.5rem;
//     background: #ccc;
//     display: block;
//     transform: rotate(45deg);
//     left: 50%;
//     margin: -3px 0 0 -1px;
//     top: 0;
//   }

//   .modal__close:hover:after,
//   .modal__close:hover:before {
//     background: #aaa;
//   }

//   .modal__close:before {
//     transform: rotate(-45deg);
//   }

//   @media screen and (max-width: 768px) {
//     .modal__inner {
//       width: 90%;
//       height: 90%;
//       box-sizing: border-box;
//     }
//   }

//   /* Other
//  * =============================== */

// `;

// export default class ModalButton extends Component {
//   render() {
//     return (
//       <ModalWrapper>
//         <div>
//           <p>

//           </p>
//         </div>

//         <input className="modal-state" id="modal-1" type="checkbox" />
//         <div className="modal">
//           <label className="modal__bg" htmlFor="modal-1"></label>
//           <div className="modal__inner">
//             <label className="modal__close" htmlFor="modal-1"></label>
//             <h2>Caaaats FTW!</h2>
//             <p>
//               Aliquam in sagittis nulla. Curabitur euismod diam eget risus
//               venenatis, sed dictum lectus bibendum. Nunc nunc nisi, hendrerit
//               eget nisi id, rhoncus rutrum velit. Nunc vel mauris dolor. Class
//               aptent taciti sociosqu ad litora torquent per conubia nostra, per
//               inceptos himenaeos. Aliquam fringilla quis nisi eget imperdiet.
//             </p>
//           </div>
//         </div>
//       </ModalWrapper>
//     );
//   }
// }
