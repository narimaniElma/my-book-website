import { NavLink, Outlet, useSearchParams, useLocation } from "react-router-dom";
import { getBooks } from "../data/data";

const Books = () => {
  const books = getBooks();
  const [searchedBook, setSearchedBook] = useSearchParams();
  const userSearch = useLocation();

  let searchedValue = searchedBook.get("searched");

  const handleChangeInput = (event) => {
    let searched = event.target.value;
    if (searched) {
      setSearchedBook({ searched });
    } else {
      setSearchedBook({});
    }
  };

  const handleSearchResult = (book) => {
    if(!searchedValue) return true;
    let bookName = book.name.toLowerCase();
    return bookName.startsWith(searchedValue.toLowerCase());
  };

  return (
    <div style={{ display: "flex" }}>
      <nav style={{ padding: "2rem 1rem", borderRight: "1px solid" }}>
        <input
          value={searchedValue || ""}
          onChange={handleChangeInput}
          style={{ padding: "1rem" }}
          type="text"
          placeholder="Search book"
        />
        {books.filter(handleSearchResult).map((book) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                padding: "1rem",
                fontSize: 20,
                fontWeight: "bold",
                color: isActive ? "green" : "",
              };
            }}
            to={`/books/${book.id}${userSearch.search}`}
            key={book.id}
          >
            {book.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
};

export default Books;
