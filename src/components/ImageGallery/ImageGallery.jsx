import { ImageCard } from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
export const ImageGallery = ({ images, openModal }) => {
  // const {urls:{small, regular}, likes, user: {name}} = images
  return (
    <>
      {images.length > 0 && (
        <ul className={s.gallery}>
          {images.map(image => (
            <ImageCard key={image.id} image={image} openModal={openModal} />
          ))}
        </ul>
      )}
    </>
  );
};
