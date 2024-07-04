/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import TextField from '@mui/material/TextField'
import { ButtonGroup, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import Grid from '@mui/material/Grid'
// import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali'
// import { LocalizationProvider } from '@mui/x-date-pickers'
// import { DatePicker } from '@mui/x-date-pickers/DatePicker'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
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
                    <Typography id="modal-modal-title" variant="h2">
                        Edit Status
                    </Typography>
                    <Typography id="modal-modal-description" variant="h5" sx={{ mt: 2 }}>
                        Modify essay status below.
                    </Typography>
                    <Box component="form" sx={{ mt: 2 }}>
                        <RadioGroup
                            fullWidth
                            name="status"
                            label="Status"
                            defaultValue={data?.status}
                            variant="outlined"
                            margin="normal"
                            onChange={onChange}
                        >
                            <FormControlLabel value="published" control={<Radio />} label="published" />
                            <FormControlLabel value="linkedout" control={<Radio />} label="linkedout" />
                            <FormControlLabel value="private" control={<Radio />} label="private" />
                        </RadioGroup>
                        {/* <Grid container spacing={2}>
                            <Grid item xs={3.5} md={3}>
                                <Button
                                    sx={{
                                        color: 'primary.info.light',
                                        '&:hover': {
                                            color: 'success',
                                        },
                                    }}
                                    onChange={onChange}
                                >
                                    published
                                </Button>
                            </Grid>
                            <Grid item xs={3.5} md={3}>
                                <Button>linkedout</Button>
                            </Grid>
                            <Grid item xs={3.5} md={3}>
                                <Button>private</Button>
                            </Grid>
                        </Grid> */}

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
