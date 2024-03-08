import { useEffect, useState } from "react";
import "./App.css";
import News from "./components/News";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  

  return (
    <>
      <News />
      <Navbar />
      <Main/>
    </>
  );
}

export default App;
