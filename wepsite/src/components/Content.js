import { Box } from "@mui/material";
import React from "react";
import Tourcard from "./Tourcard";

function Content() {
  return (
    <Box sx={{ margin: "20px" }} padding={3} flex={2}>
      <Tourcard />
      <Tourcard />
      <Tourcard />
      <Tourcard />
    </Box>
  );
}

export default Content;
