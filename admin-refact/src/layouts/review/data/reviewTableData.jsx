// 앱 리뷰 확인 페이지
// TODO : 내용/유저 이름/관리자 댓글여부/기능버튼(댓글달기, 수정, 삭제)

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

export default function data() {
  const [review, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    fetchReviews(page, limit);
  }, [page, limit]);

  const fetchReviews = async (page, limit) => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_ROOT_API_URL
        }/admin/reviews?page=${page}&limit=${limit}`
      );
      setReviews(response.data.reviews);
    } catch (error) {
      console.log("error 발생", error);
    }
  };

  // 응답예시
  // {
  //   "reviews": [
  //     {
  //       "id": 0,
  //       "type": "string",
  //       "processed": true,
  //       "createDate": "2024-06-17T05:50:11.822Z",
  //       "processedDate": "2024-06-17T05:50:11.822Z",
  //       "userId": 0,
  //       "essayId": 0,
  //       "essayTitle": "string"
  //     }
  //   ],
  //   "totalPage": 0,
  //   "page": 0,
  //   "total": 0
  // }

  // TODO : 이미지 추가 요청 후 추가
  // image, userId

  // 리뷰 작성자
  const Author = ({ image, userId }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={userId} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {userId}
        </MDTypography>
        {/* <MDTypography variant="caption">{email}</MDTypography> */}
      </MDBox>
    </MDBox>
  );

  // 리뷰 제목
  const Title = ({ title }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography
        display="block"
        variant="caption"
        color="text"
        fontWeight="medium"
      >
        {title}
      </MDTypography>
    </MDBox>
  );

  const columns = [
    {
      Header: "리뷰 제목",
      accessor: "essayTitle",
      width: "30%",
      align: "left",
    },
    { Header: "작성자", accessor: "author", width: "30%", align: "left" },
    { Header: "처리 상황", accessor: "status", width: "15%", align: "center" },
    {
      Header: "리뷰 작성 일자",
      accessor: "registrationDate",
      width: "10%",
      align: "center",
    },
    { Header: "상세 보기", accessor: "action", width: "5%", align: "center" },
  ];

  const rows = reviews.map((review) => ({
    essayTitle: <Title title={review.essayTitle} />,
    author: <Author image={team2} userId={review.userId} />,
    status: (
      <MDBox ml={-1}>
        <MDBadge
          badgeContent={review.processed ? "확인 완료" : "미확인"}
          color={review.processed ? "success" : "warning"}
          variant="gradient"
          size="sm"
        />
      </MDBox>
    ),
    registrationDate: (
      <MDTypography
        component="a"
        href="#"
        variant="caption"
        color="text"
        fontWeight="medium"
      >
        {new Date(review.createDate).toLocaleDateString()}
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
