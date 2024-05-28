import PropTypes from "prop-types";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

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

Author.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const Title = ({ title, description }) => (
  <MDBox lineHeight={1} textAlign="left">
    <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
      {title}
    </MDTypography>
    <MDTypography variant="caption">{description}</MDTypography>
  </MDBox>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default function data() {
  return {
    columns: [
      { Header: "내용", accessor: "title", width: "45%", align: "left" },
      { Header: "작성자", accessor: "name", width: "45%", align: "left" },
      { Header: "관리자 댓글여부", accessor: "status", align: "center" },
      { Header: "작성일", accessor: "registrationDate", align: "center" },
      { Header: "관리", accessor: "action", align: "center" },
    ],

    rows: [
      {
        title: <Title title="앱 직이네예" description="" />,
        name: <Author name="John Michael" email="john@creative-tim.com" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="YES" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        registrationDate: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
      {
        title: <Title title="제 일생일대 일기를 링크드아웃덕분에 써보았습니다." description="" />,
        name: <Author name="Alexa Liras" email="alexa@creative-tim.com" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="NO" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        registrationDate: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/01/19
          </MDTypography>
        ),
        action: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
    ],
  };
}
