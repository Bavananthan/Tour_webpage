import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Share from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVert from "@mui/icons-material/MoreVert";
import ExpandMore from "@mui/icons-material/ExpandMore";

function Tourcard() {
  return (
    <Card sx={{ maxWidth: 600, marginBottom: "20px" }}>
      <CardHeader
        avatar={<Avatar src="https://i.pravatar.cc/300"></Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Enjoy Every Moments"
      />
      <CardMedia
        component="img"
        height="194"
        image={require("../assets/pizza/pepperoni.jpg")}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <ExpandMore>
          <ExpandMoreIcon />
        </ExpandMore>
        <Rating name="simple-controlled" value={4} />
      </CardActions>
    </Card>
  );
}

export default Tourcard;
