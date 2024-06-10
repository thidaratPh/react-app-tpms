import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const navigate = useNavigate();

  function navigateToSignUpAdOr() {
    navigate("/signupAdOr");
  }
  
  function navigateToSignUpIn() {
    navigate("/signupIn");
  }
  
  function navigateToSignUpUser() {
    navigate("/signupUser");
  }
  
  function navigateToHome() {
    navigate("/");
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
          <Toolbar>
            <img
              src="src/img/kitty.png"
              onClick={navigateToHome}
              style={{ width: "50px", cursor: "pointer" }}
              alt="Logo"
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              ml={2}
            >
              ลงทะเบียน
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          กรุณาเลือกตำแหน่งที่ต้องการลงทะเบียน
        </Typography>
        <Grid container spacing={3} justifyContent="center" direction={"column"} marginTop={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              onClick={navigateToSignUpAdOr}
              style={{width:"50%"}}
              sx={{ height: 70, backgroundColor: "lightgray", borderRadius: 2 }}
              variant="contained"
            >
              <Typography style={{ fontSize: 20 }}>
                ผู้ดูแลองค์กร (Admin Organization)
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              onClick={navigateToSignUpIn}
              style={{width:"50%"}}
              sx={{ height: 70, backgroundColor: "lightgray", borderRadius: 2 }}
              variant="contained"
            >
              <Typography style={{ fontSize: 20 }}>
                ผู้สอน (Instructor)
              </Typography>
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button
              onClick={navigateToSignUpUser}
              style={{width:"50%"}}
              sx={{ height: 70, backgroundColor: "lightgray", borderRadius: 2 }}
              variant="contained"
            >
              <Typography style={{ fontSize: 20 }}>
                บุคคลทั่วไป (User)
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default SignUpPage;
