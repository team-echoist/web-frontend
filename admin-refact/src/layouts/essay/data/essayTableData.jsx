// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import { useEffect, useState } from "react";
import AxiosInstance from "../../../api/AxiosInstance";

// TODO : 들어갈 요소
// (제목(title), 작성자(없음), 신고 여부(status), 작성일(createdDate), 관리(모달))
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
  const Status = ({ status }) => (
    <MDBox ml={-1}>
      <MDBadge
        badgeContent={status}
        color={status === "public" ? "success" : "dark"}
        variant="gradient"
        size="sm"
      />
    </MDBox>
  );

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
}
