import { useState, useContext } from "react";
import { BooksContext } from "../../context/BookContext";
import authorValidation from "../../validations/authorValidation";
const Author = () => {
  const { filterByAuthor, loading } = useContext(BooksContext);

  const [author, setAuthor] = useState("");
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setIsError(false);
    setError("");

    try {
      authorValidation(author);
    } catch (e) {
      setIsError(true);
      setError(e.message);
      return;
    }

    filterByAuthor(author);
  };

  return (
    <>
      {!loading ? (
        <form onSubmit={submit} className="options__item">
          <h3 className="option__title">Enter author</h3>
          <input
            type="text"
            className="option__input"
            onChange={(e) => setAuthor(e.target.value)}
            aria-label="author"
          />
          <button type="submit" className="option__btn btn">
            Filter
          </button>
          {isError ? (
            <p className="option__error error-message">{error}</p>
          ) : null}
        </form>
      ) : null}
    </>
  );
};

export default Author;
