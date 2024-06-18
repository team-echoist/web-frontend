/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

import Divider from "@mui/material/Divider";
import {NavLink } from "react-router-dom";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Custom styles for the Configurator
import ConfiguratorRoot from "examples/Configurator/ConfiguratorRoot";

import CloseIcon from "@mui/icons-material/Close";
import Link from "@mui/material/Link";
import SidenavCollapse from "examples/Sidenav/SidenavCollapse";
import List from "@mui/material/List";

// Material Dashboard 2 React context
import { useMaterialUIController, setOpenConfigurator } from "context";

function Configurator({ routes }) {
  const [controller, dispatch] = useMaterialUIController();
  const { openConfigurator, darkMode } = controller;
  const collapseName = location.pathname.replace("/", "");


  const handleCloseConfigurator = () => setOpenConfigurator(dispatch, false);

  const renderRoutes = routes?.map(
    ({ type, name, icon, noCollapse, key, href, route, onClick }) => {
      let returnValue;
      if (type === "collapse") {
        returnValue = href ? (
          <Link
            href={href}
            key={key}
            target="_blank"
            rel="noreferrer"
            sx={{ textDecoration: "none" }}
          >
            <SidenavCollapse
              name={name}
              icon={icon}
              active={key === collapseName}
              noCollapse={noCollapse}
            />
          </Link>
        ) : name === "logout" ? (
          <div
            onClick={() => {
              onClick();
            }}
          >
            <SidenavCollapse
              name={name}
              icon={icon}
              active={key === collapseName}
            />
          </div>
        ) : (
          <NavLink key={key} to={route}>
            <SidenavCollapse
              name={name}
              icon={icon}
              active={key === collapseName}
            />
          </NavLink>
        );
      }
      return returnValue;
    }
  );

  return (
    <ConfiguratorRoot variant="permanent" ownerState={{ openConfigurator }}>
      <MDBox
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={4}
        pb={0.5}
        px={3}
      >
        <MDBox>
          <MDTypography variant="h5" style={{ color: "white" }}>
            Linkedout Dashboard
          </MDTypography>
        </MDBox>

        <CloseIcon
          style={{ color: "white" }}
          sx={({ typography: { size }, palette: { dark, white } }) => ({
            fontSize: `${size.lg} !important`,
            color: darkMode ? white.main : dark.main,
            stroke: "currentColor",
            strokeWidth: "2px",
            cursor: "pointer",
            transform: "translateY(5px)",
          })}
          onClick={handleCloseConfigurator}
        />
      </MDBox>

      <Divider />
      <List>{renderRoutes}</List>
    </ConfiguratorRoot>
  );
}

export default Configurator;
