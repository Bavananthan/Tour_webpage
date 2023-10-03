import {
  AppBar,
  Avatar,
  Badge,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import { Box } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
function Navbar() {
  const StyleToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  return (
    <AppBar position="sticky">
      <StyleToolbar>
        <Typography variant="h5">Tour</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Badge badgeContent={4} color="secondary">
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsActiveIcon color="action" />
          </Badge>
          <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/300" />
        </Box>
      </StyleToolbar>
    </AppBar>
  );
}

export default Navbar;
