import styled from '@emotion/styled';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  display: flex;

  background-color: #fff;
  padding: 20px;
`;

export function Modal({ isOpen, onClose, children }){
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <div>
          {children}
        </div>
        <button onClick={onClose}>Cerrar</button>
      </ModalContainer>
    </ModalOverlay>
  );
};
