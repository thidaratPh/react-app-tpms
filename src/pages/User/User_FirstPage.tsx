import {
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import User_AppBar from "./User_AppBar";
import Course from "../Course";

function User_FirstPage() {
  const navigate = useNavigate();
  // function navigateToAbout(){
  //   navigate("/userAboutPage")
  // }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <User_AppBar />
      </Box>

      <Box>
        <Course />
      </Box>
    </>
  );
}
export default User_FirstPage;
