/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function index({
  children,
  btnTitle,
  link,
  optionalBtnTitle,
  optionalBtnLink,
}) {
  const navigate = useNavigate();
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
        <Button
          variant="contained"
          color="dark"
          onClick={() => {
            navigate(link);
          }}
        >
          {btnTitle}
        </Button>
        {optionalBtnTitle && optionalBtnLink && (
          <Button
            variant="contained"
            color="dark"
            onClick={() => {
              navigate(optionalBtnLink);
            }}
            sx={{ ml: 2 }}
          >
            {optionalBtnTitle}
          </Button>
        )}
      </Box>
    </>
  );
}

export default index;
