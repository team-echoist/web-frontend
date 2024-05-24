import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDTypography from "components/MDTypography";
import { useLocation } from "react-router-dom";
import ComboBox from "components/ComboBox";
import { label, data } from "../data/comboBoxData";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import { generateChartTitle, settingChartData } from "../data/detailChartData";

function index() {
  const [select, setSelect] = useState("");
  const route = useLocation().pathname.split("/").slice(1);
  const chartTitle = generateChartTitle(route[1]);
  let chartData = settingChartData(route[1], select);

  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  useEffect(() => {
    const currentDate = new Date();
    const monthName = currentDate.toLocaleString("en-US", { month: "long" });
    setSelect(`${monthName}`);
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid item xs={12}>
          <Card>
            <MDBox
              mx={2}
              mt={-3}
              py={3}
              px={2}
              variant="gradient"
              bgColor="info"
              borderRadius="lg"
              coloredShadow="info"
            >
              <MDTypography variant="h6" color="white">
                {route[route.length - 1].replace("-", " ")}
              </MDTypography>
            </MDBox>
          </Card>
        </Grid>
      </MDBox>
      {route[1] !== "total-essay" ||
        (route[1] !== "all-users" && (
          <MDBox sx={{ paddingRight: "20px" }}>
            <Grid container justifyContent="flex-end">
              <ComboBox
                label={label}
                data={data}
                select={select}
                handleChange={handleChange}
                width="10rem"
              />
            </Grid>
          </MDBox>
        ))}

      <Grid item xs={12} md={6} lg={4}>
        <MDBox mt={8} mb={3}>
          <ReportsLineChart
            color="success"
            title={chartTitle}
            description={
              <>
                <strong>{chartTitle}</strong>
              </>
            }
            date="updated 4 min ago"
            chart={chartData}
          />
        </MDBox>
      </Grid>

      <Footer />
    </DashboardLayout>
  );
}

export default index;
