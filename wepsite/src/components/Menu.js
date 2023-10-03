import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import ListOutlined from "@mui/icons-material/ListOutlined";
import Explore from "@mui/icons-material/Explore";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import PlaceIcon from "@mui/icons-material/Place";
import Info from "@mui/icons-material/Info";

function Menu() {
  return (
    <Box flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AirplanemodeActiveIcon />
              </ListItemIcon>
              <ListItemText primary="plan your trip" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListOutlined />
              </ListItemIcon>
              <ListItemText primary="Thinks to do" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Explore />
              </ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccessibilityIcon />
              </ListItemIcon>
              <ListItemText primary="Facts" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PlaceIcon />
              </ListItemIcon>
              <ListItemText primary="Places" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LocalActivityIcon />
              </ListItemIcon>
              <ListItemText primary="Tickets" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Info />
              </ListItemIcon>
              <ListItemText primary="Hello" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Menu;
