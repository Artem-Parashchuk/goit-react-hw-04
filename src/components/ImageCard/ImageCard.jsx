import s from './ImageCard.module.css'
import { FcLike } from "react-icons/fc";

export const ImageCard = ({ image, openModal }) => {
  const {
    urls: { small, regular },
    likes,
    alt_description,
    user: { name },
  } = image;

  return (
    <li className={s.item}>
      <div className={s.wrapper_img}>
        <img className={s.img}
          onClick={()=>openModal(regular)}
          src={small}
          alt={alt_description}
        />
      </div>
      <div className={s.wrapper_description}>
        <span className={s.likes}><FcLike /> {likes}</span>
        <p className={s.owner}>{name}</p>
      </div>
    </li>
  );
};
