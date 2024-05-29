import { Box } from "@mui/system";
import { Button, Divider, Grid, Toolbar } from "@mui/material";

import { useNavigate } from "react-router-dom";
import In_AppBar from "./In_AppBar";
import In_Drawer from "./In_Drawer";

function In_CoursePage() {
  const navigate = useNavigate();
  function navigateToAddDoc() {
    navigate("/InAddDocPage");
  }
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <In_AppBar />
        <In_Drawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Grid container spacing={2} marginBottom={2}>
            <Grid item xs={12}>
              ค้นหา
            </Grid>
          </Grid>

          <Grid container spacing={2} marginBottom={1}>
            <Grid item xs={6}>
              การอบรมที่ถูกเชิญ
            </Grid>
            <Grid item xs={4}>
              วันที่
            </Grid>
            <Grid item xs={2}>
              อัปโหลด
            </Grid>
          </Grid>

          <Divider
            style={{ background: "#FFC700", border: "1px solid #FFC700" }}
          ></Divider>

          <Grid container spacing={2} marginTop={0} marginBottom={1}>
            <Grid item xs={6}>
              <Grid item xs={4}>
                สาขาวิทยาการคอมพิวเตอร์
              </Grid>
              <Grid item xs={4}>
                คณะวิทยาการสารสนเทศ
              </Grid>
              <Grid item xs={4}>
                มหาวิทยาลัยมหาสารคาม
              </Grid>
            </Grid>
            <Grid item xs={4}>
              14 เมษายน 2567
            </Grid>
            <Grid item xs={2}>
              <Grid item xs={12}>
                <Button onClick={navigateToAddDoc} variant="contained" size="small" color="success">
                  เพิ่มเอกสารประกอบการสอน
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Divider
            style={{ background: "#DFDFDF", border: "1px solid #DFDFDF" }}
          ></Divider>
        </Box>
      </Box>
    </>
  );
}
export default In_CoursePage;
