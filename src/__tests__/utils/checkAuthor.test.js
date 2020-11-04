import checkAuthor from "../../helpers/utils/checkAuthor";
import "@testing-library/jest-dom";

it("if we give correct author of book we get true", () => {
  const authorsArray = ["tolkien random"];
  const author = "Tolkien";
  expect(checkAuthor(authorsArray, author)).toBeTruthy();
});

it("if we give empty author we get error", () => {
  const authorsArray = ["tolkien random"];
  const author = "";
  expect(() => {
    checkAuthor(authorsArray, author);
  }).toThrow("author is not correct");
});

it("if we give empty authors of book we get error", () => {
  const authorsArray = [];
  const author = "Tolkien";
  expect(() => {
    checkAuthor(authorsArray, author);
  }).toThrow("authorsArray is not correct");
});

it("if we give author who not be author this book we get false", () => {
  const authorsArray = ["tolkien random"];
  const author = "Rowling";
  expect(checkAuthor(authorsArray, author)).toBeFalsy();
});
