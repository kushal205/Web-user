import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu, MenuItem, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TransitionsModal from "../modal";

export default function SportCard({
  name,
  image,
  description,
  id,
  location,
  pitches,
  store,
  key,
}) {
  //use states
  const [modalOpen, setModalOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  //router
  const router = useNavigate();

  //functions
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    store?.action.setSelectedSport(`${id}`);
    setAnchorEl(null);
  };
  const handleCloseModal = () => {
    store?.action.setSelectedSport(`${id}`);
    setAnchorEl(null);
    setModalOpen(!modalOpen);
  };

  const bookSport = () => {
    try {
      store?.action.setSelectedSport(`${id}`);
      router("/booking");
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <Card sx={{ maxWidth: 345 }} key={key} className="card-animation card-flex">
      <CardHeader title={name} />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt={`image-${id}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Description: {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Pitches: {pitches}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: {location}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "flex-end" }}>
        <button className="ani_button book_button" onClick={() => bookSport()}>
          Book
        </button>
      </CardActions>
    </Card>
  );
}
