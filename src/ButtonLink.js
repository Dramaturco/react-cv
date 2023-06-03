const ButtonLink = ({url, className, children}) => {
  return (
    <a href={url} className={className}>
      {children}
    </a>
  );
};
export default ButtonLink;
