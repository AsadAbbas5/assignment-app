import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Slider from "react-slick";

function DealGuruCard() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
    >
      <Grid container spacing={2}>
        {[1, 2, 3, 4].map((item, index) => (
          <Grid item key={index} md={3}>
            <Card sx={{ width: "100%", height: "100%" }}>
              <CardMedia
                component="img"
                image="https://hekto-clone.netlify.app/static/media/featured1.a50673bd3f6c2d054317.png"
                alt="Product Image"
                sx={{ maxHeight: "100%", backgroundColor: "#f6f7fb" }}
              />
              <CardContent sx={{ textAlign: "center" }}>
                <Box bgcolor={"#fff"}>
                  <Typography color={"red"} variant="h6">
                    Cantilever Chairs
                  </Typography>
                  <Typography
                    color={"blue"}
                    variant="subtitle1"
                    marginTop={"1rem"}
                  >
                    code-y523201
                  </Typography>
                  <Typography color={"black"} variant="h6" marginTop={"1rem"}>
                    $42.00
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default DealGuruCard;
