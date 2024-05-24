import React, { useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import Footer from "examples/Footer";
import Grid from "@mui/material/Grid";
import TextArea from "components/TextArea";
import MDInput from "components/MDInput";
import ComboBox from "components/ComboBox";
import TempUserData from "./data/tempUserData";
import MDButton from "components/MDButton";
import Tag from "components/Tag";

function index() {
  const [select, setSelect] = useState("ALL");
  const [text, setText] = useState({ write: "" });

  const handleSelectChange = (event) => {
    setSelect(event.target.value);
  };
  const handleTextChange = (e) => {
    setText((prev) => ({
      ...prev,
      write: e.target.value,
    }));
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} ml={2} mt={2}>
        <Grid container spacing={1} gap={5}>
          <Grid item>
            <TextArea
              width="25rem"
              height="40rem"
              label="preview"
              readonly={true}
              value={text.write}
            />
          </Grid>
          <Grid item>
            <Grid container spacing={1}>
              <Grid item>
                <TextArea
                  width="25rem"
                  height="40rem"
                  label="detail"
                  readonly={false}
                  value={text.write}
                  onChange={handleTextChange}
                />
              </Grid>
              <Grid item>
                <Grid container direction="column">
                  <Grid item sx={{ mb: "0.5rem" }}>
                    <ComboBox
                      label="발신자"
                      select={select}
                      data={TempUserData}
                      handleChange={handleSelectChange}
                      width="10rem"
                    />
                  </Grid>
                  <Grid item>
                    <Grid container direction="row" spacing={1}>
                      <Grid item>
                        <Tag title="수연" />
                      </Grid>
                      <Grid item>
                        <Tag title="정연" />
                      </Grid>
                      <Grid item>
                        <Tag title="대찬" />
                      </Grid>
                      <Grid item>
                        <Tag title="서영" />
                      </Grid>
                      <Grid item>
                        <Tag title="근형" />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item sx={{ mt: "0.5rem" }}>
                    <MDButton>SEND</MDButton>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default index;
