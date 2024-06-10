import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
const drawerWidth = 240;

function Admin_Drawer() {
  const navigate = useNavigate();
  const navigateToCfAdOr = () => {
    navigate("/adminCFAdOr");
  };
  const navigateToCFIn = () => {
    navigate("/adminCFIn");
  };
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box marginTop={2} sx={{ overflow: "auto" }}>
          <List>
            {["องค์กรที่รอการอนุมัติ", "ผู้สอนที่รอการอนุมัติ"].map(
              (text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton style={{ cursor: 'pointer' }}
                    onClick={index === 0 ? navigateToCfAdOr : navigateToCFIn}
                  >
                    <ListItemIcon>
                      {index % 2 === 0 ? (
                        <HomeRepairServiceIcon />
                      ) : (
                        <PersonIcon />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
export default Admin_Drawer;
