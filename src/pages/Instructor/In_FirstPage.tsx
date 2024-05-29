import { Box } from "@mui/system";
import Course from "../Course";
import In_AppBar from "./In_AppBar";

function In_FirstPage() {
    return <>
    <Box sx={{ flexGrow: 1 }}>
        <In_AppBar />
      </Box>
      <Box>
        <Course />
      </Box></>
}
export default In_FirstPage;