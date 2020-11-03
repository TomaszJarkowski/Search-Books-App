import { useContext } from "react";
import Header from "./components/layout/Header";
import SearchBooksForm from "./components/books/SearchBooksForm";
import BooksList from "./components/books/BooksList";
import Footer from "./components/layout/Footer";
import FirstView from "./components/layout/FirstView";
import { BooksContext } from "./context/BookContext";

const App = () => {
  const { isSearched } = useContext(BooksContext);

  return (
    <>
      <Header />
      <SearchBooksForm />
      {!isSearched ? (
        <FirstView />
      ) : (
        <>
          <BooksList />
        </>
      )}
      <Footer />
    </>
  );
};

export default App;
