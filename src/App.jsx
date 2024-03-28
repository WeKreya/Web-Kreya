import { useEffect, useState } from "react";
import "./App.css";
import News from "./components/News";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import CtaFirst from "./components/CTA/First/CtaFirst";
import Order from "./components/Order/Order";
import Package from "./components/Package/Package";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import CtaJet from "./components/CTA/Jet/CtaJet";
import Template from "./components/Template/Template";

function App() {
  return (
    <>
      {/* <News /> */}
      <Navbar />
      <Main/>
      <CtaFirst/>
      <Order/>
      <Package/>
      <Template/>
      <Form/>
      <CtaJet/>
      <Footer/>
    </>
  );
}

export default App;
