import React from "react";
import { styled } from "styled-components";

function Contact({ contactData }) {
  const Container = styled.div`
    background: #303030;
    color: white;
    font-size: 4rem;
    font-weight: 800;
    padding: 6rem 4rem;
  `;
  const Small = styled.span`
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 800;
    line-height: 1.875rem; /* 150% */
  `;
  const Blue = styled.span`
    color: #98c9e4;
  `;

  return (
    <Container>
      {contactData.motivation} <br/>
      <Small>
        <Blue>{contactData.phoneTitle}</Blue>
      </Small>
      <br/>
      {contactData.phone}
      <br/>
      <Small>
        <Blue>{contactData.emailTitle}</Blue>
      </Small>
      <br/>
      {contactData.email}
      <br/>
      <br/>
      <Blue>{contactData.goodBye}</Blue>
    </Container>
  );
}

export default Contact;
