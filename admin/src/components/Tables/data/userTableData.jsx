import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function userTableData(data) {
  const Name = ({ name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Nickname = ({ nickname }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {nickname}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const RenderStatus = ({ status }) => (
    <MDBox ml={-1}>
      <MDBadge
        badgeContent={status ? "activated" : "not activated"}
        color={status ? "success" : "warning"}
        variant="gradient"
        size="sm"
      />
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

  return {
    columns: [
      { Header: "Name", accessor: "name", align: "left" },
      { Header: "Nickname", accessor: "nickname", align: "left" },
      { Header: "Status", accessor: "status", align: "center" },
      { Header: "Registration Date", accessor: "createdDate", align: "center" },
      { Header: "Action", accessor: "action", align: "center" },
    ],
    rows:
      data?.users?.map((item) => ({
        name: <Name name={item.name} email={item.email} />,
        nickname: <Nickname nickname={item.nickname} />,
        status: <RenderStatus status={item.status} />,
        createdDate: item.createdDate,
        action: <DetailButton id={item.id} />,
      })) || [],
  };
}
