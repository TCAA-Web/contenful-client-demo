export const ImageCard = ({ url, alt, caption }) => {
  return (
    <figure>
      <img src={url} alt={alt} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
};
