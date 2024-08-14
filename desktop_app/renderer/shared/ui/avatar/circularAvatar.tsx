import React from "react";
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";

const Layout = styled.div`
  width: 75px;
  height: 75px;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function CircularAvatar({
  img,
}: {
  img: StaticImageData | string;
}) {
  return (
    <Layout>
      <Image src={img} alt="Circular Avatar" width={75} height={75} />
    </Layout>
  );
}

export default CircularAvatar;