const Image = () => {
  const imageUrl = new URL(
    'images/emre.jpg?as=webp&width=200',
    import.meta.url
  );
  return (
    <img src={imageUrl} width="200" height="200" alt="Emre Neumann"/>
  )
}
export default Image