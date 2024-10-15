import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen }) {
  
  const [activeTab, setActiveTab] = useState(null);

  // Array con la información de los elementos del menú
  const menuItems = [
    {
      id: 0,
      label: 'Home',
      icon: 'bi-house',
      link: '/',
      submenu: null, // No tiene submenú
    },
    {
      id: 1,
      label: 'Productos',
      icon: 'bi-columns-gap',
      link: '/products',
      submenu: null, // No tiene submenú
    },
    {
      id: 2,
      label: 'Menu Desp.',
      icon: 'bi-columns-gap',
      link: null, // No es un enlace directo, es un menú desplegable
      submenu: [
        { label: 'SubMenu 1', link: '#' },
        { label: 'SubMenu 2', link: '#' },
        { label: 'SubMenu 3', link: '#' }
      ],
    },
    {
      id: 3,
      label: 'Productos',
      icon: 'bi-columns-gap',
      link: null,
      submenu: [
        { label: 'SubMenu 1', link: '#' },
        { label: 'SubMenu 2', link: '#' },
        { label: 'SubMenu 3', link: '#' }
      ]
    }
  ];

  // Función para manejar el submenú abierto
  const isOpenSubmenu = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <div className={`sidebar ${isOpen ? 'expanded' : 'collapsed'}`}>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {/* Si hay un link, renderiza el Link. Si no, renderiza solo el botón */}
            {item.link ? (
              <Link to={item.link}>
                <Button className={`w-100 ${activeTab === item.id ? 'active' : ''}`}>
                  <span className="icon">
                    <i className={`bi ${item.icon}`}></i>
                  </span>
                  {item.label}
                </Button>
              </Link>
            ) : (
              <Button
                className={`w-100 ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => isOpenSubmenu(item.id)}
              >
                <span className="icon">
                  <i className={`bi ${item.icon}`}></i>
                </span>
                {item.label}
                {item.submenu && (
                  <span className="arrow">
                    <i className={`bi bi-chevron-${activeTab === item.id ? 'down' : 'right'}`}></i>
                  </span>
                )}
              </Button>
            )}

            {/* Renderizar submenú si existe y está activo */}
            {item.submenu && (
              <div className={`submenuWrapper ${activeTab === item.id ? 'colapse' : 'colapsed'}`}>
                <ul className="submenu">
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link to={subItem.link}>{subItem.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
