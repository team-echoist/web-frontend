import { Box, Button } from "@mui/material";

function index({ children }) {
  return (
    <>
      <Box
        sx={{
          minHeight: "43rem",
          backgroundColor: "#ffffff",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          marginBottom: "10px",
          borderRadius: "5px",
          padding: "5px 40px",
        }}
      >
        {children}
      </Box>
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button variant="contained" color="dark">
          update
        </Button>
      </Box>
    </>
  );
}

export default index;
