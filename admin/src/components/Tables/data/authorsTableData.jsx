/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function data(data) {
  const Title = ({ name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDTypography display="block" variant="button">
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

  const DetailButton = (item) => {
    return (
      <Link to={`/notice-detail?id=${encodeURI(item)}`}>
        <Button
          variant="contained"
          color="primary"
          sx={{ color: "white !important" }}
        >
          go to detail
        </Button>
      </Link>
    );
  };
  data = [
    { title: "비상비상!!!", createdDate: "2024-06-25", id: 1 },
    { title: "비상비상!!!", createdDate: "2024-06-25", id: 2 },
  ];
  console.log("data", data);
  return {
    columns: [
      { Header: "title", accessor: "title", width: "45%", align: "left" },
      { Header: "date", accessor: "date", align: "center" },
      { Header: "detail", accessor: "detail", width: "10%", align: "center" },
    ],

    rows: data?.map((item) => ({
      title: <Title name={item.title} />,
      date: <Date date={item.createdDate} />,
      detail: <DetailButton data={item} />,
    })),
  };
}
