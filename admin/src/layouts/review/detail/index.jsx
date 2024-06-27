/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import Tables from "components/Tables";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import {
  Button,
  Box,
  Pagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";
import { showToast } from "../../utils/toast";
import AxiosInstance from "../../../api/AxiosInstance"; // AxiosInstance 임포트
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function Index() {
  const [tableData, setTableData] = useState({ columns: [], rows: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedReview, setSelectedReview] = useState(null);
  const [open, setOpen] = useState(false);
  const rowsPerPage = 10;

  useEffect(() => {
    getReviews();
  }, [currentPage]);

  const getReviews = async () => {
    try {
      const response = await AxiosInstance.get("/api/admin/reviews", {
        params: {
          page: currentPage,
          limit: rowsPerPage,
        },
      });
      const data = response.data;
      const { columns, rows } = formatTableData(data, viewReview);
      setTableData({ columns, rows, totalPages: data.totalPage });
    } catch (err) {
      console.error("Error fetching reviews:", err);
    }
  };

  const viewReview = async (id) => {
    try {
      const response = await AxiosInstance.get(`/api/admin/reviews/${id}`);
      setSelectedReview(response.data);
      setOpen(true);
    } catch (err) {
      console.error("Error fetching review details:", err);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedReview(null);
  };

  const handlePageChange = (_, value) => {
    setCurrentPage(value);
  };

  const formatTableData = (data, viewFunc) => {
    const Title = ({ name }) => (
      <MDBox display="flex" alignItems="center" lineHeight={1}>
        <MDTypography display="block" variant="button">
          {name}
        </MDTypography>
      </MDBox>
    );

    const Author = ({ author }) => (
      <MDBox display="flex" alignItems="center" lineHeight={1}>
        <MDTypography display="block" variant="button">
          {author}
        </MDTypography>
      </MDBox>
    );

    const Status = ({ processed }) => (
      <MDBox display="flex" alignItems="center" justifyContent="center">
        <MDTypography
          display="block"
          variant="caption"
          color={processed ? "success" : "error"}
          fontWeight="medium"
        >
          {processed ? "Processed" : "Pending"}
        </MDTypography>
      </MDBox>
    );

    const Date = ({ date }) => (
      <MDBox lineHeight={1} textAlign="center">
        <MDTypography
          display="block"
          variant="caption"
          color="text"
          fontWeight="medium"
        >
          {date}
        </MDTypography>
      </MDBox>
    );

    const ActionButton = (id) => (
      <Button
        variant="contained"
        color="primary"
        sx={{ color: "white !important" }}
        onClick={() => viewFunc(id)}
      >
        View
      </Button>
    );

    return {
      columns: [
        {
          Header: "리뷰 제목",
          accessor: "essayTitle",
          width: "30%",
          align: "left",
        },
        { Header: "작성자", accessor: "author", width: "30%", align: "left" },
        {
          Header: "처리 상황",
          accessor: "status",
          width: "15%",
          align: "center",
        },
        {
          Header: "리뷰 작성 일자",
          accessor: "registrationDate",
          width: "10%",
          align: "center",
        },
        {
          Header: "상세 보기",
          accessor: "action",
          width: "5%",
          align: "center",
        },
      ],

      rows: data?.reviews?.map((item) => ({
        essayTitle: <Title name={item.essayTitle} />,
        author: <Author author={item.userId} />,
        status: <Status processed={item.processed} />,
        registrationDate: <Date date={item.createDate.substring(0, 10)} />,
        action: <ActionButton id={item.id} />,
      })),
    };
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Tables
        title="Review"
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
      <Footer />

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Review Details</DialogTitle>
        <DialogContent>
          {selectedReview ? (
            <Box>
              <Typography variant="h6">
                Title: {selectedReview.essayTitle}
              </Typography>
              <Typography variant="body1">
                Type: {selectedReview.type}
              </Typography>
              <Typography variant="body1">
                Processed: {selectedReview.processed ? "Yes" : "No"}
              </Typography>
              <Typography variant="body1">
                Created Date:
                {new Date(selectedReview.createDate).toLocaleString()}
              </Typography>
              {selectedReview.processedDate && (
                <Typography variant="body1">
                  Processed Date:
                  {new Date(selectedReview.processedDate).toLocaleString()}
                </Typography>
              )}
              <Typography variant="body1">
                User ID: {selectedReview.userId}
              </Typography>
              <Typography variant="body1">
                Essay ID: {selectedReview.essayId}
              </Typography>
            </Box>
          ) : (
            <Typography variant="body1">Loading...</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </DashboardLayout>
  );
}

export default Index;
