const authorValidation = (author) => {
  const alphanumeric = /^[a-zA-ZĄąĘęÓóŁłŚśĄąŻżŹźĆćŃń]*$/gm;
  if (!author.match(alphanumeric)) {
    throw new Error("Author must contain only letters");
  }
  if (author.length >= 1 && author.length < 3) {
    throw new Error("The minimum author length is: 3");
  }
  return true;
};

export default authorValidation;
