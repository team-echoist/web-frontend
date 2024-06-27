/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

// Images
import LogoAsana from "assets/images/small-logos/logo-asana.svg";

export default function data() {
  const Project = ({  title }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDTypography
        display="block"
        variant="button"
        fontWeight="medium"
        ml={1}
        lineHeight={1}
      >
        {title}
      </MDTypography>
    </MDBox>
  );

  const AnswerButton = () => (
    <Link to="">
      <Button
        variant="contained"
        color="primary"
        sx={{ color: "white !important" }}
      >
        Go to reply
      </Button>
    </Link>
  );

  const RenderStatus = ({ status }) => {
    return (
      <MDBox
        ml={-1}
        sx={{
          fontSize: "0.8rem",
          marginLeft: "10px",
          borderRadius: "10px",
          width: "6rem",
          height: "2.5rem",
          backgroundColor: status ? "#1A73E8" : "#EC407A",
          border: "3px solid red",
          color: "white !important",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
        }}
      >
        {status ? "답변완료" : "답변대기"}
      </MDBox>
    );
  };

  return {
    columns: [
      {
        Header: "Customer Inquiry",
        accessor: "inquiry",
        width: "30%",
        align: "left",
      },
      { Header: "name", accessor: "name", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "answer", accessor: "answer", align: "center" },
    ],

    rows: [
      {
        inquiry: <Project  title="글 작성할때 작성이 두번 됩니다." />,
        name: (
          <MDTypography
            component="a"
            href="#"
            variant="button"
            color="text"
            fontWeight="medium"
          >
            변우석
          </MDTypography>
        ),
        status: <RenderStatus></RenderStatus>,
        answer: <AnswerButton color="info" value={60} />,
      },
    ],
  };
}
