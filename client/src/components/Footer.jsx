import React, { Component } from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  .section-footer {
    background-color: rgb(3, 3, 3);
    padding: 10rem 0 10rem 0;
    color: white;
  }
`;

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <section className="section-footer">Footer Goes Here</section>
      </FooterWrapper>
    );
  }
}
