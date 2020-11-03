import React from "react";
import defaultBook from "../../assets/img/defaultBook.jpg";

const Title = ({ title }) => {
  if (title) {
    return <h2 className="book__title">{title}</h2>;
  }
  return <h2 className="book__title">This book has not title</h2>;
};

const Description = ({ text }) => {
  if (text) {
    if (text.length < 200) {
      return <p className="book__description">{text}</p>;
    }
    return <p className="book__description">{text.slice(0, 200)}...</p>;
  }
  return <p className="book__description">This book has not description</p>;
};

const Img = ({ src }) => {
  if (src) {
    return <img src={src.thumbnail} className="book__img" alt="book-img" />;
  }
  return <img src={defaultBook} className="book__img" alt="book-default-img" />;
};

const Book = React.forwardRef((props, ref) => {
  return (
    <>
      {props.book ? (
        <div className="book" ref={ref}>
          <Img src={props.book.volumeInfo.imageLinks} />
          <Title title={props.book.volumeInfo.title} />
          <Description text={props.book.volumeInfo.description} />
        </div>
      ) : (
        <h2>Book is not found</h2>
      )}
    </>
  );
});

export default Book;
