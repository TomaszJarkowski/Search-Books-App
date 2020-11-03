const titleValidation = (title) => {
  if (!title) {
    throw new Error("You must enter a title");
  }
  if (title.length <= 1) {
    throw new Error("The minimum title length is: 2");
  }
  return true;
};

export default titleValidation;
