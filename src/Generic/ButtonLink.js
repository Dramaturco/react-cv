const ButtonLink = ({ url, onClick, className, children }) => {
  return (
    <a
      href={url || "#"}
      onClick={(e) => {
        onClick && e.preventDefault;
        onClick(e);
      }}
      className={className}
    >
      {children}
    </a>
  );
};
export default ButtonLink;
