/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Index({ open, setOpen, data, setData, onChange, editProfile }) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Profile
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Modify your profile details below.
          </Typography>
          <Box component="form" sx={{ mt: 2 }}>
            <TextField
              fullWidth
              name="name"
              label="Name"
              defaultValue={data?.name}
              onChange={onChange}
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              onChange={onChange}
            />
            <TextField
              fullWidth
              name="info"
              label="Information"
              defaultValue={data?.info}
              variant="outlined"
              margin="normal"
              onChange={onChange}
            />
            <Button
              variant="contained"
              color="white"
              sx={{
                mt: 2,
                bgcolor: "primary.main",
                color: "primary.contrastText",
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "primary.contrastText",
                },
              }}
              onClick={() => {
                editProfile();
              }}
            >
              Save Changes
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default Index;
