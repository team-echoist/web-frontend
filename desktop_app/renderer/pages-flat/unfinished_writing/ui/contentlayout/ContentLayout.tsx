import React from "react";
import styled from "styled-components";

const OuterContainer = styled.div`
  height: 100vh; /* 부모 컨테이너에 뷰포트 전체 높이 적용 */
  display: flex;
  flex-direction: column;
`;

const Layout = styled.main`
  border-right: 1px solid rgba(104, 104, 104, 0.1);
  border-left: 1px solid rgba(104, 104, 104, 0.1);
  display: flex;
  width: 900px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  height: 100%;
  overflow-y: auto;
`;

function ContentLayout({ children }: { children: React.ReactNode }) {
  return (
    <OuterContainer>
      <Layout>{children}</Layout>
    </OuterContainer>
  );
}

export default ContentLayout;