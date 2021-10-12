import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./context";
import Navbar from "./components/UI/navbar/Navbar";
import Routes from "./components/Routes";
import Form from "./components/Form";
import Footer from "./components/Footer";

export default function App() {
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
          <Footer/>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
