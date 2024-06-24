/* eslint-disable react-hooks/rules-of-hooks */
import Tables from "components/Tables";
import authorsTableData from "components/Tables/data/authorsTableData";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function index() {
  const { columns, rows } = authorsTableData();

  const navigate = useNavigate();

  const handleUpdateClick = () => {
    navigate("/update/update");
  };
  
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Tables title="Notice" columns={columns} rows={rows} id="1" />
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
