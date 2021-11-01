import React from "react";

export const AppContext = React.createContext(null);

const Store = (props) => {
  //ModalSuccess
  function closeModalSuccess() {
    let n = 1;
    if (n === 1) {
      document.querySelector(".modal-success").classList.remove("fadeOutModal");
      document.querySelector(".modal-success").classList.add("fadeInModal");
      document.querySelector(".modal-success").style.display = "block";
      document.querySelector(".modal").style.display = "none";
      return (n = 0);
    } else {
      return (n = 1);
    }
  }

  //AboutArea
  function openModal() {
    let n = 1;
    if (n === 1) {
      document.querySelector(".modal").classList.remove("fadeOutModal");
      document.querySelector(".modal").classList.add("fadeInModal");
      document.querySelector(".modal").style.display = "block";
      return (n = 0);
    } else {
      return (n = 1);
    }
  }

  //ModalTitle
  function closeModal() {
    document.querySelector(".modal").classList.remove("fadeInModal");
    document.querySelector(".modal").classList.add("fadeOutModal");

    setTimeout(() => {
      document.querySelector(".modal").style.display = "none";
    }, 999);
  }

  return (
    <>
      <AppContext.Provider
        value={{
          handleModal: (e) => closeModalSuccess(e),
          openModal: (e) => openModal(e),
          closeModalMain: (e) => closeModal(e),
        }}
      >
        {props.children}
      </AppContext.Provider>
    </>
  );
};

export default Store;
