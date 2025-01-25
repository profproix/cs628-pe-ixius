function ListItem({ title, genre, releaseYear }) {
  const clickHandler = () => alert(title);
  return (
    <div className="item" onClick={clickHandler}>
      <h4>{title}</h4>
      <p>Genre: {genre}</p>
      <p>Year: {releaseYear}</p>
    </div>
  );
}
export default ListItem;
