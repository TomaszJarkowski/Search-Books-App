import { BooksContext } from "../../context/BookContext";
import { render, screen } from "@testing-library/react";

import Language from "../../components/filters/Language";

test("render Language component without loading", () => {
  const books = [
    {
      volumeInfo: {
        language: "de",
      },
    },
    {
      volumeInfo: {
        language: "usa",
      },
    },
  ];
  render(
    <BooksContext.Provider value={{ books }}>
      <Language />
    </BooksContext.Provider>
  );
});

test("if we render Language component with books and not active loading we should be get list of languages", () => {
  const books = [
    {
      volumeInfo: {
        language: "pl",
      },
    },
    {
      volumeInfo: {
        language: "eng",
      },
    },
  ];
  const loading = false;

  const { getByText } = render(
    <BooksContext.Provider value={{ books, loading }}>
      <Language />
    </BooksContext.Provider>
  );

  expect(getByText(/pl/i)).toBeTruthy();
  expect(getByText(/eng/i)).toBeTruthy();
});

test("if we render Language component with books and active loading we should be get null", () => {
  const books = [
    {
      volumeInfo: {
        language: "pl",
      },
    },
    {
      volumeInfo: {
        language: "eng",
      },
    },
  ];
  const loading = true;
  render(
    <BooksContext.Provider value={{ books, loading }}>
      <Language />
    </BooksContext.Provider>
  );
  const text = screen.queryByText("Select Language");
  expect(text).toBeNull();
});

test("if we render Language component with empty books we should be get empty list of languages", () => {
  const books = [];
  const loading = false;

  const { getByText } = render(
    <BooksContext.Provider value={{ books, loading }}>
      <Language />
    </BooksContext.Provider>
  );
  const submitButton = screen.queryByText("pl");

  expect(getByText(/-/i)).toBeTruthy();
  expect(submitButton).toBeNull();
});
