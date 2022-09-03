import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: ${(props) => props.theme.color.overlayColor};
  z-index: 98;
`;

const Modal = styled.div`
  position: relative;
  border-radius: 0.3rem;
  background: ${(props) => props.theme.color.secondLayer};
  box-shadow: ${(props) => props.theme.color.shadow};
  text-align: left;
  width: 850px;
  max-width: 90%;
  user-select: text;
  z-index: 100;

  h2 {
    margin: 0;
  }

  .download-button {
    min-width: 165px;
  }

  @media (max-width: 500px) {
    max-width: 100%;
    width: 100%;
    height: 100%;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 0.5px solid ${(props) => props.theme.color.border};
  color: ${(props) => props.theme.color.text};

  svg {
    color: ${(props) => props.theme.color.text};
  }
`;

export { Wrapper, Overlay, Modal, ModalHeader };
