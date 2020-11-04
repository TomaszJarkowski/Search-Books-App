import { BooksContext } from "../../context/BookContext";
import { render, screen } from "@testing-library/react";

import PublishedDate from "../../components/filters/PublishedDate";

test("render PublishedDate component", () => {
  const books = [
    {
      volumeInfo: {
        publishedDate: "2020",
      },
    },
    {
      volumeInfo: {
        publishedDate: "2024",
      },
    },
  ];
  render(
    <BooksContext.Provider value={{ books }}>
      <PublishedDate />
    </BooksContext.Provider>
  );
});

test("if we render PublishedDate component with books and not active loading we should be get list of date", () => {
  const books = [
    {
      volumeInfo: {
        publishedDate: "2020",
      },
    },
    {
      volumeInfo: {
        publishedDate: "2019",
      },
    },
  ];
  const loading = false;

  const { getByText } = render(
    <BooksContext.Provider value={{ books, loading }}>
      <PublishedDate />
    </BooksContext.Provider>
  );

  expect(getByText(/2020/i)).toBeTruthy();
  expect(getByText(/2019/i)).toBeTruthy();
});

test("if we render PublishedDate component with books and  active loading we should be get null", () => {
  const books = [
    {
      volumeInfo: {
        publishedDate: "2020",
      },
    },
    {
      volumeInfo: {
        publishedDate: "2019",
      },
    },
  ];
  const loading = true;
  render(
    <BooksContext.Provider value={{ books, loading }}>
      <PublishedDate />
    </BooksContext.Provider>
  );
  const text = screen.queryByText("Select Language");
  expect(text).toBeNull();
});

test("if we render PublishedDate component without books we should be get empty list of dates", () => {
  const books = [];
  const loading = false;

  const { getByText } = render(
    <BooksContext.Provider value={{ books, loading }}>
      <PublishedDate />
    </BooksContext.Provider>
  );
  const text = screen.queryByText("pl");

  expect(getByText(/-/i)).toBeTruthy();
  expect(text).toBeNull();
});
