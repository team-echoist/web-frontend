import React, { useState, useEffect } from "react";
import TitleField from "./contents/TitleField";
import styled from "styled-components";
import ContentLayout from "./contentlayout/ContentLayout";
import Card from "./contents/Card";
import ContentsInformation from "./contents/ContentsInformation";
import BottomDialog from "./bottomdialog/BottomDialog";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const LayoutContatiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

function UnfinishedWriting() {
  const [essayData, setEssayData] = useState(null);
  useEffect(() => {
    const storedEssayData = localStorage.getItem("essayData");
    if (storedEssayData) {
      setEssayData(JSON.parse(storedEssayData));
    }
  }, []);
  console.log("essayData",essayData)
  return (
    <Container>
      <TitleField />

      <LayoutContatiner>
        <LayoutWrapper>
          <ContentsInformation />
          <ContentLayout>
            <Card></Card>
          </ContentLayout>
        </LayoutWrapper>
      </LayoutContatiner>
      <BottomDialog></BottomDialog>
    </Container>
  );
}

export default UnfinishedWriting;
