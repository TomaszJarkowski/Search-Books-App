import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Book from "../../components/books/Book";

afterEach(cleanup);

test("render Book component", () => {
  const book = {
    volumeInfo: {
      title: "Lord of the rings",
      description:
        "A PBS Great American Read Top 100 Pick One Ring to rule them all",
      imageLinks:
        "http://books.google.com/books/content?id=yl4dILkcqm4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    },
  };
  render(<Book book={book} />);
});

test("if we render Book component without title we should be get message about about empty title", () => {
  const book = {
    volumeInfo: {
      title: "",
      description:
        "A PBS Great American Read Top 100 Pick One Ring to rule them all",
      imageLinks:
        "http://books.google.com/books/content?id=yl4dILkcqm4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    },
  };
  const { getByText } = render(<Book book={book} />);
  expect(getByText(/This book has not title/i)).toBeInTheDocument();
});

test("if we render Book component without description we should be get message about about empty description", () => {
  const book = {
    volumeInfo: {
      title: "Lord of the rings",
      description: "",
      imageLinks:
        "http://books.google.com/books/content?id=yl4dILkcqm4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    },
  };
  const { getByText } = render(<Book book={book} />);
  expect(getByText(/This book has not description/i)).toBeInTheDocument();
});

test("if we render Book component without img we should be get img with alt attribute default", () => {
  const book = {
    volumeInfo: {
      title: "Lord of the rings",
      description:
        "A PBS Great American Read Top 100 Pick One Ring to rule them all",
      imageLinks: "",
    },
  };
  render(<Book book={book} />);
  expect(screen.getByAltText(/book-default-img/i)).toBeTruthy();
});

test("if we render Book component should be get title", () => {
  const book = {
    volumeInfo: {
      title: "Lord of the rings",
      description:
        "A PBS Great American Read Top 100 Pick One Ring to rule them all",
      imageLinks:
        "http://books.google.com/books/content?id=yl4dILkcqm4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    },
  };
  const { getByText } = render(<Book book={book} />);
  expect(getByText(/Lord of the rings/i)).toBeInTheDocument();
});

test("if we render Book component should be get description", () => {
  const book = {
    volumeInfo: {
      title: "Lord of the rings",
      description:
        "A PBS Great American Read Top 100 Pick One Ring to rule them all",
      imageLinks:
        "http://books.google.com/books/content?id=yl4dILkcqm4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    },
  };
  const { getByText } = render(<Book book={book} />);
  expect(
    getByText(
      /A PBS Great American Read Top 100 Pick One Ring to rule them all/i
    )
  ).toBeInTheDocument();
});

test("if we render Book component should be get img with alt attribute book-img", () => {
  const book = {
    volumeInfo: {
      title: "Lord of the rings",
      description:
        "A PBS Great American Read Top 100 Pick One Ring to rule them all",
      imageLinks:
        "http://books.google.com/books/content?id=yl4dILkcqm4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    },
  };
  render(<Book book={book} />);
  expect(screen.getByAltText(/book-img/i)).toBeTruthy();
});

test("if we render Book component without props should be get error message", () => {
  const { getByText } = render(<Book />);
  expect(getByText(/Book is not found/i)).toBeInTheDocument();
});
