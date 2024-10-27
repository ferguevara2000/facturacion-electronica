"use client";

import { useState } from "react";
import { Menu, X, Home, Settings, LogOut, ChevronDown, ChevronUp, PackageSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; // Importa Link para la navegación
import { useTheme } from "next-themes";

export default function Sidebar({ isOpen, toggleSidebar, toggleTheme, theme }) {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const menuItems = [
    {
      icon: <Home className="h-5 w-5" />,
      label: "Inicio",
      href: "/", // Ruta para el Dashboard
      submenu: null,
    },
    {
      icon: <PackageSearch className="h-5 w-5" />,
      label: "Productos",
      href: "/products", // Ruta para Productos
      submenu: null,
    },
    {
      icon: <Settings className="h-5 w-5" />,
      label: "Configuración",
      href: "#",
      submenu: [
        { icon: <Settings className="h-5 w-5" />, label: "General", href: "#" },
        { icon: <Settings className="h-5 w-5" />, label: "Privacidad", href: "#" },
        { icon: <Settings className="h-5 w-5" />, label: "Notificaciones", href: "#" },
      ],
    },
    {
      icon: <LogOut className="h-5 w-5" />,
      label: "Cerrar sesión",
      href: "#",
      submenu: null,
    },
  ];

  return (
    <div>
      {/* Sidebar Toggle Button */}
      <Button
        variant="outline"
        size="icon"
        className="header fixed top-4 left-4 z-50"
        onClick={toggleSidebar}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Sidebar */}
      <div
        className={`sidebar fixed top-0 left-0 h-full bg-background shadow-lg transform transition-all duration-300 ease-in-out ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        <nav className="p-4 mt-16">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.submenu ? (
                  <div>
                    <div>
                      <button
                        onClick={() => isOpen && toggleSubmenu(index)} // Abre el submenú solo si el sidebar está abierto
                        className="flex items-center p-2 rounded hover:bg-accent w-full text-left"
                      >
                        {item.icon}
                        <span className={`ml-2 ${isOpen ? "block" : "hidden"}`}>{item.label}</span>
                        {isOpen && (
                          openSubmenu === index ? (
                            <ChevronUp className="h-4 w-4 ml-auto" />
                          ) : (
                            <ChevronDown className="h-4 w-4 ml-auto" />
                          )
                        )}
                      </button>
                    </div>
                    {isOpen && openSubmenu === index && (
                      <ul className="pl-4 mt-2 space-y-1">
                        {item.submenu.map((subitem, subindex) => (
                          <li key={subindex}>
                            <Link
                              to={subitem.href}
                              className="flex items-center p-2 rounded hover:bg-accent"
                            >
                              {subitem.icon}
                              <span className="ml-2">{subitem.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href} // Cambiado a Link
                    className="flex items-center p-2 rounded hover:bg-accent"
                  >
                    {item.icon}
                    <span className={`ml-2 ${isOpen ? "block" : "hidden"}`}>{item.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
