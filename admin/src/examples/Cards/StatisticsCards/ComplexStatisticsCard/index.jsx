import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import CardContent from "../CardContent";
import { Link } from "react-router-dom";
function ComplexStatisticsCard({ color, title, count, percentage, icon, url }) {
  const cardContent = (
    <CardContent
      color={color}
      title={title}
      count={count}
      percentage={percentage}
      icon={icon}
    />
  );

  return url ? (
    <Link to={url} style={{ textDecoration: "none", color: "inherit" }}>
      <Card>{cardContent}</Card>
    </Link>
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
