import Admin_AppBar from "./Admin_AppBar";
import { Box } from "@mui/system";
import Admin_AllCourse from "./Admin_AllCourse";
function Admin_FirstPage() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Admin_AppBar />
      </Box>
      <Box>
        <Admin_AllCourse />
      </Box>
    </>
  );
}
export default Admin_FirstPage;
