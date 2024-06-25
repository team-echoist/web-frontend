import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

import AxiosInstance from "../../../api/AxiosInstance";
import ReviewDetailModal from "../ReviewDetailModal/ReviewDetailModal";
import Review from "../index";

// Images
import team2 from "assets/images/team-2.jpg";

export default function ReviewTableData() {
  const [reviews, setReviews] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedReviewId, setSelectedReviewId] = useState(null);
  const [selectedReviewDetail, setSelectedReviewDetail] = useState(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await AxiosInstance.get(`/api/admin/reviews`);
      setReviews(response.data.reviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const fetchReviewDetail = async (reviewId) => {
    try {
      const response = await AxiosInstance.get(
        `/api/admin/reviews/${reviewId}`
      );
      setSelectedReviewDetail(response.data);
    } catch (error) {
      console.error("Error fetching review detail:", error);
    }
  };

  const handleReviewClick = (reviewId) => {
    setSelectedReviewId(reviewId);
    fetchReviewDetail(reviewId);
    setModalOpen(true);
  };

  const handleReviewProcess = async (reviewId, processBody) => {
    try {
      const response = await AxiosInstance.post(
        `/api/admin/reviews/${reviewId}`,
        processBody
      );
      if (response.status === 200) {
        console.log("Review processed successfully");
        fetchReviews(page, limit);
        setModalOpen(false);
      }
    } catch (error) {
      console.error("Error processing review:", error);
    }
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedReviewId(null);
    setSelectedReviewDetail(null);
  };

  const Author = ({ userId }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar name={userId} size="sm" />
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
    action: <button onClick={() => handleReviewClick(review.id)}>Edit</button>,
  }));

  return (
    <>
      <ReviewDetailModal
        open={modalOpen}
        setOpen={setModalOpen}
        handleClose={handleClose}
        reviewId={selectedReviewId}
        reviewDetail={selectedReviewDetail}
        onProcess={handleReviewProcess}
      />
      <Review columns={columns} rows={rows} />
    </>
  );
}

ReviewTableData.propTypes = {
  userId: PropTypes.string,
  title: PropTypes.string,
};
