/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import inquireTableData from "components/Tables/data/inquireTableData";
import Tables from "components/Tables";
import Footer from "examples/Footer";
import { Pagination, Box } from "@mui/material";
import { fetchData } from "../../api";

function index() {
  const [data,setData] =useState({ columns: [], rows: [] })
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    getInquire("all");
  }, [currentPage]);

  const getInquire = async (status) => {
    try {
      const options = {
        params: {
          page: currentPage,
          limit: rowsPerPage,
          status: status,
        },
      };
      const { data } = await fetchData("/admin/inquiries", "get", null, options);
      const { columns, rows } = inquireTableData(data);
      console.log("asfd",data)
      setData({ columns, rows, totalPages: data.totalPage })
    } catch (err) {
      console.log("Err", err);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Tables title="Inquire" columns={data?.columns&&data?.columns} rows={data?.rows&&data?.rows} />
      <Box display="flex" justifyContent="center" p={2}>
        <Pagination color="secondary" sx={{ color: "white" }} />
      </Box>
      <Footer />
    </DashboardLayout>
  );
}

export default index;
