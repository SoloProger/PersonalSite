import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import Routes from "./components/Routes";
import useAuth from "./hooks/useAuth";
import { AuthContext } from "./context/AuthContext";
import AuthNavbar from "./components/AuthNavbar";

export default function App() {
  const { token, login, logout, userID, ready } = useAuth();
  const isAuth = !!token;
  const routes = Routes(isAuth);

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        userID,
        isAuth,
      }}
    >
      <BrowserRouter>
        <div className="App">
          {isAuth ? <Navbar /> : <AuthNavbar />}
          {routes}
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
