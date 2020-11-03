import { useState, useContext, useEffect } from "react";
import { BooksContext } from "../../context/BookContext";

const PublishedDate = () => {
  const { filterByDate, loading, books } = useContext(BooksContext);

  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (!books) {
      setOptions([]);
      return;
    }

    const dates = books.map((book) => {
      if (book.volumeInfo.publishedDate) {
        return Number(book.volumeInfo.publishedDate.slice(0, 4));
      }
    });

    const datesFilter = dates.filter((date) => date);
    const datesWithoutReapiting = [...new Set(datesFilter)];
    const datesSort = datesWithoutReapiting.sort((a, b) => {
      return a - b;
    });

    setOptions(datesSort);
  }, [books]);

  const handleChange = (e) => {
    filterByDate(e.target.value);
  };

  return (
    <>
      {!loading ? (
        <form className="filters__item">
          <h3 className="filter__title">Select published date</h3>
          <select className="filter__select" onChange={handleChange}>
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

export default PublishedDate;
