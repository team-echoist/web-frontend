// 신고내역 관리 페이지

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import ComboBox from "components/ComboBox";
import { label, data } from "../dashboard/data/comboBoxData";

// Data
import ReportTableData from "layouts/reports/data/reportTableData";
import { useState } from "react";

function Reports() {
  const [select, setSelect] = useState({ selected: "", number: 1 });
  const { columns, rows } = ReportTableData();

  const handleChange = (event) => {
    const value = event.target.value;
    setSelect((prev) => ({
      ...prev,
      selected: value,
      number: data.indexOf(value) + 1,
    }));
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
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
                  신고 리스트
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>

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

      <Footer />
    </DashboardLayout>
  );
}

export default Reports;
