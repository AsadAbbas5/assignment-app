import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import style from "./navebar.module.css";
import { connect, useDispatch } from "react-redux";
import { ActiontTpes } from "../store/action/actiontypes";

function NavBar() {

  return (
    <Box>
      <Box
        bgcolor={"#088f8f"}
        borderBottom="1px solid white"
        p={3}
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Box>
          <Typography sx={{ color: "#fff",letterSpacing:"5px" }} fontSize="2rem" >
            Deal Guru
          </Typography>
        </Box>
        <TextField
          sx={{
            alignContent: "start",
            width: "50%",
            bgcolor: "#ffffff",
            borderRadius: "10px",
          }}
          placeholder="Search"
          label="search "
          type="search"
        />
        <Box>
          <Link to={"/"} className={style.link}>
            Home
          </Link>

          <Link to={"/signin"} className={style.link}>
            Sign in
          </Link>

          <Link to={"/signup"} className={style.link}>
            Register
          </Link>
        
        </Box>
      </Box>
    </Box>
  );
}
const mapStateToPropes = (state) => {
  return {
    isLogined: state.auth.isLogined,
  };
};

export default connect(mapStateToPropes)(NavBar);
