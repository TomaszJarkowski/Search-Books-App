import { BooksContext } from "../../context/BookContext";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../../components/filters/Author";

test("render Filter component without loading", () => {
  const loading = false;
  render(
    <BooksContext.Provider value={{ loading }}>
      <Filter />
    </BooksContext.Provider>
  );
});

test("if we render Filter component with active loading we should be get null", () => {
  const loading = true;
  render(
    <BooksContext.Provider value={{ loading }}>
      <Filter />
    </BooksContext.Provider>
  );
  const submitButton = screen.queryByText("Filter");
  expect(submitButton).toBeNull();
});

const setupFilterComponent = () => {
  const loading = false;
  const utils = render(
    <BooksContext.Provider value={{ loading }}>
      <Filter />
    </BooksContext.Provider>
  );
  const input = utils.getByLabelText("author");
  return {
    input,
    ...utils,
  };
};

test("if we enter author in input we should be get this author", () => {
  const { input } = setupFilterComponent();
  fireEvent.change(input, { target: { value: "Tolkien" } });
  expect(input.value).toBe("Tolkien");
});
