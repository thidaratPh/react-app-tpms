import { Box, Stack } from "@mui/system";
import AdOr_AppBar from "./AdOr_AppBar";
import AdOr_Drawer from "./AdOr_Drawer";
import { Button, Grid, Toolbar, Typography } from "@mui/material";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

function AdOr_AboutPage() {
  return (
    <>
      <Box sx={{ display: "flex"}}>
        <AdOr_AppBar />
        <AdOr_Drawer />

        <Box component="center" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Grid style={{ textAlign: "center" }}>
            <img
              style={{ width: 250, marginBottom: 10 }}
              src="https://it.msu.ac.th/wp-content/uploads/2017/01/cropped-Informatics_MSU_Logo.svg.png"
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
export default AdOr_AboutPage;
