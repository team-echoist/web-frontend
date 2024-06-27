/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import Tables from "../../../examples/Tables/DataTable";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { Box, Pagination } from "@mui/material";
import AxiosInstance from "../../../api/AxiosInstance";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import MDAvatar from "components/MDAvatar";

function Index() {
  const [tableData, setTableData] = useState({ columns: [], rows: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const getUsers = async () => {
    try {
      const response = await AxiosInstance.get("/api/admin/users", {
        params: {
          page: currentPage,
          limit: rowsPerPage,
          filter: "all",
        },
      });
      const data = response.data;
      const { columns, rows } = formatTableData(data);
      setTableData({ columns, rows, totalPages: data.totalPage });
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  const formatTableData = (data) => {
    const Author = ({ image, name, email }) => (
      <MDBox display="flex" alignItems="center" lineHeight={1}>
        <MDAvatar src={image} name={name} size="sm" />
        <MDBox ml={2} lineHeight={1}>
          <MDTypography display="block" variant="button" fontWeight="medium">
            {name}
          </MDTypography>
          <MDTypography variant="caption">{email}</MDTypography>
        </MDBox>
      </MDBox>
    );

    const Status = ({ status }) => (
      <MDBox ml={-1}>
        <MDBadge
          badgeContent={status === "activated" ? "Subscribe" : "Normal user"}
          color={status === "activated" ? "success" : "dark"}
          variant="gradient"
          size="sm"
        />
      </MDBox>
    );

    const Date = ({ date }) => (
      <MDTypography
        component="a"
        href="#"
        variant="caption"
        color="text"
        fontWeight="medium"
      >
        {new Date(date).toLocaleDateString()}
      </MDTypography>
    );

    const ActionButton = (id) => (
      <MDTypography
        component="a"
        href="#"
        variant="caption"
        color="text"
        fontWeight="medium"
      >
        Edit
      </MDTypography>
    );

    return {
      columns: [
        { Header: "이름", accessor: "name", width: "45%", align: "left" },
        { Header: "구독여부", accessor: "status", align: "center" },
        { Header: "가입일", accessor: "registrationDate", align: "center" },
        { Header: "정보 수정", accessor: "action", align: "center" },
      ],
      rows: data?.users?.map((user) => ({
        name: <Author name={user.nickname} email={user.email} />,
        status: <Status status={user.status} />,
        registrationDate: <Date date={user.createdDate} />,
        action: <ActionButton id={user.id} />,
      })),
    };
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Tables
        title="User List"
        columns={tableData.columns}
        rows={tableData.rows}
      />
      <Box display="flex" justifyContent="center" p={2}>
        {/* <Pagination
          count={tableData.totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="secondary"
          sx={{ color: "white" }}
        /> */}
      </Box>
      <Footer />
    </DashboardLayout>
  );
}

export default Index;
