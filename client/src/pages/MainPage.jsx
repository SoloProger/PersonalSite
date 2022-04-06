import React from "react";
import Header from "../components/Blocs/Header";
import News from "../components/Blocs/News";
import Contacts from "../components/Blocs/Contacts";
import Footer from "../components/Blocs/Footer";
import LatestPost from "../components/Blocs/LatestPost";

const MainPage = () => {
  return (
    <div>
      <Header />
      <LatestPost/>
      <News />
      <Contacts />
      <Footer />
    </div>
  );
};

export default MainPage;
