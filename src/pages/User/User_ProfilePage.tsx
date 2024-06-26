import { Box } from "@mui/system";
import User_AppBar from "./User_AppBar";
import User_Drawer from "./User_Drawer";
import { Card, Grid, Toolbar, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
function User_ProfilePage() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <User_AppBar />
        <User_Drawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Grid container>
            <Grid item xs={3}>
              <AccountCircleIcon style={{ fontSize: 100 }}></AccountCircleIcon>
            </Grid>
            <Grid item xs={7} marginTop={2}>
              <Grid item xs={6}>
                ธิดารัตน์ ภูกองชนะ
              </Grid>
              <Grid item xs={6} marginTop={1}>
                Thidarat Phookongchana
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <img
                style={{ width: 100 }}
                src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                alt=""
              />
            </Grid>
          </Grid>

          <Box>
            <Typography
              style={{
                textDecoration: "underline",
                textDecorationColor: "#FFC700",
                textUnderlineOffset: "2px",
              }}
            >
              หลักสูตรที่ผ่านการอบรม
            </Typography>

            <Grid container spacing={3} padding={3}>
              <Grid item xs={6} marginBottom={2}>
                <Card style={{ marginTop: 2 }}>
                  <Grid
                    container
                    marginTop={2}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <img
                      style={{ width: "80%" }}
                      src="https://marketplace.canva.com/EAFNlUJs5g4/2/0/1600w/canva-white-simple-certificate-of-appreciation-Fcz7KkZ5YaU.jpg"
                      alt="Certificate"
                    />
                  </Grid>
                  <Grid item style={{ textAlign: "center" }} marginBottom={2}>
                    <Typography gutterBottom variant="h5" component="div">
                      TypeScript JSX
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ฝึกทำ TypeScript JSX
                    </Typography>
                  </Grid>
                </Card>
              </Grid>

              <Grid item xs={6} marginBottom={2}>
                <Card style={{ marginTop: 2 }}>
                  <Grid
                    container
                    marginTop={2}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <img
                      style={{ width: "80%" }}
                      src="https://marketplace.canva.com/EAFNlUJs5g4/2/0/1600w/canva-white-simple-certificate-of-appreciation-Fcz7KkZ5YaU.jpg"
                      alt="Certificate"
                    />
                  </Grid>
                  <Grid item style={{ textAlign: "center" }} marginBottom={2}>
                    <Typography gutterBottom variant="h5" component="div">
                      TypeScript JSX
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ฝึกทำ TypeScript JSX
                    </Typography>
                  </Grid>
                </Card>
              </Grid>
            </Grid>

          </Box>
        </Box>
      </Box>
    </>
  );
}
export default User_ProfilePage;
