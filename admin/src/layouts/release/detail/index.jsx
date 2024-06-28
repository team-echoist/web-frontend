/* eslint-disable react-hooks/rules-of-hooks */
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDBox from "components/MDBox";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDTypography from "components/MDTypography";
import BackgroudCard from "components/BackgroundCard";
import DefaultContent from "components/BackgroundCard/content/DefaultContent";

function index() {
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
                release Detail
              </MDTypography>
            </MDBox>
          </Card>
        </Grid>
      </MDBox>
      <BackgroudCard btnTitle="edit" link="">
        <DefaultContent
          title="2024-06-28 업데이트"
          date="2024-06-28"
          writer="어드민"
          content="2024-06-28 업데이트 되었습니다."
        />
      </BackgroudCard>
      <Footer/>
    </DashboardLayout>
  );
}

export default index;
