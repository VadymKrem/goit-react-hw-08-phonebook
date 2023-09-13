import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { ModalWindow, Overlay } from './Modal.styled';

export const Modal = ({ children, onCloseModal }) => {
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onCloseModal]);

  const handleBackdropClick = ({ target, currentTarget }) => {
    if (currentTarget === target) {
      onCloseModal();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>{children}</ModalWindow>
    </Overlay>
  );
};

Modal.propTypes = {
  children: PropTypes.node,
  onCloseModal: PropTypes.func,
};
