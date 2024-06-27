<<<<<<< HEAD
import { useEffect, useState } from "react";
import AxiosInstance from "../../../api/AxiosInstance";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

import team2 from "assets/images/team-2.jpg";

export default function ReportTableData() {
  const [page] = useState(1);
  const [limit] = useState(10);
  const [sort] = useState("most");
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchReports(page, limit, sort);
  }, [page, limit, sort]);

  const fetchReports = async (page, limit, sort) => {
    try {
      const response = await AxiosInstance.get(
        `${
          import.meta.env.VITE_ROOT_API_URL
        }/admin/reports?sort=${sort}&page=${page}&limit=${limit}`
      );
      setReports(response.data.data.reports);
    } catch (error) {
      console.log("리포트 에러 발생", error);
    }
  };

  // 신고 리포트 제목
  const Title = ({ essayTitle }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography
        display="block"
        variant="caption"
        color="text"
        fontWeight="medium"
      >
        {essayTitle}
      </MDTypography>
    </MDBox>
  );

  // 신고 당한 리포트 ID
  const EssayId = ({ essayId }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar name={essayId} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {essayId}
        </MDTypography>
=======
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
>>>>>>> 6b998453d8514a9b6157e1381d56f8aaddab7247
      </MDBox>
    </MDBox>
  );

<<<<<<< HEAD
  const columns = [
    {
      Header: "리포트 제목",
      accessor: "essayTitle",
      width: "35%",
      align: "left",
    },
    { Header: "리포트 ID", accessor: "essayId", width: "30%", align: "center" },
    {
      Header: "등록 날짜",
      accessor: "registrationDate",
      width: "20%",
      align: "center",
    },
    { Header: "액션", accessor: "action", align: "center" },
  ];

  const rows = reports.map((report) => ({
    essayId: <EssayId essayId={report.essayId} />,
    essayTitle: <Title essayTitle={report.essayTitle} />,
    registrationDate: (
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {new Date(report.oldestReportDate).toLocaleDateString()}
      </MDTypography>
    ),
    action: (
      <MDTypography
        component="a"
        href="#"
        variant="caption"
        color="text"
        fontWeight="medium"
      >
        Edit
      </MDTypography>
    ),
  }));

  return { columns, rows };
=======
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
      // TODO: 유저 이름/신고유저 이름/신고 사유/신고 게시글 상세보기(모달)
      { Header: "유저", accessor: "title", width: "45%", align: "left" },
      { Header: "신고유저", accessor: "name", width: "45%", align: "left" },
      { Header: "신고 사유", accessor: "status", align: "center" },
      { Header: "신고 날짜", accessor: "registrationDate", align: "center" },
      { Header: "게시글 상세", accessor: "action", align: "center" },
    ],

    rows: [
      {
        title: <Author image={team4} name="Michael" email="john@creative-tim.com" />,
        name: <Author image={team2} name="Michael" email="john@creative-tim.com" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="배고파서" color="success" variant="gradient" size="sm" />
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
        title: <Author image={team4} name="Alexa" email="john@creative-tim.com" />,
        name: <Author image={team3} name="Liras" email="alexa@creative-tim.com" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="그냥 맘에 안듦" color="blue" variant="gradient" size="sm" />
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
>>>>>>> 6b998453d8514a9b6157e1381d56f8aaddab7247
}
