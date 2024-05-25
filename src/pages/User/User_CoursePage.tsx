import { Box } from "@mui/system";
import User_AppBar from "./User_AppBar";
import User_Drawer from "./User_Drawer";
import { Button, Divider, Grid, Toolbar } from "@mui/material";

function User_CoursePage() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <User_AppBar />
        <User_Drawer />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Grid container spacing={2} marginBottom={1}>
            <Grid item xs={6}>
              หลักสูตรที่ลงทะเบียน
            </Grid>
            <Grid item xs={2}>
              วันที่ลงทะเบียน
            </Grid>
            <Grid item xs={2} >
              สถานะ
            </Grid>
            <Grid item xs={2}>
              เกียรติบัตร
            </Grid>
          </Grid>

          <Divider
            style={{ background: "#FFC700", border: "1px solid #FFC700" }}
          ></Divider>
{/* เรื่องที่1 */}
          <Grid container spacing={2} marginTop={1} marginBottom={1}>
            <Grid item xs={6} >
              <Grid item xs={3}> <img style={{width:200}} src="https://www.nectec.or.th/wp-content/uploads/2023/01/2023-Cybersecurity-ot-1200.png" alt="" /></Grid>
              <Grid item xs={12}> พื้นฐานความปลอดภัยทางไซเบอร์</Grid>
            </Grid>
            <Grid item xs={2}>
              15 พฤษภาคม 2567
            </Grid>
            <Grid item xs={2} >
                <Grid item xs={4}>สำเร็จ</Grid>
                <Grid  item xs={8}>20 พฤษภาคม 2567</Grid>
            </Grid>
            <Grid item xs={2}>
            <Button
              variant="contained"
            >
              ดาวน์โหลด
            </Button>
            </Grid>
          </Grid>
          <Divider style={{ background:"#DFDFDF",border: "1px solid #DFDFDF"}}></Divider>
          {/* เรื่องที่2 */}
          <Grid container spacing={2} marginTop={1} marginBottom={1}>
            <Grid item xs={6} >
              <Grid item xs={3}> <img style={{width:200}} src="https://www.nectec.or.th/wp-content/uploads/2023/01/2023-Cybersecurity-ot-1200.png" alt="" /></Grid>
              <Grid item xs={12}> พื้นฐานความปลอดภัยทางไซเบอร์</Grid>
            </Grid>
            <Grid item xs={2}>
              15 พฤษภาคม 2567
            </Grid>
            <Grid item xs={2} >
                <Grid item xs={4}>สำเร็จ</Grid>
                <Grid  item xs={8}>20 พฤษภาคม 2567</Grid>
            </Grid>
            <Grid item xs={2}>
            <Button
              variant="contained"
            >
              ดาวน์โหลด
            </Button>
            </Grid>
          </Grid>
          <Divider style={{ background:"#DFDFDF",border: "1px solid #DFDFDF"}}></Divider>

        </Box>
      </Box>
    </>
  );
}
export default User_CoursePage;
