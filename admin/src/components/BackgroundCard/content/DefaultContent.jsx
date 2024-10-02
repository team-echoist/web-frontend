/* eslint-disable react/prop-types */
import { Typography } from "@mui/material";
import MDEditor from "@uiw/react-md-editor";

function DefaultContent({ title, content, date, writer }) {
  return (
    <>
      <>
        <Typography
          sx={{ marginBottom: "10px", marginTop: "15px", fontSize: "0.9rem" }}
        >
          {title}
        </Typography>
      </>

      <Typography variant="body1" sx={{ fontSize: "0.8rem" }}>
        작성일: {date} 작성자: {writer}
      </Typography>
      <hr
        style={{
          marginTop: "10px",
          borderTop: "1px solid lightgray",
          //   marginBottom: "20px",
          width: "100%",
        }}
      />
      <Typography
        variant="body1"
        sx={{ paddingTop: "20px", fontSize: "0.8rem", paddingLeft: "10px" }}
      >
        <MDEditor.Markdown
          source={content}
          style={{ whiteSpace: "pre-wrap" }}
        />
      </Typography>
    </>
  );
}

export default DefaultContent;
