import React from "react";

//header
import Header from "./Header/Header";

//main content
import Main from "./Main/Main";

//store
import Store from "../data/Store";

const App = (props) => {
  return (
    <>
      <Store>
        <Header />
        <Main />
      </Store>
    </>
  );
};

export default App;
