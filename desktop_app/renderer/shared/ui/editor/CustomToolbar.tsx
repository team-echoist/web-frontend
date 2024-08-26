import { Dispatch, SetStateAction, useState } from "react";
import TextIcon from "@/shared/assets/img/editor/text_basic.webp";
import TextHover from "@/shared/assets/img/editor/text.webp";
import BoldIcon from "@/shared/assets/img/editor/bold_basic.webp";
import BoldHover from "@/shared/assets/img/editor/bold.webp";
import UnderLineIcon from "@/shared/assets/img/editor/underline_basic.webp";
import UnderLineHover from "@/shared/assets/img/editor/underline.webp";
import MiddleLineIcon from "@/shared/assets/img/editor/middleline_basic.webp";
import MiddleLineHover from "@/shared/assets/img/editor/middleline.webp";
import PlaceIcon from "@/shared/assets/img/editor/place_basic.webp";
import PlaceHover from "@/shared/assets/img/editor/place.webp";
import ImageIcon from "@/shared/assets/img/editor/image_basic.webp";
import ImageHover from "@/shared/assets/img/editor/image.webp";
import TagIcon from "@/shared/assets/img/editor/tag_basic.webp";
import TagHover from "@/shared/assets/img/editor/tag.webp";
import SavedIcon from "@/shared/assets/img/editor/saved_basic.webp"
import styled from "styled-components";

const Container = styled.div`
  background: #1d1d1d !important;
  width: 100%;
  height: 50px;
`;
const Img = styled.img`
  width: 30px;
  height: 30px;
`;
const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  outline: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  background-size: cover;
  background-repeat: no-repeat;
`;
const IconDiv = styled.div`
  display: flex;
  gap: 30px;
  alignitems: center;
  padding-left: 26px;
`;

const CustomToolbar = ({ isModalOpen }: { isModalOpen: boolean }) => {
  const [buttonStates, setButtonStates] = useState({
    bold: false,
    underline: false,
    strike: false,
    location:false,
    tag:false,
    image:false,
    saved:false
  });
  const handleButtonClick = (button: keyof typeof buttonStates) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [button]: !prevState[button],
    }));
  };
  return (
    <Container id="toolbar">
      <IconDiv>
        <Button
          className="ql-customFontSize"
        >
          <Img
            src={isModalOpen ? TextHover.src : TextIcon.src}
            alt="Font Size"
            className="customFontSizeButton"
          />
        </Button>
        <Button
          className="ql-custom-bold"
          onClick={() => handleButtonClick("bold")}
        >
          <Img
            src={buttonStates.bold ? BoldHover.src : BoldIcon.src}
            alt="Bold"
            className="customBoldButton"
          />
        </Button>

        <Button
          className="ql-custom-underline"
          onClick={() => handleButtonClick("underline")}
        >
          <Img
            src={
              buttonStates.underline ? UnderLineHover.src : UnderLineIcon.src
            }
            alt="Underline"
            className="customUnderlineButton"
          />
        </Button>
        <Button
          className="ql-custom-strike"
          onClick={() => handleButtonClick("strike")}
        >
          <Img
            src={buttonStates.strike ? MiddleLineHover.src : MiddleLineIcon.src}
            alt="Strike"
            className="customStrikeButton"
          />
        </Button>
        <Button
          className="ql-custom-location"
          onClick={() => handleButtonClick("location")}
        >
          <Img
            src={buttonStates.location ? PlaceHover.src: PlaceIcon.src }
            alt="location"
            className="customLocationButton"
          />
        </Button>
        <Button
          className="ql-custom-tag"
          onClick={() => handleButtonClick("tag")}
        >
          <Img
            src={buttonStates.tag ? TagHover.src: TagIcon.src }
            alt="tag"
            className="customTagButton"
          />
        </Button>
        <Button
          className="ql-custom-image"
          onClick={() => handleButtonClick("image")}
        >
          <Img
            src={buttonStates.image ? ImageHover.src: ImageIcon.src }
            alt="imageIcon"
            className="customImageButton"
          />
        </Button>
        <Button
          className="ql-custom-saved"
          onClick={() => handleButtonClick("saved")}        >
          <Img
            src={SavedIcon.src}
            alt="savedIcon"
            className="customSavedButton"
          />
        </Button>
      </IconDiv>
    </Container>
  );
};
export default CustomToolbar;
