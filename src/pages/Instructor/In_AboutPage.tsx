import { Box, Stack } from "@mui/system";
import { Button, Grid, Toolbar, Typography } from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import In_AppBar from "./In_AppBar";
import In_Drawer from "./In_Drawer";

function In_AboutPage() {
  return (
    <>
      <Box sx={{ display: "flex"}}>
        <In_AppBar />
        <In_Drawer />

        <Box component="center" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Grid style={{ textAlign: "center" }}>
            <img
              style={{ width: 250, marginBottom: 10 }}
              src="https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5nRRVgnzYSSwUoPM7rigVHaj4QhdURLfyt90hBPNzf89n8vZ5bp.jpg"
              alt=""
            />
            <Typography>สาขา :</Typography>
            <Typography>คณะ : </Typography>
            <Typography>มหาวิทยาลัย : </Typography>
            <Typography>ประะเภทผู้ใช้งาน : </Typography>
            <Typography>Email : </Typography>
            <Typography>เข้าสู่ระบบเมื่อ : </Typography>
          </Grid>

          <Stack
            marginTop={2}
            direction="row"
            spacing={2}
            justifyContent={"center"}
          >
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
export default In_AboutPage;
