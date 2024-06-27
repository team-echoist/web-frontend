<<<<<<< HEAD
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

// Images
import { useEffect, useState } from "react";
import AxiosInstance from "../../../api/AxiosInstance";

export default function EssayTableData() {
  const [page] = useState(1);
  const [limit] = useState(10);
  const [essay, setEssay] = useState([]);

  useEffect(() => {
    fetchEssay(page, limit);
  }, [page, limit]);

  const fetchEssay = async (page, limit) => {
    try {
      const response = await AxiosInstance.get(
        `${
          import.meta.env.VITE_ROOT_API_URL
        }/admin/essays?page=${page}&limit=${limit}`
      );
      setEssay(response.data.data.essays);
    } catch (error) {
      console.log("에세이 에러 발생", error);
    }
  };

  // 에세이 제목
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

  // 에세이 상태
  const Status = ({ status }) => {
    let color;
    switch (status) {
      case "linkedout":
        color = "success";
        break;
      case "public":
        color = "warning";
        break;
      case "private":
        color = "light";
        break;
      default:
        color = "dark";
    }

    return (
      <MDBox ml={-1}>
        <MDBadge
          badgeContent={status}
          color={color}
          variant="gradient"
          size="sm"
        />
      </MDBox>
    );
  };

  // 테이블 컬럼 설정
  const columns = [
    { Header: "번호", accessor: "id", width: "10%", align: "left" },
    { Header: "제목", accessor: "title", width: "30%", align: "left" },
    { Header: "내용", accessor: "content", width: "30%", align: "left" },
    { Header: "공개 여부", accessor: "status", align: "center" },
    { Header: "작성일", accessor: "createdDate", align: "center" },
    { Header: "관리", accessor: "action", align: "center" },
  ];

  const rows = essay.map((essay) => ({
    id: (
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {essay.id}
      </MDTypography>
    ),
    title: <Title essayTitle={essay.title} />,
    content: (
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {essay.content}
      </MDTypography>
    ),
    status: <Status status={essay.status} />,
    createdDate: (
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {new Date(essay.createdDate).toLocaleDateString()}
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
>>>>>>> 6b998453d8514a9b6157e1381d56f8aaddab7247
}
