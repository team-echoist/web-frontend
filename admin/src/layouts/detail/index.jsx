import { Box, Typography, Button } from "@mui/material";

function index({ title, date, writer, content }) {
  return (
    <>
      <Box
        sx={{
          minHeight: "45rem",
          marginTop: "20px",
          backgroundColor: "#ffffff",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          marginBottom: "10px",
          borderRadius: "px",
          padding: "15px 15px",
        }}
      >
        {title && (
          <>
            <Typography
              variant="h4"
              sx={{ marginBottom: "20px", marginTop: "20px", fontSize: "1rem" }}
            >
              {title}
            </Typography>

            <hr
              style={{
                borderTop: "1px solid lightgray",
                marginBottom: "20px",
                width: "100%",
              }}
            />
          </>
        )}

        <Typography variant="body1" sx={{ fontSize: "0.8rem" }}>
          작성일: {date} 작성자: {writer}
        </Typography>
        <Typography
          variant="body1"
          sx={{ paddingTop: "20px", fontSize: "0.8rem" }}
        >
          {content}adfad
        </Typography>
      </Box>
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button variant="contained" color="dark">
          Edit
        </Button>
      </Box>
    </>
  );
}

export default index;
