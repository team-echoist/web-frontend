import ReviewList from "./ReviewList";

export default function data() {
  return {
    columns: [
      {
        Header: "리뷰 제목",
        accessor: "essayTitle",
        width: "30%",
        align: "left",
      },
      { Header: "작성자", accessor: "author", width: "30%", align: "left" },
      {
        Header: "처리 상황",
        accessor: "status",
        width: "15%",
        align: "center",
      },
      {
        Header: "리뷰 작성 일자",
        accessor: "registrationDate",
        width: "10%",
        align: "center",
      },
      { Header: "상세 보기", accessor: "action", width: "5%", align: "center" },
    ],

    rows: <ReviewList />,
  };
}
