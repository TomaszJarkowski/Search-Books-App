import logoPNG from "../../assets/img/TT.small.png";
const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Search Book App</h1>
      <img src={logoPNG} alt="logo-turtle" className="header__logo" />
    </header>
  );
};

export default Header;
