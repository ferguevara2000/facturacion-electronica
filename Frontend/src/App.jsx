"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar/sidebar.jsx";
import Header from "./components/Header/header.jsx";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="relative min-h-screen">
      <Header />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <main className={`pt-16 transition-all duration-300 ${isOpen ? "ml-64" : "ml-16"}`}>
        <div className="p-4">
          <h1 className="text-2xl font-bold">Contenido Principal</h1>
          <p>Este es el área de contenido principal de tu aplicación.</p>
        </div>
      </main>
    </div>
  );
}
