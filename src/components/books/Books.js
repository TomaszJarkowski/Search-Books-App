import { useContext, useState, useEffect, useCallback, useRef } from "react";
import { BooksContext } from "../../context/BookContext";
import Book from "./Book";
import EmptyBooksList from "../layout/EmptyBooksList";
import checkAuthor from "../../helpers/utils/checkAuthor";

const Books = () => {
  const { page, books, setPage, language, author, publishedDate } = useContext(
    BooksContext
  );

  const [booksToDisplay, setbooksToDisplay] = useState([]);

  useEffect(() => {
    setbooksToDisplay(books);
    let copyBooks = [...books];

    if (author) {
      const booksAuthorFilter = books.filter((el) => {
        if (el.volumeInfo.authors) {
          if (checkAuthor(el.volumeInfo.authors, author)) {
            return el;
          }
        }
      });
      copyBooks = [...booksAuthorFilter];
      setbooksToDisplay(copyBooks);
    }

    if (language !== "null" && language) {
      const booksLanguageFilter = copyBooks.filter((el) => {
        if (el.volumeInfo.language) {
          if (el.volumeInfo.language === language) {
            return el;
          }
        }
      });
      copyBooks = [...booksLanguageFilter];
      setbooksToDisplay(copyBooks);
    }

    if (publishedDate !== "null" && publishedDate) {
      const booksPublishDateFilter = copyBooks.filter((el) => {
        if (el.volumeInfo.publishedDate) {
          if (el.volumeInfo.publishedDate.slice(0, 4) === publishedDate) {
            return el;
          }
        }
      });
      copyBooks = [...booksPublishDateFilter];
      setbooksToDisplay(copyBooks);
    }
  }, [page, books, language, publishedDate, author]);

  const observer = useRef();

  const lastBookElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPageNumber) => prevPageNumber + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  return (
    <div className="books">
      {booksToDisplay.length > 0 ? (
        booksToDisplay.map((book, index) => {
          if (booksToDisplay.length === index + 1) {
            return (
              <Book ref={lastBookElementRef} key={book.etag} book={book} />
            );
          }
          return <Book key={book.etag} book={book} />;
        })
      ) : (
        <EmptyBooksList />
      )}
    </div>
  );
};

export default Books;
