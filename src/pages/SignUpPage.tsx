import {
  AppBar,
  Button,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";


  
function SignUpPage() {

  const navigate = useNavigate();
  function navigateToSignUpAdOr(){
    navigate("/signupAdOr")
  }
  function navigateToSignUpIn(){
    navigate("/signupIn")
  }
  function navigateToSignUpUser(){
    navigate("/signupUser")
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              ลงทะเบียน
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Box>
        <h3>กรุณาเลือกตำแหน่งที่ต้องการลงทะเบียน</h3>
        <Grid container padding={3}>
          <Grid
            xs={12}
            marginBottom={10}
            style={{ backgroundColor: "lightgray", borderRadius: 30 }}
          >
            <Button onClick={navigateToSignUpAdOr} fullWidth style={{ height: 70 }}>
              <Typography style={{ fontSize: 20 }}>
                ผู้ดูแลองค์กร (Admin Organization)
              </Typography>
            </Button>
          </Grid>
          <Grid
            xs={12}
            marginBottom={10}
            style={{ backgroundColor: "lightgray", borderRadius: 30 }}
          >
            <Button onClick={navigateToSignUpIn} fullWidth style={{ height: 70 }}>
              <Typography style={{ fontSize: 20 }}>
                ผู้สอน (Instructor)
              </Typography>
            </Button>
          </Grid>
          <Grid
            xs={12}
            marginBottom={10}
            style={{ backgroundColor: "lightgray", borderRadius: 30 }}
          >
            <Button onClick={navigateToSignUpUser} fullWidth style={{ height: 70 }}>
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
