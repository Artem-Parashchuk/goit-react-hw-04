import s from './ImageModal.module.css'
import Modal from "react-modal";
const customStyles = {
  overlay: {
    backgroundColor: "#575757",
  },
  content: {
    width: "50%",
    height: "80%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: "none",
    borderRadius: 0,
    overflow: "hidden",
  },
};

Modal.setAppElement("#root");
const ImageModal = ({ largeImage, modalIsOpen, closeModal }) => {
  return (
      <Modal className={s.modal}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button className={s.btn} onClick={closeModal}>close</button>
        <div>
          <img className={s.img}
            src={largeImage}
            alt="modal image"
          />
        </div>
      </Modal>
  );
};

export default ImageModal;
