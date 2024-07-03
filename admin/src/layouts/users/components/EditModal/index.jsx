/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
// import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali'
// import { LocalizationProvider } from '@mui/x-date-pickers'
// import { DatePicker } from '@mui/x-date-pickers/DatePicker'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

function EditModal({ open, setOpen, data, setData, onChange, editProfile }) {
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

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
                            name="nickname"
                            label="Nickname"
                            defaultValue={data?.nickname}
                            onChange={onChange}
                            variant="outlined"
                            margin="normal"
                        />
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
                        <RadioGroup
                            fullWidth
                            name="gender"
                            label="Gender"
                            defaultValue={data?.gender}
                            variant="outlined"
                            margin="normal"
                            onChange={onChange}
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                        </RadioGroup>
                        {/* <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
                            <DatePicker
                                label="Birthdate"
                                value={data?.birthdate || null}
                                onChange={(newValue) => {
                                    onChange({ target: { name: 'birthdate', value: newValue } })
                                }}
                                renderInput={(params) => (
                                    <TextField {...params} fullWidth variant="outlined" margin="normal" />
                                )}
                            />
                        </LocalizationProvider> */}
                        <TextField
                            fullWidth
                            name="status"
                            label="Status"
                            defaultValue={data?.status}
                            variant="outlined"
                            margin="normal"
                            onChange={onChange}
                        />
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
                            variant="contained"
                            color="white"
                            sx={{
                                mt: 2,
                                bgcolor: 'primary.main',
                                color: 'primary.contrastText',
                                '&:hover': {
                                    bgcolor: 'primary.main',
                                    color: 'primary.contrastText',
                                },
                            }}
                            onClick={() => {
                                editProfile()
                            }}
                        >
                            Save Changes
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default EditModal
