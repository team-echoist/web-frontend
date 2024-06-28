import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import releaseTableData from "components/Tables/data/releaseTableData";
import Tables from "components/Tables";

function index() {
  const {columns,rows} =releaseTableData();
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Tables
        title="Release Notes"
        columns={columns}
        rows={rows}
      />
    </DashboardLayout>
  );
}

export default index;

