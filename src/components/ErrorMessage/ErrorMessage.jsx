import s from './ErrorMessage.module.css'
const ErrorMessage = () => {
  return (
    <div className={s.wrapper_error}>
      <p className={s.error_text}>Упс... щось пішло не так 😞</p>
      <p className={s.error_text}>Ми працюємо над цим 😉</p>
    </div>
  );
};

export default ErrorMessage;
