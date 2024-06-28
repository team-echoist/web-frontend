/* eslint-disable react-hooks/rules-of-hooks */
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import BackgroudCard from "components/BackgroundCard";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../../../api";

function Index() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const [data, setData] = useState({});

  useEffect(() => {
    getDetail();
  }, [id]);

  const getDetail = async () => {
    try {
      const response = await fetchData(`/admin/users/${id}`, "get");
      setData(response.data);
    } catch (error) {
      console.error("user detail error", error);
    }
  };

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
                Users Detail
              </MDTypography>
            </MDBox>
          </Card>
        </Grid>
      </MDBox>
      <BackgroudCard
        btnTitle="list"
        link={`/users`}
        optionalBtnTitle="edit"
        optionalBtnLink="/users/${id}"
      >
        <MDBox p={3}>
          <MDTypography variant="h6">User Details</MDTypography>
          <MDTypography>ID: {data.id}</MDTypography>
          <MDTypography>Nickname: {data.nickname}</MDTypography>
          <MDTypography>Email: {data.email}</MDTypography>
          <MDTypography>Gender: {data.gender}</MDTypography>
          <MDTypography>Profile Image: {data.profileImage}</MDTypography>
          <MDTypography>
            Birth Date: {new Date(data.birthDate).toLocaleDateString()}
          </MDTypography>
          <MDTypography>Role: {data.role}</MDTypography>
          <MDTypography>Status: {data.status}</MDTypography>
          <MDTypography>
            Subscription End:{" "}
            {new Date(data.subscriptionEnd).toLocaleDateString()}
          </MDTypography>
          <MDTypography>
            Created Date: {new Date(data.createdDate).toLocaleDateString()}
          </MDTypography>
          <MDTypography>
            Updated Date: {new Date(data.updatedDate).toLocaleDateString()}
          </MDTypography>
          <MDTypography>
            Deleted Date:{" "}
            {data.deletedDate
              ? new Date(data.deletedDate).toLocaleDateString()
              : "N/A"}
          </MDTypography>
          <MDTypography>Reputation: {data.reputation}</MDTypography>
          <MDTypography>Report Count: {data.reportCount}</MDTypography>
          <MDTypography>Review Count: {data.reviewCount}</MDTypography>
          <MDTypography>Essay Count: {data.essayCount}</MDTypography>
        </MDBox>
      </BackgroudCard>
      <Footer />
    </DashboardLayout>
  );
}

export default Index;
