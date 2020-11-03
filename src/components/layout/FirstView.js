import bookshelvesSVG from "../../assets/svg/undraw_Bookshelves_re_lxoy.svg";

const FirstView = () => {
  return (
    <div className="firstView">
      <h2 className="firstView__title">Welcome in Book Search App</h2>
      <h3 className="firstView__info">
        Enter the title in the field above and start searching for books
      </h3>
      <img
        src={bookshelvesSVG}
        alt="first view svg"
        className="firstView__svg"
      />
    </div>
  );
};

export default FirstView;
