import { useState, useContext, useEffect } from "react";
import { BooksContext } from "../../context/BookContext";

const Language = () => {
  const { loading, filterByLanguage, books } = useContext(BooksContext);

  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (!books) {
      setOptions([]);
      return;
    }

    const languages = books.map((book) => book.volumeInfo.language);
    setOptions([...new Set(languages)]);
  }, [books]);

  const handleChange = ({ target }) => {
    filterByLanguage(target.value);
  };

  return (
    <>
      {!loading ? (
        <form className="options__item">
          <h3 className="option__title">Select language</h3>
          <select className="option__select" onChange={handleChange}>
            <option key={"firstOption"} value="null">
              -
            </option>
            {options
              ? options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))
              : null}
          </select>
        </form>
      ) : null}
    </>
  );
};

export default Language;
