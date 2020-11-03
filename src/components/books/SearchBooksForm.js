import { useState, useContext } from "react";
import { BooksContext } from "../../context/BookContext";
import titleValidation from "../../validations/titleValidation";

const SearchBooksForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [isErrorValid, setIsErrorValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { setTitle, setIsSearched } = useContext(BooksContext);

  const submit = (e) => {
    e.preventDefault();

    setIsErrorValid(false);
    setErrorMessage("");

    try {
      titleValidation(inputValue);
    } catch (e) {
      setIsErrorValid(true);
      setErrorMessage(e.message);
      return;
    }

    setIsSearched(true);
    setTitle(inputValue);
  };

  return (
    <div className="form">
      <h2 className="form__title">Enter the title of the book</h2>
      <form className="form__searchForm" onSubmit={submit}>
        <input
          type="text"
          value={inputValue}
          aria-label="title"
          className="serchForm__input"
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button type="submit" className="serchForm__button btn">
          Search
        </button>
      </form>
      {isErrorValid ? (
        <p className="serchForm__errorMessage error-message">{errorMessage}</p>
      ) : null}
    </div>
  );
};

export default SearchBooksForm;
