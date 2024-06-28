/* eslint-disable react-hooks/rules-of-hooks */
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import releaseTableData from "components/Tables/data/releaseTableData";
import Tables from "components/Tables";
import Footer from "examples/Footer";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function index() {
  const { columns, rows } = releaseTableData();
  const navigate =useNavigate();
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Tables title="Release Notes" columns={columns} rows={rows} />
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button variant="contained" color="dark" onClick={()=>{navigate('/update?title=release')}}>
          Update
        </Button>
      </Box>
      <Footer />
    </DashboardLayout>
  );
}

export default index;
