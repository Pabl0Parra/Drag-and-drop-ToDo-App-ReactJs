import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a className="t-branding" href="/">
          TODO
        </a>
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
