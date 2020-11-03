import { useContext } from "react";
import { BooksContext } from "../../context/BookContext";
import Loading from "../layout/Loading";
import DefaultError from "../layout/DefaultError";
import Books from "./Books";
import EmptyBooksList from "../layout/EmptyBooksList";

const BooksList = () => {
  const { error, loading, isEmptyBooksList, recharging } = useContext(
    BooksContext
  );

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <DefaultError />
      ) : !isEmptyBooksList ? (
        <>
          <Books />
          {recharging && <Loading />}
        </>
      ) : (
        <EmptyBooksList />
      )}
    </>
  );
};

export default BooksList;
