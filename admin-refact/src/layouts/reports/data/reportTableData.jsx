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
      console.log(response.data);
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
      </MDBox>
    </MDBox>
  );

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
}
