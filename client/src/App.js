import React from "react";
import { BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import Routes from "./components/Routes";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes />
      </div>
    </BrowserRouter>
  );
}
