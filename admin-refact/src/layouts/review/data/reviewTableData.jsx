import { useEffect, useState } from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import AxiosInstance from "../../../api/AxiosInstance";

// Images
import team2 from "assets/images/team-2.jpg";

function ReviewTableData() {
  const [reviews, setReviews] = useState([]);
  const [page] = useState(1);
  const [limit] = useState(10);

  useEffect(() => {
    fetchReviews(page, limit);
  }, [page, limit]);

  const fetchReviews = async (page, limit) => {
    try {
      const response = await AxiosInstance.get(
        `${
          import.meta.env.VITE_ROOT_API_URL
        }/admin/reviews?page=${page}&limit=${limit}`
      );
      setReviews(response.data.data.reviews);
    } catch (error) {
      console.log("error 발생", error);
    }
  };

  const Author = ({ image, userId }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={userId} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {userId}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

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
    author: <Author image={team2} userId={review.userId.toString()} />,
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

export default ReviewTableData;
