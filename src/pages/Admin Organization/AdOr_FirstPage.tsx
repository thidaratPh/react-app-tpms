import { Box } from "@mui/system";
import AdOr_AppBar from "./AdOr_AppBar";
import Course from "../Course";

function AdOr_FirstPage() {
    return <>
    <Box sx={{ flexGrow: 1 }}>
        <AdOr_AppBar />
      </Box>
      <Box>
        <Course />
      </Box></>
}
export default AdOr_FirstPage;