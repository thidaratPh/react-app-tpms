import { Box } from "@mui/system";
import Admin_AppBar from "./Admin_AppBar";
import Admin_Drawer from "./Admin_Drawer";
import { Button, Divider, Grid, Toolbar } from "@mui/material";

function Admin_CF_AdOrPage() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Admin_AppBar />
        <Admin_Drawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Grid container spacing={2} marginBottom={1}>
            <Grid item xs={6}>
              องค์กรที่รออนุมัติ
            </Grid>
            <Grid item xs={4}>
              วันที่
            </Grid>
            <Grid item xs={2}>
              สถานะ
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
                {" "}
                <Button variant="contained" color="success" size="small">
                  อนุมัติ
                </Button>
              </Grid>
              <Grid item xs={6} marginTop={1}>
                {" "}
                <Button variant="contained" color="error" size="small">
                  ไม่อนุมัติ
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Divider style={{ background:"#DFDFDF",border: "1px solid #DFDFDF"}}></Divider>

        </Box>
      </Box>
    </>
  );
}
export default Admin_CF_AdOrPage;
