import React from "react";
import Form from "../components/Form";
import Footer from "../components/Footer";
import News from "../components/News";
import Contact from "../components/Contact";
import Header from "../components/Header";

const MainPage = () => {
  return (
    <div>
      <Header />
      <Form />
      <News />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainPage;
