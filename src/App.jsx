import "./App.css";
import React from "react";
import Homepage from "./componets/Homepage";
import { Routes, Route } from "react-router-dom";
import Connect from "./componets/Connect";
import AdminPage from "./componets/AdminPage";
import Passwordpage from "./componets/Passwordpage";
import ErrorPage from "./componets/ErrorPage";
import ErrorAdmin from "./componets/ErrorAdmin";



function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="connect" element={<Connect />} />
      <Route path="admin" element={<AdminPage />} />
    </Routes>
  );
}

export default App;
