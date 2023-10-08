import React from "react";
import FooterLink from "./FooterLink";
import ThemeContext from "../ThemeContext";

function Footer() {
  const theme = React.useContext(ThemeContext);

  return (
    <footer className="gradient">
      <div className="footer-links">
        <FooterLink onClick={() => window.print()} className="no-print">
          <div className="link-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
            >
              <circle cx="19" cy="19" r="19" fill={theme.accentColor} />
              <path
                d="M20.8333 25.6667H15.3333V24.8333H20.8333V25.6667ZM30 13.1667V24H26.3333V29H11.6667V24H8V13.1667H11.6667V9H26.3333V13.1667H30ZM24.5 21.5H13.5V27.3333H24.5V21.5ZM24.5 10.6667H13.5V13.1667H24.5V10.6667ZM28.1667 15.25C28.1667 15.02 27.9613 14.8333 27.7083 14.8333C27.4553 14.8333 27.25 15.02 27.25 15.25C27.25 15.48 27.4553 15.6667 27.7083 15.6667C27.9613 15.6667 28.1667 15.48 28.1667 15.25ZM22.6667 23.1667H15.3333V24H22.6667V23.1667Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="link-text">{"Print this page"}</div>
        </FooterLink>
        <FooterLink
          className="no-print"
          url="https://github.com/dramaturco/react-cv"
          newTab
        >
          <div className="link-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="38"
              height="38"
              viewBox="0 0 38 38"
              fill="none"
            >
              <circle cx="19" cy="19" r="19" fill="white" />
              <path
                d="M19 0C8.5025 0 0 8.49369 0 18.9697C0 27.3527 5.4435 34.4616 12.9913 36.9672C13.9412 37.1459 14.2896 36.5594 14.2896 36.0551C14.2896 35.6046 14.2738 34.4111 14.2658 32.8302C8.98067 33.9748 7.866 30.2851 7.866 30.2851C7.0015 28.0957 5.75225 27.5108 5.75225 27.5108C4.03117 26.3347 5.88525 26.3584 5.88525 26.3584C7.79317 26.4912 8.79542 28.3123 8.79542 28.3123C10.4896 31.2131 13.243 30.3752 14.3292 29.8899C14.5002 28.6632 14.9894 27.827 15.5325 27.3527C11.3129 26.8785 6.878 25.2471 6.878 17.9785C6.878 15.9077 7.61425 14.2162 8.83342 12.8883C8.61967 12.4094 7.97842 10.4808 8.99967 7.86769C8.99967 7.86769 10.5909 7.35867 14.2247 9.81208C15.7447 9.39001 17.3597 9.18134 18.9747 9.17185C20.5897 9.18134 22.2047 9.39001 23.7247 9.81208C27.3347 7.35867 28.9259 7.86769 28.9259 7.86769C29.9472 10.4808 29.3059 12.4094 29.1159 12.8883C30.3272 14.2162 31.0634 15.9077 31.0634 17.9785C31.0634 25.2661 26.6222 26.8706 22.3947 27.3369C23.0597 27.906 23.6772 29.0695 23.6772 30.8463C23.6772 33.3851 23.6534 35.4244 23.6534 36.0409C23.6534 36.5388 23.9859 37.1316 24.9597 36.9419C32.5613 34.4537 38 27.3401 38 18.9697C38 8.49369 29.4928 0 19 0Z"
                fill={theme.accentColor}
              />
            </svg>
          </div>
          <div className="link-text">{"Source code"}</div>
        </FooterLink>
      </div>
    </footer>
  );
}

export default Footer;
