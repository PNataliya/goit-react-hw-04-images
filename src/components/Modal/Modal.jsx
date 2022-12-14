import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalImg, Img } from './Modal.styled';

export default function Modal({ onClose, alt, imageURL }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalImg>
        <Img src={imageURL} alt="" />
      </ModalImg>
    </Overlay>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  imageURL: PropTypes.string,
  alt: PropTypes.string,
};
