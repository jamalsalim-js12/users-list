const SearchBar = ({ searchText, handleInputChange }) => {
  return (
    <input
      type="text"
      value={searchText}
      onChange={handleInputChange}
      placeholder="Search by username"
    />
  );
};

export default SearchBar;
