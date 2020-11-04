import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BooksContext } from "../../context/BookContext";
import SearchBooksForm from "../../components/books/SearchBooksForm";

describe("render SearchBooksForm component", () => {
  const fetchBooks = jest.fn();
  const setLoading = jest.fn();
  const setError = jest.fn();
  beforeEach(() => {
    render(
      <BooksContext.Provider value={(fetchBooks, setLoading, setError)}>
        <SearchBooksForm />
      </BooksContext.Provider>
    );
  });

  test("correct render ", () => {
    const text = screen.queryByText("Search");
    expect(text).toBeTruthy();
  });

  test("It should includes title after enter title in input", () => {
    const input = screen.getByLabelText("title");
    fireEvent.change(input, { target: { value: "Lord of the rings" } });
    expect(input.value).toBe("Lord of the rings");
  });

  test("if the title is empty, we should receive an error message", () => {
    const input = screen.getByLabelText("title");
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.click(screen.getByText("Search"));
    const text = screen.queryByText("You must enter a title");
    expect(text).toBeTruthy();
  });

  test("if the title is too short, we should receive an error message", () => {
    const input = screen.getByLabelText("title");
    fireEvent.change(input, { target: { value: "s" } });
    fireEvent.click(screen.getByText("Search"));
    const text = screen.queryByText("The minimum title length is: 2");
    expect(text).toBeTruthy();
  });
});
