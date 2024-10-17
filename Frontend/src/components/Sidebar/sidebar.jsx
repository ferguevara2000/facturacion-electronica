"use client";

import { useState } from "react";
import { Menu, X, Home, User, Settings, LogOut, Sun, Moon, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const { theme, setTheme } = useTheme();
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  const menuItems = [
    {
      icon: <Home className="h-5 w-5" />,
      label: "Inicio",
      href: "#",
      submenu: null,
    },
    {
      icon: <User className="h-5 w-5" />,
      label: "Perfil",
      href: "#",
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
        className="fixed top-4 left-4 z-50"
        onClick={toggleSidebar}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-background shadow-lg transform transition-all duration-300 ease-in-out ${isOpen ? "w-64" : "w-16"}`}
      >
        <nav className="p-4 mt-16">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.submenu ? (
                  <div>
                    <a
                      href={isOpen ? item.href : "#"} // Solo habilitar el enlace si el sidebar está abierto
                      className="flex items-center p-2 rounded hover:bg-accent"
                      onClick={() => isOpen && toggleSubmenu(index)} // Solo permitir abrir el submenú si el sidebar está abierto
                    >
                      {item.icon}
                      <span className={`ml-2 ${isOpen ? "block" : "hidden"}`}>
                        {item.label}
                      </span>
                      {isOpen && (
                        openSubmenu === index ? (
                          <ChevronUp className="h-4 w-4 ml-auto" />
                        ) : (
                          <ChevronDown className="h-4 w-4 ml-auto" />
                        )
                      )}
                    </a>
                    <ul className={`pl-4 mt-2 ${openSubmenu === index ? "block" : "hidden"} transition-all duration-300 ease-in-out`}>
                      {item.submenu.map((subitem, subindex) => (
                        <li key={subindex}>
                          <a
                            href={subitem.href}
                            className="flex items-center p-2 rounded hover:bg-accent"
                          >
                            {subitem.icon}
                            <span className={`ml-2 ${isOpen ? "block" : "hidden"}`}>
                              {subitem.label}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="flex items-center p-2 rounded hover:bg-accent"
                  >
                    {item.icon}
                    <span className={`ml-2 ${isOpen ? "block" : "hidden"}`}>
                      {item.label}
                    </span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <Button
          variant="outline"
          size="icon"
          className={`absolute bottom-4 ${isOpen ? "left-4" : "left-2"}`}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
}
