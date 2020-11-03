import { createContext, useState, useEffect } from "react";

export const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [recharging, setRecharging] = useState(false);
  const [error, setError] = useState(false);
  const [author, setAuthor] = useState("");
  const [language, setLanguage] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [allBooksFetched, setAllBookFetched] = useState(false);
  const [isEmptyBooksList, setIsEmptyBooksList] = useState(false);

  useEffect(() => {
    if (isSearched) {
      setPublishedDate("");
      setAuthor("");
      setLanguage("");
      setAllBookFetched(false);
      setLoading(true);
      setError(false);
      setIsEmptyBooksList(false);
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&startIndex=0`
      )
        .then((response) => response.json())
        .then((response) => {
          if (response.items.length < 10) {
            setAllBookFetched(true);
          }
          setBooks(response.items);
          setLoading(false);
          setPage(1);
        })
        .catch((e) => {
          setLoading(false);
          if (e.message === "Cannot read property 'length' of undefined") {
            setIsEmptyBooksList(true);
          } else {
            setError(true);
          }
        });
    }
  }, [title]);

  useEffect(() => {
    if (isSearched && !allBooksFetched) {
      const howManyBooks = Math.floor(page * 10);
      setError(false);
      setRecharging(true);
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&startIndex=${howManyBooks}`
      )
        .then((response) => response.json())
        .then((response) => {
          if (response.items.length < 10) {
            setAllBookFetched(true);
          }
          const newArrayWithBooks = [...books, ...response.items.map((b) => b)];
          setBooks(newArrayWithBooks);
          setRecharging(false);
        })
        .catch((e) => {
          setRecharging(false);
          if (e.message === "Cannot read property 'length' of undefined") {
            setAllBookFetched(true);
          } else {
            setError(true);
          }
        });
    }
  }, [page]);

  const filterByAuthor = (filter) => {
    setAuthor(filter);
  };
  const filterByLanguage = (filter) => {
    setLanguage(filter);
  };
  const filterByDate = (filter) => {
    setPublishedDate(filter);
  };

  return (
    <BooksContext.Provider
      value={{
        page,
        books,
        loading,
        error,
        author,
        language,
        publishedDate,
        isSearched,
        isEmptyBooksList,
        recharging,
        setIsSearched,
        filterByDate,
        filterByLanguage,
        filterByAuthor,
        setPage,
        setLoading,
        setError,
        setTitle,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;
