/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
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
// import { generateChartTitle } from "../data/detailChartData";
import { generateUrl } from "../util/generateUrl";
import { fetchDetailData } from "../api/fetchDetailData";
import { generateLables } from "../util/generateLabels";

function index() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: { label: "apps", data: [] },
  });
  const [select, setSelect] = useState({ selected: "", number: 1 });
  const route = useLocation().pathname.split("/").slice(1);
  const chartTitle = generateChartTitle(route[1]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelect((prev) => ({
      ...prev,
      selected: value,
      number: data.indexOf(value) + 1,
    }));
  };

  useEffect(() => {
    const currentDate = new Date();
    const monthName = currentDate.toLocaleString("en-US", { month: "long" });
    const currentMonth = data.indexOf(monthName) + 1;
    const pageInfoObj = generateUrl(route[1]);

    setSelect((prev) => ({
      ...prev,
      selected: `${monthName}`,
      number: currentMonth,
    }));
    setChartData((prev) => ({
      ...prev,
      labels: generateLables(route[1], currentMonth),
    }));
    fetchDetailData(pageInfoObj, setChartData);
  }, []);

  useEffect(() => {
    const newPageInfoObj = generateUrl(route[1], select.number);
    const currentMonth = data.indexOf(select.number) + 1;
    setChartData((prev) => ({
      ...prev,
      labels: generateLables(route[1], currentMonth),
    }));
    fetchDetailData(newPageInfoObj, setChartData);
  }, [select]);

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
      {route[1] !== "total-essay" && route[1] !== "all-users" ? (
        <MDBox sx={{ paddingRight: "20px" }}>
          <Grid container justifyContent="flex-end">
            <ComboBox
              label={label}
              data={data}
              select={select.selected}
              handleChange={handleChange}
              width="10rem"
            />
          </Grid>
        </MDBox>
      ) : null}

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
