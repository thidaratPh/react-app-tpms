import { Box } from "@mui/system";
import { Button, Divider, Grid, Toolbar } from "@mui/material";
import AdOr_AppBar from "./AdOr_AppBar";
import AdOr_Drawer from "./AdOr_Drawer";
import { useNavigate } from "react-router-dom";

function AdOr_CoursePage() {
  const navigate = useNavigate();
  function navigateToAddCourse() {
    navigate("/AdOrAddCoursePage");
  }
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AdOr_AppBar />
        <AdOr_Drawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Grid container spacing={2} marginBottom={2}>
            <Grid item xs={10}>
              ค้นหา
            </Grid>
            <Grid item xs={2}>
              <Button
              onClick={navigateToAddCourse}
                variant="contained"
                color="success"
                size="small"
                sx={{ boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.4)" }}
              >
                เพิ่มหลักสูตร
              </Button>
            </Grid>
          </Grid>

          <Grid container spacing={2} marginBottom={1}>
            <Grid item xs={6}>
              หลักสูตรของฉัน
            </Grid>
            <Grid item xs={4}>
              วันที่เพิ่ม
            </Grid>
            <Grid item xs={2}>
              จัดการ
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
              <Grid item xs={6}>
                <Button variant="contained" color="warning" size="small">
                  แก้ไข
                </Button>
              </Grid>
              <Grid item xs={6} marginTop={1}>
                <Button variant="contained" color="error" size="small">
                  ลบ
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
export default AdOr_CoursePage;
