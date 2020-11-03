import Author from "./Author";
import Language from "./Language";
import PublishedDate from "./PublishedDate";

const Options = () => {
  return (
    <div className="options">
      <h2 className="options__title">Filters</h2>
      <div className="options__items">
        <Author />
        <Language />
        <PublishedDate />
      </div>
    </div>
  );
};

export default Options;
