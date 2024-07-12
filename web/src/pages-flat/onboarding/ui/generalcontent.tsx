import styled from "styled-components";
import { Button } from "@/shared/ui/button";
import ImageRenderer from "./ImageRenderer";

function GeneralContent() {
  return (
    <>
      <ImageRenderer />
      <Button text="시작하기" style="round_1" type="point" scale="small" />
    </>
  );
}

export default GeneralContent;
