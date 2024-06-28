import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function data() {
  const EssayId = ({ essayId }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {essayId}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

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

  const Count = ({ reportCount }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography
        display="block"
        variant="caption"
        color="text"
        fontWeight="medium"
      >
        {reportCount}
      </MDTypography>
    </MDBox>
  );

  const DetailButton = ({ id }) => (
    <Link to={`/detail?id=${encodeURI(id)}`}>
      <Button
        variant="contained"
        color="primary"
        sx={{ color: "white !important" }}
      >
        detail
      </Button>
    </Link>
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return {
    columns: [
      { Header: "ID", accessor: "essayId", align: "left" },
      { Header: "Title", accessor: "essayTitle", align: "left" },
      { Header: "Report Count", accessor: "reportCount", align: "center" },
      { Header: "Created Date", accessor: "createdDate", align: "center" },
      { Header: "Action", accessor: "action", align: "center" },
    ],

    rows:
      data?.essays?.map((item) => ({
        essayId: <EssayId id={item.essayId} />,
        essayTitle: <Title title={item.essayTitle} />,
        reportCount: <Count reportCount={item.reportCount} />,
        createdDate: formatDate(item.createdDate),
        action: <DetailButton id={item.id} />,
      })) || [],
  };
}
