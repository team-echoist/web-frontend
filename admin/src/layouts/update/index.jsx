/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MDEditor from "@uiw/react-md-editor";
import { useParams } from "react-router-dom";

function index() {
  const [value, setValue] = useState("**Hello world!!!**");
  const { parameter } = useParams();
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box
        sx={{
          flexGrow: 1,
          width: "100%",
          minHeight: "50rem",
          marginTop: "20px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                paddingLeft: "20px",
              }}
            >
              미리보기 자리 | 문의글 보기
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
              }}
            >
              <MDEditor
                value={value}
                onChange={setValue}
                height={800}
                preview={parameter === "edit" ? "edit" : "live"}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button variant="contained" color="dark">
          Update
        </Button>
      </Box>
      <Footer />
    </DashboardLayout>
  );
}

export default index;
