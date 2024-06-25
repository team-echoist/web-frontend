/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import Tables from "components/Tables";
import authorsTableData from "components/Tables/data/authorsTableData";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { Button, Box, Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";

function index() {
  const { columns, rows } = authorsTableData();
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const navigate = useNavigate();

  const handleUpdateClick = () => {
    navigate("/update?title=update");
  };
  useEffect(() => {
    // 데이터 페칭함수 세팅자리
  }, [currentPage]);

  const handlePageChange = (_, value) => {
    setCurrentPage(value);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Tables title="Notice" columns={columns} rows={rows} id="1" />
      <Box display="flex" justifyContent="center" p={2}>
        <Pagination
          count={Math.ceil(rows.length / rowsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="secondary"
          sx={{ color: "white" }}
        />
      </Box>
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button variant="contained" color="dark" onClick={handleUpdateClick}>
          Update
        </Button>
      </Box>

      <Footer />
    </DashboardLayout>
  );
}

export default index;
