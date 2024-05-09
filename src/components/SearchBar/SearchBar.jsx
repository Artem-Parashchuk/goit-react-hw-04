import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault(); 
    const form = e.target;
    const {search} = form.elements

    onSubmit({search: search.value})

    form.reset()
  };

  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={s.search_btn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;