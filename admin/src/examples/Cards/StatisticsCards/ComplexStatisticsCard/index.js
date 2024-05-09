/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import CardContent from "../CardContent";

function ComplexStatisticsCard({ color, title, count, percentage, icon, url }) {
  const cardContent = (
    <CardContent color={color} title={title} count={count} percentage={percentage} icon={icon} />
  );

  return url ? (
    <a href={url} style={{ textDecoration: "none", color: "inherit" }}>
      <Card>{cardContent}</Card>
    </a>
  ) : (
    <Card>{cardContent}</Card>
  );
}

ComplexStatisticsCard.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  ]),
  title: PropTypes.string.isRequired,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  percentage: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "white",
    ]),
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
  }),
  icon: PropTypes.node.isRequired,
};

ComplexStatisticsCard.propTypes = {
  ...CardContent.propTypes,
  url: PropTypes.string,
};
export default ComplexStatisticsCard;
