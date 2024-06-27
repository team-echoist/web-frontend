import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import inquireTableData from "components/Tables/data/inquireTableData";
import Tables from "components/Tables";

function index() {
  const { columns, rows } = inquireTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Tables title="Notice" columns={columns} rows={rows} />
    </DashboardLayout>
  );
}

export default index;
