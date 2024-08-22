import React from "react";
import styled from "styled-components";
import { Editor } from "@/shared/ui/editor";

const Layout = styled.main`
  margin-top: 100px;
`;

export const WriteEssay = () => {
  return (
    <Layout>
      <Editor />
    </Layout>
  );
};
