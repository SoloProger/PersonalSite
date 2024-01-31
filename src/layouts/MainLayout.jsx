import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "../context";
import Navbar from "../components/UI/navbar/Navbar";
import Routes from "../components/Routes";
import Form from "../components/Form";
import Footer from "../components/Footer";
import News from "../components/News";


const Mainlayout = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes />
          <Form />
          <News/>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default Mainlayout;