/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import Tables from "components/Tables";
import authorsTableData from "components/Tables/data/authorsTableData";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { Button, Box, Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../../api";

function index() {
  const [tableData, setTableData] = useState({ columns: [], rows: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;


  const navigate = useNavigate();

  const handleUpdateClick = () => {
    navigate("/update?title=update");
  };
  useEffect(() => {
    // 데이터 페칭함수 세팅자리
    const getNotice = async () => {
      try {
        const options = {
          params: {
            page: currentPage,
            limit: rowsPerPage,
          },
        };
        const { data } = await fetchData(
          "/admin/notices",
          "get",
          null,
          options
        );
        console.log("data111", data);

        const { columns, rows } = authorsTableData(data);
        setTableData({ columns, rows, totalPages: data.totalPage });
      } catch (err) {
        console.log("err", err);
      }
    };

    getNotice();
  }, [currentPage]);

  const handlePageChange = (_, value) => {
    setCurrentPage(value);
  };


  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Tables
        title="Notice"
        columns={tableData.columns}
        rows={tableData.rows}
      />
      <Box display="flex" justifyContent="center" p={2}>
        <Pagination
          count={tableData.totalPages}
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
