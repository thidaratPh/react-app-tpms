import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import PersonIcon from '@mui/icons-material/Person';
const drawerWidth = 240;

function Admin_Drawer() {
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
            {['องค์กรที่รอการอนุมัติ', 'ผู้สอนที่รอการอนุมัติ'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <HomeRepairServiceIcon /> : <PersonIcon />}
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
export default Admin_Drawer;