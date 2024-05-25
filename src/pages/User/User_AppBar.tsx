import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';

function User_AppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  function navigateToAbout(){
    navigate("/userAboutPage")
  }
  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography
            onClick={handleClick}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ fontSize: "16px" }}
          >
            หลักสูตร
          </Typography>
          {/* <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>  */}


          <Typography
            onClick={handleClick}
            variant="h6"
            component="div"
            sx={{ flexGrow: 0 }}
            style={{ fontSize: "16px" }}
          >
            <PersonIcon/>  &nbsp;
            ธิดารัตน์ ภูกองชนะ
          </Typography>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={navigateToAbout}>ข้อมูลส่วนตัว</MenuItem>
            <MenuItem onClick={handleClose}>หลักสูตรของฉัน</MenuItem>
            <MenuItem onClick={handleClose}>ออกจากระบบ</MenuItem>
          </Menu> 
        </Toolbar>
      </AppBar>
    </>
  );
}
export default User_AppBar;
