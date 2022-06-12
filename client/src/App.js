import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/Routes";
import Navbar from "./components/UI/navbar/Navbar";
import { AuthContext } from "./context";

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
        setIsAuth
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
