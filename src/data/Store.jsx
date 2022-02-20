import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useCallback,
} from "react";

export const AppContext = createContext(null);

const Store = (props) => {
  const [modalState, setModalState] = useState(false);
  const [openModalState, setOpenModalState] = useState(false);
  const ModalRef = useRef(null);
  const ModalSuccessRef = useRef(null);

  //ModalSuccess
  const handleCloseModalSuccess = useCallback(() => {
    if (modalState === false) {
      ModalSuccessRef.current.classList.remove("fadeOutModal");
      ModalSuccessRef.current.classList.add("fadeInModal");
      ModalSuccessRef.current.style.display = "block";
      ModalRef.current.style.display = "none";
      return setModalState(true);
    } else {
      return setModalState(false);
    }
  }, [modalState]);

  //AboutArea
  const handleOpenModal = useCallback(() => {
    if (openModalState === false) {
      ModalRef.current.classList.remove("fadeOutModal");
      ModalRef.current.classList.add("fadeInModal");
      ModalRef.current.style.display = "block";
      return setOpenModalState(true);
    } else {
      return setOpenModalState(false);
    }
  }, [openModalState]);

  //ModalTitle
  const handleCloseModal = useCallback(() => {
    ModalRef.current.classList.remove("fadeInModal");
    ModalRef.current.classList.add("fadeOutModal");

    setTimeout(() => {
      ModalRef.current.style.display = "none";
    }, 999);
  }, []);

  return (
    <>
      <AppContext.Provider
        value={{
          ModalRef,
          ModalSuccessRef,
          handleModal: (e) => handleCloseModalSuccess(e),
          openModal: (e) => handleOpenModal(e),
          closeModalMain: (e) => handleCloseModal(e),
        }}
      >
        {props.children}
      </AppContext.Provider>
    </>
  );
};

export function useModal() {
  const context = useContext(AppContext);
  const { ModalRef, ModalSuccessRef } = context;
  return { ModalRef, ModalSuccessRef };
}

export default Store;
