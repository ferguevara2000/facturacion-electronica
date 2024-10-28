"use client";

import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar/sidebar.jsx";
import Header from "./components/Header/header.jsx";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard.jsx";
import Products from "./pages/products.jsx";

export default function App() {
  const [theme, setTheme] = useState("light");

  // Cambia el tema y guarda en localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Lee el tema guardado en localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`relative min-h-screen ${theme}`}>
      <Header />
      <Sidebar toggleTheme={toggleTheme} theme={theme} isOpen={isOpen} toggleSidebar={toggleSidebar}/>
      <main className={`main-content pt-16 transition-all duration-300 ${isOpen ? "ml-64" : "ml-16"}`}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </main>
    </div>
  );
}
