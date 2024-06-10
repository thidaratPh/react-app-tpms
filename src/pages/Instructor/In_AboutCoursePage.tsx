import { Box } from "@mui/system";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Divider,
  Grid,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PlaceIcon from "@mui/icons-material/Place";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import In_AppBar from "./In_AppBar";
import GroupIcon from "@mui/icons-material/Group";
import { useEffect, useState } from "react";
import { Rowing } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function In_AbouteCoursePage() {
  
  const [score, setScore] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const numericScore = parseFloat(score);
    if (numericScore >= 80 && numericScore <= 100) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [score]);

  const navigate = useNavigate();
  function navigateToAddDoc() {
    navigate("/InAddDocPage");
  }
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <In_AppBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Card>
            <Grid container spacing={2} style={{ background: "#BCE2EE" }}>
              <Grid item marginLeft={2} marginTop={10}>
                <img
                  style={{ width: 300 }}
                  src="https://www.nectec.or.th/wp-content/uploads/2023/01/2023-Cybersecurity-ot-1200.png"
                  alt=""
                />
              </Grid>
              <Grid item xs sm container marginLeft={5}>
                <Grid item xs={6} container direction="column" spacing={2}>
                  <Grid
                    item
                    xs
                    container
                    direction="row"
                    marginTop={1}
                    spacing={2}
                  >
                    <Grid item>
                      <MenuBookIcon></MenuBookIcon>
                    </Grid>
                    <Grid item xs container direction="column">
                      <Grid item>
                        <Typography>รายวิชา</Typography>
                      </Grid>
                      <Grid item xs>
                        <Typography variant="body2" color="text.secondary">
                          พื้นฐานความปลอดภัยทางไซเบอร์
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* ---- */}
                  <Grid item xs container direction="row" spacing={2}>
                    <Grid item>
                      <EmojiPeopleIcon></EmojiPeopleIcon>
                    </Grid>
                    <Grid item xs container direction="column">
                      <Grid item>
                        <Typography>วิทยากร</Typography>
                      </Grid>
                      <Grid item xs>
                        <Typography variant="body2" color="text.secondary">
                          อาจารย์
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* ---- */}
                  <Grid item xs container direction="row" spacing={2}>
                    <Grid item>
                      <DateRangeIcon></DateRangeIcon>
                    </Grid>
                    <Grid item xs container direction="column">
                      <Grid item>
                        <Typography>วันที่</Typography>
                      </Grid>
                      <Grid item xs>
                        <Typography variant="body2" color="text.secondary">
                          14 กันยายน 2567
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* ---- */}
                  <Grid item xs container direction="row" spacing={2}>
                    <Grid item>
                      <AccessTimeIcon></AccessTimeIcon>
                    </Grid>
                    <Grid item xs container direction="column">
                      <Grid item>
                        <Typography>เวลา</Typography>
                      </Grid>
                      <Grid item xs>
                        <Typography variant="body2" color="text.secondary">
                          9.00-16.00
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* ---- */}
                  <Grid
                    item
                    xs
                    container
                    direction="row"
                    spacing={2}
                    marginBottom={2}
                  >
                    <Grid item>
                      <PlaceIcon></PlaceIcon>
                    </Grid>
                    <Grid item xs container direction="column">
                      <Grid item>
                        <Typography>สถานที่</Typography>
                      </Grid>
                      <Grid item xs>
                        <Typography variant="body2" color="text.secondary">
                          411 IT MSU
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* ----------- */}
                </Grid>
              </Grid>
              {/* คำอธิบาย  */}
              <Grid
                item
                xs={6}
                container
                direction="row"
                marginTop={1}
                spacing={2}
              >
                <Grid item>
                  <DescriptionOutlinedIcon></DescriptionOutlinedIcon>
                </Grid>
                <Grid item xs container direction="column">
                  <Grid item>
                    <Typography>คำอธิบายหลักสูตร</Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body2" color="text.secondary">
                      ในขณะที่ธุรกิจอุตสาหกรรมหลากหลายประเภท
                      ต่างก็มีการเชื่อมโยงกันระหว่างเครือข่าย OT และ IT
                      มากยิ่งขึ้น การแบ่งส่วนเครือข่าย (Network Segmentation)
                      ทางด้าน OT โดยเฉพาะ จึงกลายเป็นแนวทางที่สำคัญมากขึ้น
                      การใช้วิธีนี้
                      ช่วยให้สามารถรักษาความปลอดภัยสินทรัพย์ทางอุตสาหกรรมได้
                      และเพื่อปรับปรุงฟังก์ชันและประสิทธิภาพการทำงานของระบบ ICS
                      ให้ปลอดภัยมากขึ้น
                    </Typography>
                  </Grid>
                </Grid>

                {/*  วัตถุประสงค์*/}
                <Grid item>
                  <MyLocationOutlinedIcon></MyLocationOutlinedIcon>
                </Grid>
                <Grid item xs container direction="column">
                  <Grid item>
                    <Typography>วัตถุประสงค์</Typography>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body2" color="text.secondary">
                      การโจมตีทางไซเบอร์ขยายขอบเขตและรุนแรงมากขึ้นในหลายกลุ่มธุรกิจ
                      เพราะเหล่าแฮกเกอร์เปลี่ยนเป้าหมายอยู่เสมอ
                      ไม่ว่าจะเป็นการพุ่งเป้าโจมตีหน่วยงานรัฐ บริษัทเอกชน
                      ไม่เว้นแม้แต่กลุ่มอุตสาหกรรม ดังนั้น OT Security
                      จึงเป็นความท้าทายของผู้ประกอบการอุตสาหกรรมที่ต้องปรับตัว
                      เรียนรู้ให้ทันต่อภัยคุกคามที่อาจจะเกิดขึ้นในอนาคตเพื่อเตรียมความพร้อมรับมืออยู่เสมอ
                    </Typography>
                  </Grid>
                </Grid>
                {/*  */}
              </Grid>
            </Grid>

            {/* ส่วนล่าง */}
            <Grid container spacing={2}>
              <Grid item xs sm container marginLeft={4} direction="row">
                {/* เอกสาร */}
                <Grid item xs container  spacing={2}>
                  <Grid
                    item
                    xs
                    container
                    spacing={2}
                    marginBottom={2}
                    marginTop={2}
                  >
                    <Grid item>
                      <PictureAsPdfOutlinedIcon />
                    </Grid>
                    <Grid item xs container direction="column">
                      <Grid item>
                        <Typography>เอกสารประกอบการสอน</Typography>
                        <Grid container direction="row" spacing={1}>
                          <Grid item>
                            <Button onClick={navigateToAddDoc} size="small" variant="contained" color="success">
                              เพิ่ม
                            </Button>
                          </Grid>
                          <Grid item>
                            <Button size="small" variant="contained" color="warning">
                              แก้ไข
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item marginTop={2}>
                        <Typography variant="body2" color="text.secondary">
                          บทที่ 1
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          บทที่ 2
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          บทที่ 3
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          บทที่ 4
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>

                {/* รายชื่อ */}
                <Grid item xs container spacing={2}>
                  <Grid
                    item
                    xs
                    container
                    spacing={2}
                    marginBottom={2}
                    marginTop={2}
                  >
                    <Grid item>
                      <GroupIcon />
                    </Grid>
                    <Grid item xs container direction="column">
                      <Grid item>
                        <Typography>รายชื่อผู้ลงทะเบียน</Typography>
                      </Grid>
                      {/* ชื่อ1  */}
                      <Grid
                        item
                        container
                        spacing={2}
                        alignItems="center"
                        marginTop={1}
                      >
                        <Grid item xs={6}>
                          <Typography variant="body2" color="text.secondary">
                            ธิดารัตน์ ภูกองชนะ
                          </Typography>
                        </Grid>
                        <Grid item xs={3}>
                          <TextField
                            id="standard-multiline-flexible"
                            label="คะแนน"
                            multiline
                            maxRows={4}
                            variant="standard"
                            fullWidth
                            value={score}
                            onChange={(e) => setScore(e.target.value)}
                          />
                        </Grid>
                        <Grid item xs={3}>
                          <Checkbox disabled checked={isChecked} />
                        </Grid>
                      </Grid>
                      {/* ชื่อ2 */}
                      
                      {/*  */}
                    </Grid>
                  </Grid>
                </Grid>
                {/* รายชื่อ */}
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Box>
    </>
  );
}
export default In_AbouteCoursePage;
