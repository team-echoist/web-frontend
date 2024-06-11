import { useState, useEffect, useCallback } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Material Dashboard 2 React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Images
import burceMars from "assets/images/default_profile.jpg";
import backgroundImage from "assets/images/profile-background.png";
import Person4Icon from "@mui/icons-material/Person4";
import AxiosInstance from "../../../../api/AxiosInstance";
import { showToast } from "../../../../utils/toast";
import DeleteIcon from "@mui/icons-material/Delete";

function Header({ children }) {
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);
  const [profileImage, setProfileImage] = useState(burceMars);

  useEffect(() => {
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    window.addEventListener("resize", handleTabsOrientation);
    handleTabsOrientation();

    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  const handleImageChange = useCallback(async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfileImage(e.target.result);
      reader.readAsDataURL(file);

      // 파일을 multipart/form-data 형식으로 서버에 전송
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await AxiosInstance.post("/admin/images", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (response.data.statusCode === 201) {
          showToast.success("image uploaded successfully");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  }, []);

  return (
    <MDBox position="relative" mb={5}>
      <MDBox
        display="flex"
        alignItems="center"
        position="relative"
        minHeight="18.75rem"
        borderRadius="xl"
        sx={{
          backgroundImage: ({
            functions: { rgba, linearGradient },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.info.main, 0.1),
              rgba(gradients.info.state, 0.1)
            )}, url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          overflow: "hidden",
        }}
      />
      <Card
        sx={{
          position: "relative",
          mt: -8,
          mx: 3,
          py: 2,
          px: 2,
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <input
              accept="image/*"
              style={{ display: "none" }}
              id="profile-image-upload"
              type="file"
              onChange={handleImageChange}
            />
            <label
              htmlFor="profile-image-upload"
              style={{ position: "relative", display: "inline-block" }}
            >
              <MDAvatar
                src={profileImage}
                alt="profile-image"
                size="xl"
                shadow="sm"
                sx={{ cursor: "pointer" }}
              />
              <DeleteIcon
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  transform: "translate(50%, 50%)",
                  background: "white",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              />
            </label>
          </Grid>
          <Grid item>
            <MDBox height="100%" mt={0.5} lineHeight={1}>
              <MDTypography variant="h5" fontWeight="medium">
                Echoist Admin
              </MDTypography>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
            <AppBar position="static">
              <Tabs
                orientation={tabsOrientation}
                value={tabValue}
                onChange={handleSetTabValue}
              >
                <Tab label="Admin Request" icon={<Person4Icon />} />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
        {children}
      </Card>
    </MDBox>
  );
}

// Setting default props for the Header
Header.defaultProps = {
  children: "",
};

// Typechecking props for the Header
Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
