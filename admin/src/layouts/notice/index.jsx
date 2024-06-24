import Tables from "components/Tables";
import authorsTableData from "components/Tables/data/authorsTableData";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function index() {
  const { columns, rows } = authorsTableData();
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Tables title="Notice" columns={columns} rows={rows} id="1" />
      <Footer />
    </DashboardLayout>
  );
}

export default index;
