import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import s from "./App.module.css";

import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMore from "./components/LoadMore/LoadMore";
import ImageModal from "./components/ImageModal/ImageModal";

const keyAPI = "WKli3wttg-uhYyMLkReoepogmY-anSbVwOc3NCAnzRo";

function App() {
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [largeImage, setLargeImage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (!value) {
      return;
    }
    async function fetchPhoto(query, page) {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://api.unsplash.com/search/photos?page=${page}&query=${query}&orientation=landscape&client_id=${keyAPI}`
        );
        setImages((prev) => [...prev, ...res.data.results]);
        setShowBtn(page < Math.ceil(res.data.total / 10));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchPhoto(value.search, page);
  }, [value, page]);

  const handleSubmit = (value) => {
    setValue(value);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };
  const isOpenModal = (largeImage) => {
    setLargeImage(largeImage);
    setModalIsOpen(true);
  };
  const isCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className={s.wrapper}>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && (
        <ImageGallery
          openModal={isOpenModal}
          images={images}
        />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {showBtn && <LoadMore handleClick={handleLoadMore} />}
      {largeImage && (
        <ImageModal
          closeModal={isCloseModal}
          modalIsOpen={modalIsOpen}
          largeImage={largeImage}
        />
      )}
    </div>
  );
}

export default App;
