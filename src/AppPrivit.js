import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./compontents/laibaray/home/Home";
import Acount from "./compontents/Acount/Acount";

function AppPrivit() {
  return (
    <Box>
      <Box>
        <Routes>
          <Route path="/" Component={Home} />
          <Route>
            <Route path="/Acount" Component={Acount} />
        
          </Route>
        </Routes>
      </Box>
    </Box>
  );
}
export default AppPrivit;
