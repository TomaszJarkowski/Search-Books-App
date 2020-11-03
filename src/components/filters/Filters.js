import Author from "./Author";
import Language from "./Language";
import PublishedDate from "./PublishedDate";

const Options = () => {
  return (
    <div className="filters">
      <h2 className="filters__title">Filters</h2>
      <div className="filters__items">
        <Author />
        <Language />
        <PublishedDate />
      </div>
    </div>
  );
};

export default Options;
