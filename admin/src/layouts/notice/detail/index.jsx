import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DetailLayout from "layouts/detail"

function index() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <DetailLayout />
      <Footer />
    </DashboardLayout>
  );
}

export default index;
