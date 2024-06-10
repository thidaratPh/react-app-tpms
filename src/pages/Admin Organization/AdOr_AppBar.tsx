import { AppBar, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";

function AdOr_AppBar() {
  const [courseAnchorEl, setCourseAnchorEl] = React.useState(null);
  const [adorAnchorEl, setAdOrAnchorEl] = React.useState(null);
  const openCourseMenu = Boolean(courseAnchorEl);
  const openAdOrMenu = Boolean(adorAnchorEl);

  const handleCourseClick = (event) => {
    setCourseAnchorEl(event.currentTarget);
  };
  const handleAdOrClick = (event) => {
    setAdOrAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setCourseAnchorEl(null);
    setAdOrAnchorEl(null);
  };

  const navigate = useNavigate();
  function navigateToAbout() {
    navigate("/AdOrAboutPage");
  }
  function navigateToCourse() {
    navigate("/AdOrCoursePage");
  }
  function navigateToFirst() {
    navigate("/");
  }
  function navigateToHome() {
    navigate("/AdOrFirstPage");
  }

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
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
            onClick={handleAdOrClick}
            variant="h6"
            component="div"
            sx={{ flexGrow: 0 }}
            style={{ fontSize: "16px", display: "flex", alignItems: "center" }}
          >
            <PersonIcon style={{ fontSize: "25px" }} /> &nbsp; IT MSU
          </Typography>
          <Menu
            id="admin-menu"
            anchorEl={adorAnchorEl}
            open={openAdOrMenu}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "admin-button",
            }}
          >
            <MenuItem onClick={navigateToAbout}>ข้อมูลส่วนตัว</MenuItem>
            <MenuItem onClick={navigateToCourse}>หลักสูตรของฉัน</MenuItem>
            <MenuItem onClick={navigateToCourse}>โปรไฟล์ของฉัน</MenuItem>
            <MenuItem onClick={navigateToFirst}>ออกจากระบบ</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default AdOr_AppBar;
