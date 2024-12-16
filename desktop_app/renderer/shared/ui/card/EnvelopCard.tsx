import React from "react";
import styled from "styled-components";
import Envelop from "@/shared/assets/img/envelope.svg";

const Layout = styled.div`
  position: absolute;
  z-index: 1001;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function EnvelopCard() {
  return (
    <Layout>
      <Envelop />
    </Layout>
  );
}

export default EnvelopCard;
