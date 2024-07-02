/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import MDEditor from "@uiw/react-md-editor";

const PreviewLayout = ({ isChangeLayout, data }) => {
    console.log("data",data)
  const GeneralLayout = () => (
    <Box sx={{ fontSize: "0.8rem" }}>
      <Typography sx={{ marginBottom: "0.2rem", fontSize: "0.9rem" }}>
        제목: {data?.title}
      </Typography>
      <hr
        style={{
          marginTop: "10px",
          borderTop: "1px solid lightgray",
          width: "100%",
        }}
      />
      <Typography
        sx={{
          marginBottom: "1rem",
          fontSize: "0.8rem",
          marginTop: "8px",
        }}
      >
        name: {data?.user?.nickname}
      </Typography>

      <Typography sx={{ fontSize: "0.9rem" }}>{data?.content}</Typography>
    </Box>
  );

  const MarkDownPreview = () => {
    return (
      <MDEditor.Markdown
        source={data.content}
        style={{ whiteSpace: "pre-wrap" }}
      />
    );
  };

  return isChangeLayout ? <GeneralLayout /> : <MarkDownPreview />;
};

export default PreviewLayout;
