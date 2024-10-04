import * as React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import userImage from "../../assets/profile.jpeg";
import { Button } from "@mui/material";
import { MdMenuOpen, MdDarkMode, MdOutlineLightMode } from "react-icons/md";
//import { MdOutlineMenu } from "react-icons/md";

// Menu Component
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

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
              <span className="ms-1">FACTURADOR</span>
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
              <Button className="myAcc d-flex align-items-center">
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
