import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AppRouter from "./components/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <div className="content">
        <AppRouter />
      </div>
    </Router>
  );
}
