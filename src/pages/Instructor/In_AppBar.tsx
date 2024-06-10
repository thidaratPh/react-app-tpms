import {
    AppBar,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { useNavigate } from "react-router-dom";
  import PersonIcon from '@mui/icons-material/Person';
  
  function In_AppBar() {
    const [courseAnchorEl, setCourseAnchorEl] = React.useState(null);
  const [inAnchorEl, setInAnchorEl] = React.useState(null);
  const openCourseMenu = Boolean(courseAnchorEl);
  const openInMenu = Boolean(inAnchorEl);

  const handleCourseClick = (event) => {
    setCourseAnchorEl(event.currentTarget);
  };
  const handleInClick = (event) => {
    setInAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setCourseAnchorEl(null);
    setInAnchorEl(null);
  };
  
    const navigate = useNavigate();
    function navigateToAbout(){
      navigate("/InAboutPage")
    }
    function navigateToCourse(){
      navigate("/InCoursePage")
    }
    function navigateToProfile(){
      navigate("/InProfilePage")
    }
    function navigateToFrist(){
      navigate("/InFirstPage")
    }
    function navigateToHome(){
      navigate("/")
    }
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
            onClick={handleInClick}
            variant="h6"
            component="div"
            sx={{ flexGrow: 0 }}
            style={{ fontSize: "16px" }}
          >
            <PersonIcon /> &nbsp; Aj. M
          </Typography>
          <Menu
            id="admin-menu"
            anchorEl={inAnchorEl}
            open={openInMenu}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "admin-button",
            }}
          >
            <MenuItem onClick={navigateToAbout}>ข้อมูลส่วนตัว</MenuItem>
            <MenuItem onClick={navigateToCourse}>รายการอบรมที่ถูกเชิญ</MenuItem>
            <MenuItem onClick={navigateToProfile}>โปรไฟล์</MenuItem>
            <MenuItem onClick={navigateToHome}>ออกจากระบบ</MenuItem>
          </Menu>
        </Toolbar>
        </AppBar>
      </>
    );
  }
  export default In_AppBar;
  