import { Box, Stack } from "@mui/system";
import User_AppBar from "./User_AppBar";
import User_Drawer from "./User_Drawer";
import { Button, Grid, Toolbar, Typography } from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
function User_AboutPage() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <User_AppBar />
        <User_Drawer />

        <Box component="main"  sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Grid style={{ textAlign: "center" }}>
            <Typography>ชื่อ :</Typography>
            <Typography>Firstname : </Typography>
            <Typography>นามสกุล : </Typography>
            <Typography>lastname : </Typography>
            <Typography>ประะเภทผู้ใช้งาน : </Typography>
            <Typography>Email : </Typography>
            <Typography>เข้าสู่ระบบเมื่อ : </Typography>
          </Grid>

          <Stack direction="row" spacing={2} justifyContent={"center"}>
          <Button
              variant="contained"
              startIcon={<DriveFileRenameOutlineIcon />}
            >
              แก้ไขข้อมูล
            </Button>
            <Button
              variant="contained"
              startIcon={<DriveFileRenameOutlineIcon />}
            >
              เปลี่ยนรหัสผ่าน
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
export default User_AboutPage;
