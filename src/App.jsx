import "./App.css";
import React from "react";
import Homepage from "./componets/Homepage";
import { Routes, Route } from "react-router-dom";
import Connect from "./componets/Connect";
import Error from "./componets/Error";
import AdminPage from "./componets/AdminPage";
function App() {
  return (
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="connect" element={<Connect />} />
      <Route path="error" element={<Error />} />
      <Route path="ad" element={<AdminPage />} />
    </Routes>
  );
}

export default App;
