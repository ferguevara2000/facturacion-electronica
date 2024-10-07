import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Sidebar() {

  const isOpenSubmenu = () => {
    alert()
  }

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">
            <Button className="w-100">
                <span className="icon">
                <i className="bi bi-house"></i></span>
                Home 
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/products">
            <Button className="w-100">
                <span className="icon">
                <i className="bi bi-columns-gap"></i></span>
                Productos 
                <span className="arrow"><i className="bi bi-chevron-right"></i></span>
            </Button>
          </Link>
        </li>
        <li>
            <Button className="w-100" onClick={isOpenSubmenu}>
                <span className="icon">
                <i className="bi bi-columns-gap"></i></span>
                Productos 
                <span className="arrow"><i className="bi bi-chevron-right"></i></span>
            </Button>
            <div className="submenuWrapper">
                <ul className="submenu">
                    <li><Link to='#'>SubMenu 1</Link></li>
                    <li><Link to='#'>SubMenu 2</Link></li>
                    <li><Link to='#'>SubMenu 3</Link></li>
                </ul>
            </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
