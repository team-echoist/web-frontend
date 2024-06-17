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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Title = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "제목", accessor: "title", width: "45%", align: "left" },
      { Header: "작성자", accessor: "name", width: "45%", align: "left" },
      { Header: "신고 여부", accessor: "status", align: "center" },
      { Header: "작성일", accessor: "registrationDate", align: "center" },
      { Header: "관리", accessor: "action", align: "center" },
    ],

    rows: [
      {
        title: <Title title="오늘은 쟁반짜장을 먹었습니다." />,
        name: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Subscribe" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        registrationDate: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        title: <Title title="Diary2" />,
        name: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="Normal user" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        registrationDate: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/01/19
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
    ],
  };
}
