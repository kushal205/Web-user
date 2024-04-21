import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { context } from "../../../utils/context/Provider";
import server from "../../../utils/server";
import toast from "react-hot-toast";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #e6e6e6",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};

export default function TransitionsModal({ open, setOpen }) {
  const handleClose = () => setOpen(false);
  const store = React.useContext(context);

  const handleDelete = async () => {
    try {
      if (!store?.data.selectedSport) throw new Error("sport id not found.");
      const res = await server.delete(
        `api/admin/sport/${store.data.selectedSport}`
      );
      store?.action.setRefreshSport(!store?.data.refreshSport);
      toast.success(res.data.message);
    } catch (err) {
      toast.error(err.message || "Error!");
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Are you sure?
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              If you delete this sport, you can't retrieve the data. Please
              confirm to delete this.
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                marginTop: "8px",
                gap: "1rem",
              }}
            >
              <Button variant="contained" color="error" onClick={handleDelete}>
                Delete
              </Button>
              <Button variant="contained" onClick={handleClose}>
                Cancel
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
