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
import MDBadge from "components/MDBadge";

export default function data() {
  const Title = ({ name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
        <MDTypography display="block" variant="button" >
          {name}
        </MDTypography>
    </MDBox>
  );

  const Date = ({ date }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography
        display="block"
        variant="caption"
        color="text"
        fontWeight="medium"
      >
        {date}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "title", accessor: "title", width: "45%", align: "left" },
      { Header: "date", accessor: "date", align: "center" },
    ],

    rows: [
      {
        title: <Title name="비상 비상 공지사항 입니다."  />,
        date:<Date date="2024-06-24" />
      },
      {
        title: <Title name="emergency!!!!!!!!!"  />,
        date:<Date date="2024-06-24"/>
      },
     
    ],
  };
}
