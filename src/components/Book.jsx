import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getBook, deleteBook } from "../data/data";

const Book = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const book = getBook(parseInt(id));

  const handleRemove = () => {
    deleteBook(book.id);
    navigate('/books' + location.search);
  }

  if (book) {
    return (
      <div style={{ padding: "1rem" }}>
        <h3>{book.name}</h3>
        <div style={{ padding: "1rem" }}>Price: {book.price}</div>
        <button onClick={handleRemove} style={{ margin: "1rem" }}>remove book</button>
      </div>
    );
  } else {
    return <div style={{ padding: "1rem" }}>There isn't this book. </div>;
  }
};

export default Book;
