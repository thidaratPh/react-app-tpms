import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useNavigate } from "react-router-dom";
const drawerWidth = 240;

function User_Drawer() {
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
    return <>
    <Drawer
        variant="permanent"
        sx={{
            
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box marginTop={2} sx={{ overflow: 'auto' }}>
          
          <List>
            {['ข้อมูลส่วนตัว', 'หลักสูตรของฉัน', 'โปรไฟล์ของฉัน'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton style={{ cursor: 'pointer' }} onClick={index === 0 ? navigateToAbout : index === 1 ?navigateToCourse : navigateToProfile}>
                  <ListItemIcon>
                  {index === 0 ? <PersonIcon /> : index === 1 ? <LibraryBooksIcon /> : <AccountBoxIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          
        </Box>
      </Drawer>
    </>
}
export default User_Drawer;