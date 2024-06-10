import { Box } from "@mui/system";
import In_AppBar from "./In_AppBar";
import In_AllCourse from "./In_AllCourse";

function In_FirstPage() {
    return <>
    <Box sx={{ flexGrow: 1 }}>
        <In_AppBar />
      </Box>
      
      <Box>
        <In_AllCourse />
      </Box></>
}
export default In_FirstPage;