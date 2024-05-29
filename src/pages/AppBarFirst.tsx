import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function AppBarFrist() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();
  function navigateToLogin() {
    navigate("/login");
  }

  return (
    <>
      <AppBar position="static">
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
          <Menu
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
          </Menu>
          <Button onClick={navigateToLogin} color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default AppBarFrist;
