import Admin_AppBar from "./Admin_AppBar";
import { Box } from "@mui/system";
import Course from "../Course";
function Admin_FirstPage() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Admin_AppBar />
      </Box>
      <Box>
        <Course />
      </Box>
    </>
  );
}
export default Admin_FirstPage;
