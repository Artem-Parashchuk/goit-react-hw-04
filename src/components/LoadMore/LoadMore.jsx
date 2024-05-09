import s from './LoadMore.module.css'
const LoadMore = ({handleClick}) => {
  return (
    <button type="button" onClick={() => handleClick()} className={s.btn}>Load more...</button>
  )
}

export default LoadMore