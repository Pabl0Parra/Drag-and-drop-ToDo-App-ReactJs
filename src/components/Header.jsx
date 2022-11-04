import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>TODO</h1>
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
