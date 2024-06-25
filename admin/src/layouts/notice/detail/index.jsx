import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import BackgroudCard from "components/BackgroundCard";
import DefaultContent from "components/BackgroundCard/content/DefaultContent";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";


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
                notice Detail
              </MDTypography>
            </MDBox>
          </Card>
        </Grid>
      </MDBox>
      <BackgroudCard>
        <DefaultContent title="비상비상!!!" date="2024-06-25" writer="차은우" content="안농"/>
      </BackgroudCard>
      <Footer />
    </DashboardLayout>
  );
}

export default index;
