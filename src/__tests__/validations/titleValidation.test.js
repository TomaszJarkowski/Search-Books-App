import titleValidation from "../../validations/titleValidation";
import "@testing-library/react";
import "@testing-library/jest-dom";

it("if we give correct title we get true", () => {
  const title = "title";
  expect(titleValidation(title)).toBeTruthy();
});

it("if we give to small length title we get error message", () => {
  const title = "t";
  expect(() => {
    titleValidation(title);
  }).toThrow("The minimum title length is: 2");
});

it("if we give empty title we get error message", () => {
  const title = "";
  expect(() => {
    titleValidation(title);
  }).toThrow("You must enter a title");
});
