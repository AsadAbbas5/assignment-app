import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";

import Signin from "./compontents/signin/Signin";
import SignUp from "./compontents/Signup/Signup";

function AppPublic() {
  return (
    <Box>
      <Routes>
        <Route path="/signin" Component={Signin} />
        <Route path="/signup" Component={SignUp} />
      </Routes>
    </Box>
  );
}

export default AppPublic;
