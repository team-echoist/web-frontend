import React from "react";
import styled from "styled-components";

interface fieldType {
  title?: string;
  title2?: String;
  desc?: string;
}

const Layout = styled.section`
  width: 100%;
  position: absolute;
  top: 174px;
`;
const H1 = styled.h1`
  color: #fff;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;
const H2 = styled.h2`
  color: #fff;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;
const P = styled.p`
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
`;
function TextField({ title, title2, desc }: fieldType) {
  return (
    <Layout>
      {title && <H1>{title}</H1>}
      {title2 && <H2>{title2}</H2>}
      {desc && <P>{desc}</P>}
    </Layout>
  );
}

export default TextField;
