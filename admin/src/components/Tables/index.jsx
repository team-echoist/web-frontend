<<<<<<<< HEAD:admin/src/layouts/review/index.jsx
// review/index.jsx
// 앱 리뷰 확인 페이지
// TODO : 내용/유저 이름/관리자 댓글여부/기능버튼(댓글달기, 수정, 삭제)

========
/* eslint-disable react/prop-types */
>>>>>>>> 6b998453d8514a9b6157e1381d56f8aaddab7247:admin/src/components/Tables/index.jsx
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

<<<<<<<< HEAD:admin/src/layouts/review/index.jsx
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

function Index({ columns, rows }) {
========
import DataTable from "examples/Tables/DataTable";

function Tables({ title, columns, rows }) {
>>>>>>>> 6b998453d8514a9b6157e1381d56f8aaddab7247:admin/src/components/Tables/index.jsx
  return (
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
                  {title}
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
<<<<<<<< HEAD:admin/src/layouts/review/index.jsx
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Index;
========
      </Grid>
    </MDBox>
  );
}

export default Tables;
>>>>>>>> 6b998453d8514a9b6157e1381d56f8aaddab7247:admin/src/components/Tables/index.jsx
