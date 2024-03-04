import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ActiontTpes } from "../store/action/actiontypes";

function Acount() {

    const userName = useSelector((state) => state.auth.user.userName);
    const dispatch = useDispatch();

    const logout = () => {
      dispatch({ type: ActiontTpes.LOG_OUT });
      localStorage.removeItem("token");
    };
  

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Welcome: {userName}</p>
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Button
          onClick={logout}
          variant="contained"
          sx={{

            color: "#fff",
            fontWeight: "bold",
            paddingX: "1.5rem",
            paddingY: "0.5rem",
            fontSize: "1rem",
            marginTop:"1.2rem",
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.5)",
            "&:hover": {
              color: "white",
              backgroundColor: "blue",
            },
          }}
        >
          Log Out
        </Button>
      </Link>
    </div>
  );
}

export default Acount;
