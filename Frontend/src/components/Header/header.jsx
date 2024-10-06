import * as React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import userImage from "../../assets/profile.jpeg";
import { Button } from "@mui/material";
import { MdMenuOpen, MdDarkMode, MdOutlineLightMode } from "react-icons/md";
//import { MdOutlineMenu } from "react-icons/md";

// Menu Component
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="d-flex align-items-center">
      <div className="container-fluid w-100">
        <div className="row d-flex align-items-center w-100">
          {/*Logo Wrapper*/}
          <div className="col-2 part1">
            <Link to={"/"} className="d-flex align-items-center logo">
              <img src={logo} alt="Logo" />
              <span className="ms-1">SYSFACT</span>
            </Link>
          </div>

          <div className="col-3 d-flex align-items-center part2 ps-4">
            <Button className="rounded-circle">
              <MdMenuOpen />
            </Button>
          </div>

          <div className="col-7 d-flex align-items-center justify-content-end part3">
            <Button className="rounded-circle me-3">
              <MdOutlineLightMode />
            </Button>

            <div className="myAccWrapper">
              <Button
                className="myAcc d-flex align-items-center"
                onClick={handleClick}
              >
                <div className="userImg">
                  <span className="rounded-circle">
                    <img src={userImage} alt="" />
                  </span>
                </div>

                <div className="userInfo">
                  <h4>Fernando Guevara</h4>
                  <p className="mb-0">@ferguevara2000</p>
                </div>
              </Button>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleClose}>
                <i className="bi bi-person-circle me-3 icon"></i>Mi Cuenta
                </MenuItem>
                <MenuItem onClick={handleClose}>
                <i className="bi bi-box-arrow-left me-3 icon"></i>Cerrar Sesión
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
