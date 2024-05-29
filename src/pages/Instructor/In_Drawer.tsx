import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
const drawerWidth = 240;

function In_Drawer() {
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
        <Box sx={{ overflow: 'auto' }}>
          
          <List>
            {['ข้อมูลส่วนตัว', 'รายการอบรมที่ถูกเชิญ', 'โปรไฟล์ของฉัน'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
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
export default In_Drawer;