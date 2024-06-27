import { Box, Typography } from "@mui/material";

function TwoContent() {
  return (
    <>
        {/* 왼쪽 컨텐츠 */}
        <Box sx={{ flex: 1, paddingRight: "15px" }}>
          <Typography variant="h4" sx={{ marginBottom: "20px" }}>
            왼쪽 컨텐츠 제목
          </Typography>
          <Typography variant="body1">
            왼쪽 컨텐츠 내용 Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Nulla accumsan tortor non magna tincidunt, sed dignissim eros
            tristique. Sed euismod turpis risus, sit amet facilisis leo egestas
            et.
          </Typography>
        </Box>

        {/* 세로 선 (구분선) */}
        <Box
          sx={{
            width: "1px",
            backgroundColor: "#cccccc",
            marginX: "15px",
          }}
        />

        {/* 오른쪽 컨텐츠 */}
        <Box sx={{ flex: 1, paddingLeft: "15px" }}>
          <Typography variant="h4" sx={{ marginBottom: "20px" }}>
            오른쪽 컨텐츠 제목
          </Typography>
          <Typography variant="body1">
            오른쪽 컨텐츠 내용 Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nulla accumsan tortor non magna tincidunt, sed
            dignissim eros tristique. Sed euismod turpis risus, sit amet
            facilisis leo egestas et.
          </Typography>
        </Box>
    </>
  );
}

export default TwoContent;
