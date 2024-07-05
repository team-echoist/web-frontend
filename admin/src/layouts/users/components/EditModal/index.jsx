/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { FormControlLabel, Grid, Radio, RadioGroup } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function EditModal({ open, setOpen, data, onChange, editProfile }) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: name === "status" ? value : prevData[name],
    }));
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            sx={{ mb: 2 }}
          >
            Edit Profile
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mb: 2 }}
            variant="body2"
          >
            Modify your profile details below.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <TextField
              fullWidth
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              onChange={onChange}
              defaultValue={data?.email}
            />
            <TextField
              fullWidth
              name="nickname"
              label="Nickname"
              defaultValue={data?.nickname}
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
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Birthdate"
                  value={data?.birthDate}
                  onChange={(newValue) => {
                    onChange({
                      target: { name: "birthDate", value: newValue },
                    });
                  }}
                  renderInput={(params) => (
                    <TextField {...params} fullWidth variant="outlined" />
                  )}
                />
                 </LocalizationProvider>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="h6"> Status </Typography>
              </Grid>
              <RadioGroup
                row
                name="status"
                defaultValue={data?.status}
                onChange={handleInputChange}
                sx={{ mb: 2 }}
              >
                <FormControlLabel
                  value="activated"
                  control={<Radio />}
                  label="Activated"
                />
                <FormControlLabel
                  value="banned"
                  control={<Radio />}
                  label="Banned"
                />
              </RadioGroup>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant="h6"> Gender </Typography>
              </Grid>
              <RadioGroup
                row
                name="gender"
                defaultValue={data?.gender}
                onChange={onChange}
                sx={{ mb: 2 }}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </Grid>
            <TextField
              fullWidth
              name="reputation"
              label="Reputation"
              defaultValue={data?.reputation}
              variant="outlined"
              margin="normal"
              onChange={onChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="white"
              onClick={editProfile}
              sx={{
                mt: 2,
                "&:hover": {
                  bgcolor: "primary.dark",
                },
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

export default EditModal;
