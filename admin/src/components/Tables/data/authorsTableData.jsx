/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function data(data, deleteFunc) {
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

  const DetailButton = (id) => {
    return (
      <Link to={`/notice-detail?id=${encodeURI(JSON.stringify(id))}`}>
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
  const DeleteButton = ({ id }) => {
    return (
      <Button
        variant="contained"
        color="primary"
        sx={{
          backgroundColor: "#ff1744",
          color: "white !important",
          "&:hover": {
            backgroundColor: "#d50000",
          },
        }}
        onClick={() => {
          deleteFunc(id);
        }}
      >
        Delete
      </Button>
    );
  };
  return {
    columns: [
      { Header: "title", accessor: "title", width: "45%", align: "left" },
      { Header: "date", accessor: "date", align: "center" },
      { Header: "detail", accessor: "detail", width: "10%", align: "center" },
      { Header: "delete", accessor: "delete", width: "10%", align: "center" },
    ],

    rows: data?.Notices?.map((item) => ({
      title: <Title name={item.title} />,
      date: <Date date={item.createdDate.substring(0, 10)} />,
      detail: <DetailButton id={item.id} />,
      delete: <DeleteButton id={item.id} />,
    })),
  };
}
