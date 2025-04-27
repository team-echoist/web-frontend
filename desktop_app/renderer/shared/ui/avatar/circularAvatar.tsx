import React from "react";
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";

const Layout = styled.div<{ width?: number; height?: number }>`
  width: ${({ width }) => (width ? `${width}px` : "75px")};
  height: ${({ height }) => (height ? `${height}px` : "75px")};
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #1a1a1a;
`;

function CircularAvatar({
  img,
  width,
  height,
}: {
  img:any;
  width: number;
  height: number;
}) {
  return (
    <Layout width={width} height={height}>
      <Image src={img} alt="Circular Avatar" width={width} height={height} />
    </Layout>
  );
}

export default CircularAvatar;
