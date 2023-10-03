import React from "react";
import Stack from "@mui/material/Stack";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Content from "./components/Content";
import Menu from "./components/Menu";
import { Box, Container } from "@mui/material";

function App() {
  return (
    <Box>
      <Navbar />
      <Container maxWidth="xl">
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          flex={1}
        >
          <Menu />
          <Content />
          <Rightbar />
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
