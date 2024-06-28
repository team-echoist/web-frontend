import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function userTableData(data) {
  const Author = ({ name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const RenderStatus = ({ status }) => (
    <MDBox
      ml={-1}
      sx={{
        fontSize: "0.8rem",
        marginLeft: "10px",
        borderRadius: "10px",
        width: "6rem",
        height: "2.5rem",
        backgroundColor: status ? "#1A73E8" : "#EC407A",
        color: "white !important",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
      }}
    >
      {status ? "activated" : "not activated"}
    </MDBox>
  );

  const DetailButton = ({ id }) => (
    <Link to={`/users/${encodeURI(id)}`}>
      <Button
        variant="contained"
        color="primary"
        sx={{ color: "white !important" }}
      >
        detail
      </Button>
    </Link>
  );

  return {
    columns: [
      { Header: "Name", accessor: "name", width: "45%", align: "left" },
      { Header: "Status", accessor: "status", align: "center" },
      { Header: "Registration Date", accessor: "createdDate", align: "center" },
      { Header: "Action", accessor: "action", align: "center" },
    ],
    rows:
      data?.users?.map((item) => ({
        name: <Author name={item.name} email={item.email} />,
        status: <RenderStatus status={item.status} />,
        createdDate: item.createdDate,
        action: <DetailButton id={item.id} />,
      })) || [],
  };
}
