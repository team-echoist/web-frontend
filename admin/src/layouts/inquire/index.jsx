import { useState, useEffect } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import inquireTableData from "components/Tables/data/inquireTableData";
import Tables from "components/Tables";
import Footer from "examples/Footer";
import { Pagination,Box } from "@mui/material";

function index() {
  const { columns, rows } = inquireTableData();
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Tables title="Inquire" columns={columns} rows={rows} />
      <Box display="flex" justifyContent="center" p={2}>
      <Pagination  color="secondary"
          sx={{ color: "white" }}/>
             </Box>
      <Footer />
      
    </DashboardLayout>
  );
}

export default index;
