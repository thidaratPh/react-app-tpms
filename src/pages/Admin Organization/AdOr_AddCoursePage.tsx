import { Box, Container } from "@mui/system";
import AdOr_AppBar from "./AdOr_AppBar";
import { Button, Grid, TextField, Typography } from "@mui/material";

function AdOr_AddCoursePage() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AdOr_AppBar />
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
                <Typography marginBottom={0.5}>
                  อัปโหลดรูปภาพหน้าปกหลักสูตร
                </Typography>
                <TextField required fullWidth type="file" id="sign" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="courseName"
                  required
                  fullWidth
                  id="courseName"
                  label="ชื่อหลักสูตร"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="instructorName"
                  label="ผู้สอน"
                  name="instructorName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="location"
                  label="สถานที่"
                  name="location"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography>วันที่เริ่มการจัดอบรม</Typography>
                <TextField
                  type="date"
                  autoComplete="given-name"
                  name="dateStart"
                  required
                  fullWidth
                  id="dateStart"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography>เวลาที่เริ่มการจัดอบรม</Typography>
                <TextField
                  type="time"
                  required
                  fullWidth
                  id="timeStart"
                  name="timeStart"
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography>วันที่สิ้นสุดการจัดอบรม</Typography>
                <TextField
                  type="date"
                  autoComplete="given-name"
                  name="dateEnd"
                  required
                  fullWidth
                  id="dateEnd"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography>เวลาที่สิ้นสุดการจัดอบรม</Typography>
                <TextField
                  type="time"
                  required
                  fullWidth
                  id="timeEnd"
                  name="timeEnd"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="courseDescription"
                  label="คำอธิบายหลักสูตร"
                  name="courseDescriptionname"
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="objective"
                  label="วัตถุประสงค์"
                  name="objective"
                  autoComplete="name"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography>วันที่เริ่มลงทะเบียน</Typography>
                <TextField required fullWidth type="date" id="dateRegisStart" />
              </Grid>
              <Grid item xs={12}>
                <Typography>วันที่สิ้นสุดลงทะเบียน</Typography>
                <TextField required fullWidth type="date" id="dateRegisEnd" />
              </Grid>
              <Grid item xs={12}>
                <Typography>อัปโหลแบบฟอร์มเกียรติบัตร</Typography>
                <TextField required fullWidth type="file" id="cer" />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
export default AdOr_AddCoursePage;
