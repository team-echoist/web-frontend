import React from "react";
import TitleField from "./contents/TitleField";
import styled from "styled-components";
import ContentLayout from "./contentlayout/ContentLayout";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
const Test = styled.div`
  border: 3px solid red;
  width: 100%;
  height: 30rem;
`;
const LayoutContatiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

function UnfinishedWriting() {
  return (
    <Container>
      <TitleField />
      <LayoutContatiner>
        <ContentLayout>
            asdfasd
        </ContentLayout>
      </LayoutContatiner>
    </Container>
  );
}

export default UnfinishedWriting;
