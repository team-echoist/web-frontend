import { Modal, Box, Typography } from "@mui/material";

const ReviewDetailModal = ({ open, handleClose, reviewId }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          Review Details
        </Typography>
        <Typography sx={{ mt: 2 }}>Review ID: {reviewId}</Typography>
      </Box>
    </Modal>
  );
};

export default ReviewDetailModal;

// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// import React, { useState, useEffect } from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Modal from "@mui/material/Modal";
// import TextField from "@mui/material/TextField";
// import AxiosInstance from "../../../api/AxiosInstance";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// function Index({ reviewId, onClose }) {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchReview = async () => {
//       try {
//         const response = await AxiosInstance.get(
//           `${import.meta.env.VITE_ROOT_API_URL}/admin/reviews/${reviewId}`
//         );
//         setData(response.data);
//       } catch (error) {
//         console.error("Error fetching review details:", error);
//       }
//     };

//     fetchReview();
//   }, [reviewId]);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSave = () => {
//     // Logic to save the changes
//     onClose();
//   };

//   if (!data) {
//     return null; // or a loading spinner
//   }

//   return (
//     <Modal
//       open
//       onClose={onClose}
//       aria-labelledby="modal-modal-title"
//       aria-describedby="modal-modal-description"
//     >
//       <Box sx={style}>
//         <Typography id="modal-modal-title" variant="h6" component="h2">
//           Edit Review
//         </Typography>
//         <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//           Modify the review details below.
//         </Typography>
//         <Box component="form" sx={{ mt: 2 }}>
//           <TextField
//             fullWidth
//             name="essayTitle"
//             label="Title"
//             value={data.essayTitle || ""}
//             onChange={handleChange}
//             variant="outlined"
//             margin="normal"
//           />
//           <TextField
//             fullWidth
//             name="content"
//             label="Content"
//             value={data.content || ""}
//             onChange={handleChange}
//             variant="outlined"
//             margin="normal"
//           />
//           <TextField
//             fullWidth
//             name="nickname"
//             label="Nickname"
//             value={data.user.nickname || ""}
//             variant="outlined"
//             margin="normal"
//             InputProps={{
//               readOnly: true,
//             }}
//           />
//           <TextField
//             fullWidth
//             name="email"
//             label="Email"
//             value={data.user.email || ""}
//             variant="outlined"
//             margin="normal"
//             InputProps={{
//               readOnly: true,
//             }}
//           />
//           <TextField
//             fullWidth
//             name="createdDate"
//             label="Created Date"
//             value={new Date(data.createdDate).toLocaleString() || ""}
//             variant="outlined"
//             margin="normal"
//             InputProps={{
//               readOnly: true,
//             }}
//           />
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{
//               mt: 2,
//               bgcolor: "primary.main",
//               color: "primary.contrastText",
//               "&:hover": {
//                 bgcolor: "primary.main",
//                 color: "primary.contrastText",
//               },
//             }}
//             onClick={handleSave}
//           >
//             Save Changes
//           </Button>
//         </Box>
//       </Box>
//     </Modal>
//   );
// }

// export default Index;
