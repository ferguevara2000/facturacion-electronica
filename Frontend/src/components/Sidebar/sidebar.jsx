import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {

  const [activeTab, setActiveTab] = useState(0)
  const [isToggleSubMenu, setIsToggleSubMenu] = useState(false)

  const isOpenSubmenu = (index) => {
    setActiveTab(index); 
    setIsToggleSubMenu(!isToggleSubMenu); 
  }

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">
            <Button className={`w-100 ${activeTab === 0 ? 'active' : ''}`}>
                <span className="icon">
                <i className="bi bi-house"></i></span>
                Home 
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/products">
            <Button className={`w-100 ${activeTab === 1 ? 'active' : ''}`}>
                <span className="icon">
                <i className="bi bi-columns-gap"></i></span>
                Productos 
                <span className="arrow"><i className="bi bi-chevron-right"></i></span>
            </Button>
          </Link>
        </li>
        <li>
            <Button className={`w-100 ${activeTab === 2 && isToggleSubMenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(2)}>
                <span className="icon">
                <i className="bi bi-columns-gap"></i></span>
                Menu Desp. 
                <span className="arrow"><i className={`bi bi-chevron-${isToggleSubMenu === true ? 'down' : 'right'}`}></i></span>
            </Button>
            <div className={`submenuWrapper ${activeTab === 2 && isToggleSubMenu === true ? 'colapse' : 'colapsed'}`}>
                <ul className="submenu">
                    <li><Link to='#'>SubMenu 1</Link></li>
                    <li><Link to='#'>SubMenu 2</Link></li>
                    <li><Link to='#'>SubMenu 3</Link></li>
                </ul>
            </div>
        </li>
        <li>
          <Link to="/products">
            <Button className={`w-100 ${activeTab === 3 ? 'active' : ''}`}>
                <span className="icon">
                <i className="bi bi-columns-gap"></i></span>
                Productos 
                <span className="arrow"><i className="bi bi-chevron-right"></i></span>
            </Button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
