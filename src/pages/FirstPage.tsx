import { Box } from "@mui/system";
import AppBarFrist from "./AppBarFirst";
import Course from "./Course";

function FirstPage() {

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBarFrist/>
      </Box>
      <Box>
        <Course/>
      </Box>
    </>
  );
}
export default FirstPage;
