import { Box } from "@mui/system";
import {
  Card,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PlaceIcon from "@mui/icons-material/Place";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import Admin_AppBar from "./Admin_AppBar";

function Admin_AboutCoursePage() {
  // const navigate = useNavigate();
  //   function navigateToAboutCourse(){
  //     navigate("/aboutCourse")
  //   }
  
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
        <Admin_AppBar/>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>  
        <Toolbar />        
          <Card>
            <Grid container spacing={2} style={{background:"#BCE2EE"}}>
              <Grid item marginLeft={2} marginTop={10}>
                <img
                  style={{ width: 300 }}
                  src="https://www.nectec.or.th/wp-content/uploads/2023/01/2023-Cybersecurity-ot-1200.png"
                  alt=""
                />
              </Grid>
              <Grid item xs={12} sm container marginLeft={5}>
                <Grid item xs container direction="column" spacing={2}>
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
            </Grid>

            {/* ส่วนอะิบายรายวิชา */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm container marginLeft={4}>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid
                    item
                    xs
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
                        ในขณะที่ธุรกิจอุตสาหกรรมหลากหลายประเภท ต่างก็มีการเชื่อมโยงกันระหว่างเครือข่าย OT และ IT มากยิ่งขึ้น การแบ่งส่วนเครือข่าย (Network Segmentation) ทางด้าน OT โดยเฉพาะ จึงกลายเป็นแนวทางที่สำคัญมากขึ้น การใช้วิธีนี้ ช่วยให้สามารถรักษาความปลอดภัยสินทรัพย์ทางอุตสาหกรรมได้ และเพื่อปรับปรุงฟังก์ชันและประสิทธิภาพการทำงานของระบบ ICS ให้ปลอดภัยมากขึ้น
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* ---- */}
                  <Grid item xs container direction="row" spacing={2}>
                    <Grid item>
                      <MyLocationOutlinedIcon></MyLocationOutlinedIcon>
                    </Grid>
                    <Grid item xs container direction="column">
                      <Grid item>
                        <Typography>วัตถุประสงค์</Typography>
                      </Grid>
                      <Grid item xs>
                        <Typography variant="body2" color="text.secondary">
                        การโจมตีทางไซเบอร์ขยายขอบเขตและรุนแรงมากขึ้นในหลายกลุ่มธุรกิจ เพราะเหล่าแฮกเกอร์เปลี่ยนเป้าหมายอยู่เสมอ ไม่ว่าจะเป็นการพุ่งเป้าโจมตีหน่วยงานรัฐ บริษัทเอกชน ไม่เว้นแม้แต่กลุ่มอุตสาหกรรม ดังนั้น OT Security จึงเป็นความท้าทายของผู้ประกอบการอุตสาหกรรมที่ต้องปรับตัว เรียนรู้ให้ทันต่อภัยคุกคามที่อาจจะเกิดขึ้นในอนาคตเพื่อเตรียมความพร้อมรับมืออยู่เสมอ
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* ---- */}
                  <Grid item xs container direction="row" spacing={2} marginBottom={2}>
                    <Grid item>
                      <PictureAsPdfOutlinedIcon></PictureAsPdfOutlinedIcon>
                    </Grid>
                    <Grid item xs container direction="column">
                      <Grid item>
                        <Typography>เอกสารประกอบการสอน</Typography>
                      </Grid>
                      <Grid item xs>
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
                  
                  {/* ----------- */}
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Box>
      </Box>
    </>
  );
}
export default Admin_AboutCoursePage;
