import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Acount from "./compontents/Acount/Acount";
import ShowProduct from "./compontents/Acount/showProduct/ShowProduct";
import ProductCard from "./compontents/Acount/showProduct/ProductCard/ProductCar";
import SinglelProduct from "./compontents/Acount/showProduct/SinglelProduct";

function AppPrivit() {
  return (
    <Box>
      <Box>
        <Routes>
               
            <Route path="/Acount/Add/Show" Component={Acount}/>
          <Route path="/products/:id" Component={SinglelProduct} />
        </Routes>
      </Box>
    </Box>
  );
}
export default AppPrivit;
