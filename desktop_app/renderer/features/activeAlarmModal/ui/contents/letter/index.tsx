import React from "react";
import BigLetter from "@/shared/assets/img/linkedout_letter_big.webp";
import ReportedLetter from "@/shared/assets/img/reported_letter.webp";
import Letter from "./Letter";
import styled from "styled-components";

const Layout = styled.div`
  width: 430px;
  z-index: 10000;
  height: 97vh;
  position: fixed;
  top: 32px;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
`;


function index() {
  return (
    <Layout>
      <Letter img={BigLetter} width={430} height={230} text="Linked-out"/>
    </Layout>
  );
}

export default index;
