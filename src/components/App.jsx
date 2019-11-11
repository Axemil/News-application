import React from "react";
import "../assets/sass/App.scss";
import "../assets/sass/normalize.scss";
import Header from "./Blocks/Header";
import Main from "./Blocks/Main";
import Footer from "./Blocks/Footer";

const App = () => {
  return (
    <div className="wrapper">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
};

export default App;
