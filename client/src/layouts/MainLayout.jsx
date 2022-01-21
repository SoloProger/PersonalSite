import React from "react";
import Navbar from "../components/UI/navbar/Navbar";
import Routes from "../components/Routes";
import Form from "../components/Form";
import Footer from "../components/Footer";
import News from "../components/News";

const MainLayout = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes />
      <Form />
      <News />
      <Footer />
    </div>
  );
};

export default MainLayout;
