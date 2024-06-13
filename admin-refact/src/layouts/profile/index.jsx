// @mui material components
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";
import { showToast } from "../../utils/toast";

import { findAdmin } from "./util/findAdmin";
import { fetchData } from "./api";
import { useEffect, useState } from "react";

import EditModal from "./components/EditModal";
import AxiosInstance from "../../api/AxiosInstance";

function Overview() {
  const [data, setData] = useState({});
  const [editModalOpen, setEditModalOpen] = useState(false);

  const returnUserProfile = async () => {
    try {
      const adminList = await fetchData("/admin", "get");
      const admin = await findAdmin(adminList.data.admins);
      const adminProfile = await fetchData(`/admin/${admin.id}`, "get");
      setData((prev) => ({
        ...prev,
        adminProfile: adminProfile?.data,
      }));
    } catch (error) {
      console.log("err", error);
    }
  };

  const requestAdminList = async () => {
    const disabledAdmin = await fetchData("/admin/inactive", "get");
    if (disabledAdmin.status === 200) {
      setData((prev) => ({
        ...prev,
        disabledAdmin: disabledAdmin.data?.admins,
      }));
    }
  };

  useEffect(() => {
    returnUserProfile();
    requestAdminList();
  }, []);

  const editProfile = async () => {
    const body = Object.keys(data.editedProfile).reduce((acc, key) => {
      acc[key] = data.editedProfile[key];
      return acc;
    }, {});
    try {
      const editProfile = await fetchData("/admin", "put", body);
      if (editProfile.status === 200) {
        showToast.success("Profile edited successfully");
        setData((prev) => ({
          ...prev,
          adminProfile: editProfile.data,
        }));
        setEditModalOpen(false);
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      editedProfile: {
        ...prev.editedProfile,
        [name]: value,
      },
    }));
  };

  const makeActive = async (id) => {
    const makeAdminActive = await fetchData(`/admin/${id}`,"put", null, {
      params: {
        active: "true",
      },
    });
    if(makeAdminActive.status === 200){
      showToast.success("Admin activated successfully.");
      requestAdminList();
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header defaultProfileUrl={data?.adminProfile?.imageUrl}>
        <EditModal
          open={editModalOpen}
          setOpen={setEditModalOpen}
          data={data.adminProfile}
          setData={setData}
          onChange={handleChange}
          editProfile={editProfile}
        />
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={4}>
              <PlatformSettings />
            </Grid>
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <ProfileInfoCard
                title="profile information"
                description="echoist 최고 권력자 어드민 계정입니다."
                info={{
                  fullName: data?.adminProfile?.name || "에코이스트",
                  email: data?.adminProfile?.email,
                  information:
                    data?.adminProfile?.info || "아직 정보가 없습니다.",
                }}
                onClick={() => {
                  setEditModalOpen(true);
                }}
                social={[
                  {
                    icon: <FacebookIcon />,
                    color: "facebook",
                  },
                  {
                    icon: <TwitterIcon />,
                    color: "twitter",
                  },
                  {
                    icon: <InstagramIcon />,
                    color: "instagram",
                  },
                ]}
                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
            <Grid item xs={12} xl={4}>
              <ProfilesList
                title="어드민 요청 리스트"
                profiles={data?.disabledAdmin || []}
                shadow={false}
                makeActive={makeActive}
              />
            </Grid>
          </Grid>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
