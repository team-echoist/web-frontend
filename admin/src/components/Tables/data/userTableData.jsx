import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function data(data) {
  const Author = ({ name, email, nickname }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const RenderStatus = ({ status }) => {
    return (
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
  };

  const DetailButton = ({ id }) => (
    <Link to={`/update/${encodeURI(id)}`}>
      <Button
        variant="contained"
        color="primary"
        sx={{ color: "white !important" }}
      >
        Go to reply
      </Button>
    </Link>
  );

  return {
    columns: [
      { Header: "이름", accessor: "name", width: "45%", align: "left" },
      { Header: "구독여부", accessor: "status", align: "center" },
      { Header: "가입일", accessor: "createDate", align: "center" },
      { Header: "정보 수정", accessor: "action", align: "center" },
    ],

    rows:
      data?.inquiries?.map((item) => ({
        inquiry: <Author title={item.title} />,
        name: item?.user?.nickname,
        status: <RenderStatus status={item.processed} />,
        answer: <DetailButton id={item.id} />,
      })) || [],
    // rows: [
    //   {
    //     name: <Author name="John Michael" email="john@creative-tim.com" />,
    //     status: (
    //       <MDBox ml={-1}>
    //         <MDBadge
    //           badgeContent="Subscribe"
    //           color="success"
    //           variant="gradient"
    //           size="sm"
    //         />
    //       </MDBox>
    //     ),
    //     registrationDate: (
    //       <MDTypography
    //         component="a"
    //         href="#"
    //         variant="caption"
    //         color="text"
    //         fontWeight="medium"
    //       >
    //         23/04/18
    //       </MDTypography>
    //     ),
    //     action: (
    //       <MDTypography
    //         component="a"
    //         href="#"
    //         variant="caption"
    //         color="text"
    //         fontWeight="medium"
    //       >
    //         Edit
    //       </MDTypography>
    //     ),
    //   },
    //   {
    //     name: (
    //       <Author
    //         image={team3}
    //         name="Alexa Liras"
    //         email="alexa@creative-tim.com"
    //       />
    //     ),
    //     status: (
    //       <MDBox ml={-1}>
    //         <MDBadge
    //           badgeContent="Normal user"
    //           color="dark"
    //           variant="gradient"
    //           size="sm"
    //         />
    //       </MDBox>
    //     ),
    //     registrationDate: (
    //       <MDTypography
    //         component="a"
    //         href="#"
    //         variant="caption"
    //         color="text"
    //         fontWeight="medium"
    //       >
    //         11/01/19
    //       </MDTypography>
    //     ),
    //     action: (
    //       <MDTypography
    //         component="a"
    //         href="#"
    //         variant="caption"
    //         color="text"
    //         fontWeight="medium"
    //       >
    //         Edit
    //       </MDTypography>
    //     ),
    //   },
    // ],
  };
}
