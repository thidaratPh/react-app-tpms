import { AppBar, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";

function Admin_AppBar() {
  const [courseAnchorEl, setCourseAnchorEl] = React.useState(null);
  const [adminAnchorEl, setAdminAnchorEl] = React.useState(null);
  const openCourseMenu = Boolean(courseAnchorEl);
  const openAdminMenu = Boolean(adminAnchorEl);

  const handleCourseClick = (event) => {
    setCourseAnchorEl(event.currentTarget);
  };
  const handleAdminClick = (event) => {
    setAdminAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setCourseAnchorEl(null);
    setAdminAnchorEl(null);
  };

  const navigate = useNavigate();
  const navigateToCfAdOr = () => {
    navigate("/adminCFAdOr");
  };
  const navigateToCFIn = () => {
    navigate("/adminCFIn");
  };
  const navigateToHome = () => {
    navigate("/adminFirstPage");
  };
  const navigateToFirst = () => {
    navigate("/");
  };

  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
        <img src="src\img\kitty.png" onClick={navigateToHome} style={{width:"50px" , cursor: 'pointer'}}  />

          <Typography
            onClick={handleCourseClick}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ fontSize: "16px" }}
            marginLeft={2}
          >
            หลักสูตร
          </Typography>
          <Menu
            id="course-menu"
            anchorEl={courseAnchorEl}
            open={openCourseMenu}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "course-button",
            }}
          >
            <MenuItem onClick={handleClose}>Java</MenuItem>
            <MenuItem onClick={handleClose}>C++</MenuItem>
            <MenuItem onClick={handleClose}>CSS</MenuItem>
          </Menu>

          <Typography
            onClick={handleAdminClick}
            variant="h6"
            component="div"
            sx={{ flexGrow: 0 }}
            style={{ fontSize: "16px" }}
          >
            <PersonIcon /> &nbsp; Admin
          </Typography>
          <Menu
            id="admin-menu"
            anchorEl={adminAnchorEl}
            open={openAdminMenu}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "admin-button",
            }}
          >
            <MenuItem onClick={navigateToCfAdOr}>องค์กรที่รอการอนุมัติ</MenuItem>
            <MenuItem onClick={navigateToCFIn}>ผู้สอนที่รอการอนุมัติ</MenuItem>
            <MenuItem onClick={navigateToFirst}>ออกจากระบบ</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Admin_AppBar;
