import styled from "styled-components";
import videoSrc from "@/shared/assets/video/apponboarding_1.webm";

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const VideoContents = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
`;

function FirstStepContent() {
  return (
    <VideoContainer>
      <VideoContents controls autoPlay loop muted>
        <source src={videoSrc} type="video/webm" />
      </VideoContents>
    </VideoContainer>
  );
}

export default FirstStepContent;
