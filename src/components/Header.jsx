import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="header">
      <SearchBar />
      <button className="add">Add New User</button>
    </header>
  );
};

export default Header;
