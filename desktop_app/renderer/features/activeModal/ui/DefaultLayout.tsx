import React from "react";
import styled from "styled-components";
import PrevButtonImg from "@/shared/assets/img/prevbutton.svg";
const Layout = styled.div`
  width: 100%;
  height:94vh;
  max-height: 94vh;
  z-index: 500;
  background: #121212;
  position: fixed;
  top: 32px;
  left: 265px;
  padding: 10px;
  overflow-y: auto;
`;
const PrevBtn = styled.button`
  all: unset;
  cursor: pointer;
`;

function DefaultLayout({
  children,
  modalHandler,
  name
}: {
  children: React.ReactNode;
  modalHandler: (name: string) => void;
  name:string
}) {
  return (
    <Layout>
      <PrevBtn onClick={()=>modalHandler(name)}>
        <PrevButtonImg />
      </PrevBtn>
      {children}
    </Layout>
  );
}

export default DefaultLayout;
