import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const { search } = form.elements;

    if (search.value === "") {
       toast.error("Поле для пошуку має бути заповненим");
       return
    }
    onSubmit({ search: search.value });

    form.reset();
  };

  return (
   <> <header className={s.header}>
      <form
        className={s.form}
        onSubmit={handleSubmit}
      >
        <input
          className={s.input}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button
          className={s.search_btn}
          type="submit"
        >
          Search
        </button>
      </form>
    </header>
    <div><Toaster
      position="top-center"
      reverseOrder={false}/></div>
    </>
  );
};

export default SearchBar;
