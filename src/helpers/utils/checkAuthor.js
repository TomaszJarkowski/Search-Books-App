const checkAuthor = (authorsArray, author) => {
  if (!author) {
    throw new Error("author is not correct");
  }
  if (!authorsArray || authorsArray.length === 0) {
    throw new Error("authorsArray is not correct");
  }

  const authorsToCheck = [];

  authorsArray.forEach((el) => {
    const authorToCheck = el.toLowerCase().split(" ");
    authorsToCheck.push(...authorToCheck);
  });

  if (authorsToCheck.includes(author.toLowerCase())) {
    return true;
  }
  return false;
};

export default checkAuthor;
