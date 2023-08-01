import React, { useContext } from "react";
import styled from "styled-components";
import FooterLink from "./FooterLink"
import { AiFillGithub, AiFillPrinter } from "react-icons/ai";
import ThemeContext from "../ThemeContext";

function Footer() {
  const theme = React.useContext(ThemeContext);

  const Footer = styled.div`
    padding: 4rem;
    display: flex;
  `;
  const FooterLinks = styled.div`
    display: block;
    width: 50%;
  `;
  const LinkIcon = styled.span`
    color: var(--accent-color);
    font-size: 1.25rem;
  `;
  const LinkText = styled.span`
    color: white;
    font-size: 1.25rem;
    line-height: 1.875rem;
    text-decoration: none;
  `;

  return (
    <Footer className="gradient">
      <FooterLinks>
        <FooterLink onClick={() => window.print()} className="no-print">
          <LinkIcon>
            <AiFillPrinter />
          </LinkIcon>
          <LinkText>{"Print this page"}</LinkText>
        </FooterLink>
        <FooterLink
          className="no-print"
          url="https://github.com/dramaturco/react-cv"
          newTab
        >
          <LinkIcon>
            <AiFillGithub />
          </LinkIcon>
          <LinkText>{"Source code"}</LinkText>
        </FooterLink>
      </FooterLinks>
    </Footer>
  );
}

export default Footer;
