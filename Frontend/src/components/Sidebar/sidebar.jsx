import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Sidebar() {
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
      </ul>
    </div>
  );
}

export default Sidebar;
