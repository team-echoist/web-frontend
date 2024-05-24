import React from "react";
import "./index.css";
import Icon from "@mui/material/Icon";
import CloseIcon from "@mui/icons-material/Close";
import MDBox from "components/MDBox";

function index({ title, deleteIcon }) {
  // eslint-disable-next-line prettier/prettier
  return (
    <div className="tag-layout">
      <MDBox display="flex" justifyContent="center" alignItems="center">
        {title}
        <Icon
          fontSize="medium"
          color="inherit"
          onClick={() => {
            deleteIcon();
          }}
        >
          <CloseIcon style={{ width: "1rem" }} />
        </Icon>
      </MDBox>
    </div>
  );
}

export default index;
