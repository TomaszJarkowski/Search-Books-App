import { useContext } from "react";
import { BooksContext } from "./context/BookContext";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import FirstView from "./components/layout/FirstView";

import SearchBooksForm from "./components/books/SearchBooksForm";

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
          <p>Filters and books</p>
        </>
      )}
      <Footer />
    </>
  );
};

export default App;
