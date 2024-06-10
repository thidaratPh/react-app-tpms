import { AppBar, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";

function User_AppBar() {
  const [courseAnchorEl, setCourseAnchorEl] = React.useState(null);
  const [userAnchorEl, setUserAnchorEl] = React.useState(null);
  const openCourseMenu = Boolean(courseAnchorEl);
  const openUserMenu = Boolean(userAnchorEl);

  const handleCourseClick = (event) => {
    setCourseAnchorEl(event.currentTarget);
  };
  const handleUserClick = (event) => {
    setUserAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setCourseAnchorEl(null);
    setUserAnchorEl(null);
  };

  const navigate = useNavigate();
  function navigateToAbout() {
    navigate("/userAboutPage");
  }
  function navigateToCourse() {
    navigate("/userCoursePage");
  }
  function navigateToProfile() {
    navigate("/userProfilePage");
  }
  function navigateToHome() {
    navigate("/userFirstPage");
  }
  function navigateToFrist() {
    navigate("/");
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
            onClick={handleUserClick}
            variant="h6"
            component="div"
            sx={{ flexGrow: 0 }}
            style={{ fontSize: "16px", display: "flex", alignItems: "center" }}
          >
            <PersonIcon style={{ fontSize: "25px" }} /> &nbsp; ธิดารัตน์
            ภูกองชนะ
          </Typography>
          <Menu
            id="admin-menu"
            anchorEl={userAnchorEl}
            open={openUserMenu}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "admin-button",
            }}
          >
            <MenuItem onClick={navigateToAbout}>ข้อมูลส่วนตัว</MenuItem>
            <MenuItem onClick={navigateToCourse}>หลักสูตรของฉัน</MenuItem>
            <MenuItem onClick={navigateToProfile}>โปรไฟล์ของฉัน</MenuItem>
            <MenuItem onClick={navigateToFrist}>ออกจากระบบ</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default User_AppBar;
