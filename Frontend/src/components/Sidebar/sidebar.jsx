import Button from '@mui/material/Button';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Button className="w-100">
            <span className="icon">
              <i className="bi bi-house"></i></span>
              Home 
          </Button>
        </li>
        <li>
          <Button className="w-100">
            <span className="icon">
              <i className="bi bi-columns-gap"></i></span>
              Productos 
              <span className="arrow"><i className="bi bi-chevron-right"></i></span>
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
