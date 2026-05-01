function SearchBar({ onSearch }) {
  return (
    <input
      placeholder="Search products..."
      onChange={(e)=>onSearch(e.target.value)}
      className="w-full max-w-md border p-2 rounded shadow focus:ring-2 focus:ring-blue-400"
    />
  );
}
export default SearchBar;