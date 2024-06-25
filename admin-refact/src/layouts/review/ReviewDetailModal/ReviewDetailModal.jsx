import PropTypes from "prop-types";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import Modal from "@mui/material/Modal";

function ReviewDetailModal({
  open,
  handleClose,
  reviewId,
  reviewDetail,
  onProcess,
  handleOpen,
}) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleProcess = () => {
    const processBody = { processed: true }; // Example process body
    onProcess(reviewId, processBody);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <MDBox
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        width="400px"
        bgcolor="white"
        p={4}
        boxShadow={24}
      >
        <MDBox display="flex" justifyContent="space-between" mb={2}>
          <MDTypography variant="h6" component="h2">
            Review Details
          </MDTypography>
          <MDButton onClick={handleClose}>Close</MDButton>
        </MDBox>
        <MDBox mb={2}>
          <MDTypography variant="body1">
            <strong>User ID:</strong> {reviewDetail.userId}
          </MDTypography>
        </MDBox>
        <MDBox mb={2}>
          <MDTypography variant="body1">
            <strong>Title:</strong> {reviewDetail.title}
          </MDTypography>
        </MDBox>
        <MDBox mb={2}>
          <MDTypography variant="body1">
            <strong>Status:</strong>{" "}
            {reviewDetail.processed ? "Processed" : "Unprocessed"}
          </MDTypography>
        </MDBox>
        <MDBox mb={2}>
          <MDTypography variant="body1">
            <strong>Created Date:</strong>{" "}
            {new Date(reviewDetail.createdDate).toLocaleDateString()}
          </MDTypography>
        </MDBox>
        <MDBox mb={2}>
          <MDTypography variant="body1">
            <strong>Review ID:</strong> {reviewId}
          </MDTypography>
        </MDBox>
        <MDButton onClick={handleProcess} variant="contained" color="primary">
          Mark as Processed
        </MDButton>
      </MDBox>
    </Modal>
  );
}

ReviewDetailModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  reviewId: PropTypes.number,
  reviewDetail: PropTypes.shape({
    userId: PropTypes.string,
    title: PropTypes.string,
    processed: PropTypes.bool,
    createdDate: PropTypes.string,
  }),
  onProcess: PropTypes.func.isRequired,
};

export default ReviewDetailModal;
