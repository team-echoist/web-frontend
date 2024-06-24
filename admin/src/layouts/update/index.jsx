/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MDEditor from "@uiw/react-md-editor";

function index() {
  const [value, setValue] = useState("**Hello world!!!**");
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
              미리보기 자리
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
                preview="edit"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </DashboardLayout>
  );
}

export default index;
