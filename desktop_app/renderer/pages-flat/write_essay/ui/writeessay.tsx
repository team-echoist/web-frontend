import React from "react";
import styled from "styled-components";
// import { Editor } from "@/shared/ui/editor";
import dynamic from 'next/dynamic';

const Editor = dynamic(
  () => import('@/shared/ui/editor').then(mod => mod.Editor),
  { ssr: false }
);

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
