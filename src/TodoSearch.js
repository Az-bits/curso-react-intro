import "./TodoSearch.css";
function TodoSearch({ searchValue, setSearchValue, todos, setTodosFiltrados }) {
  return (
    <input
      type="text"
      placeholder="Cortar cebolla"
      className="TodoSearch"
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      value={searchValue}
    />
  );
}
export { TodoSearch };
