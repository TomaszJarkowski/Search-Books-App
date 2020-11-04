import authorValidation from "../../validations/authorValidation";
import "@testing-library/jest-dom";

it("if we give correct author we get true", () => {
  const author = "author";
  expect(authorValidation(author)).toBeTruthy();
});

it("if we give empty author we should get true", () => {
  const author = "";
  expect(authorValidation(author)).toBeTruthy();
});

it("if we give to small length author but not empty we get error message", () => {
  const author = "a";
  expect(() => {
    authorValidation(author);
  }).toThrow("The minimum author length is: 3");
});

it("if we give author but contain not only letters we get error message", () => {
  const author = "a ss  dasdas";
  expect(() => {
    authorValidation(author);
  }).toThrow("Author must contain only letters");
});

it("if we give author with special letters we get true", () => {
  const author = "ĄąććĆńńĆŃ";
  expect(() => {
    authorValidation(author);
  }).toBeTruthy();
});
