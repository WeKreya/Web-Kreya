import { useEffect, useState } from "react";
import "./App.css";
import News from "./components/News";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import CtaFirst from "./components/CtaFirst";
import Order from "./components/Order";
import Package from "./components/Package";

function App() {
  return (
    <>
      {/* <News /> */}
      <Navbar />
      <Main/>
      <CtaFirst/>
      <Order/>
      <Package/>
    </>
  );
}

export default App;
