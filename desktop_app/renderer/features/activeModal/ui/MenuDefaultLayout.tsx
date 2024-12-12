import React from "react";
import styled from "styled-components";
import PrevButtonImg from "@/shared/assets/img/prevbutton.svg";

const Layout = styled.div<{ issubmodal: boolean }>`
  width: 100%;
  height: 94vh;
  max-height: 94vh;
  z-index: ${({ issubmodal }) => (issubmodal ? "1000" : "500")};
  background: #121212;
  position: absolute;
  padding: 10px;
  overflow-y: auto;
`;
const PrevBtn = styled.button`
  all: unset;
  cursor: pointer;
`;

function MenuDefaultLayout({
  children,
  modalHandler,
  name,
  isSubModal = false,
}: {
  children: React.ReactNode;
  modalHandler: (name: string) => void;
  name: string;
  isSubModal?: boolean;
}) {
  return (
    <Layout issubmodal={isSubModal}>
      <PrevBtn onClick={() => modalHandler(name)}>
        <PrevButtonImg />
      </PrevBtn>
      {children}
    </Layout>
  );
}

export default MenuDefaultLayout;
