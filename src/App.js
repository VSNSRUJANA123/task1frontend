import React from "react";
import UserForm from "./components/UserForm";
import AdminDashboard from "./components/AdminDashboard";
import AdminForm from "./components/AdminForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/admin" element={<AdminForm />} />
        <Route path="/user" element={<UserForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
