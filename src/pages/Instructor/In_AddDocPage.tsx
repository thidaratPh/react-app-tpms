import { Box, Container } from "@mui/system";
import In_AppBar from "./In_AppBar";
import { Button, Grid, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function In_AddDocPage() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <In_AppBar />
      </Box>

      <Container component="main" fixed>
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            เพิ่มหลักสูตร
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="chapter"
                  required
                  fullWidth
                  id="chapter"
                  label="ชื่อบทเรียน"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="subject"
                  label="เริ่อง"
                  name="subject"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography>เอกสารประกอบการสอน</Typography>
                <TextField
                  type="file"
                  autoComplete="given-name"
                  name="document"
                  required
                  fullWidth
                  id="document"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12} component={"center"}>
                <Button
                  type="submit"
                  size="small"
                  variant="contained"
                  startIcon={<AddIcon />}
                >
                  เพิ่มเนื้อหา
                </Button>
              </Grid>
              <Grid item xs={12} component={"center"}>
                <Button
                  type="submit"
                  variant="contained"
                  startIcon={<AddIcon />}
                  color="success"
                >
                  เพิ่มบทเรียน
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Typography>ลายเซ็นต์ (.png)</Typography>
                <TextField
                  type="file"
                  autoComplete="given-name"
                  name="document"
                  required
                  fullWidth
                  id="document"
                  autoFocus
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              บันทึก
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
export default In_AddDocPage;
