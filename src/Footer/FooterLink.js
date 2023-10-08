const FooterLink = ({ url, onClick, className, children, newTab }) => {

  return (
    <div>
      <a
        href={url || "#"}
        onClick={(e) => {
          onClick && e.preventDefault;
          onClick(e);
        }}
        className={className}
        target={newTab ? "_blank" : "_self"}
      >
        {children}
      </a>
    </div>
  );
};
export default FooterLink;
