import { styled } from "styled-components";
const FooterLink = ({ url, onClick, className, children, newTab }) => {
  const Link = styled.a`
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    cursor: pointer;
    width: 20rem;
  `;

  return (
    <div>
      <Link
        href={url || "#"}
        onClick={(e) => {
          onClick && e.preventDefault;
          onClick(e);
        }}
        className={className}
        target={newTab ? "_blank" : "_self"}
      >
        {children}
      </Link>
    </div>
  );
};
export default FooterLink;
