import React, { useRef, TouchEvent, ReactNode, MouseEvent } from "react";
import styled from "styled-components";

const SwiperContainer = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  cursor: grab;
`;

const SwiperWrapper = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  width: 100%;
`;

const SwiperSlide = styled.div`
  flex: 0 0 100%;
  max-width: 100%;
  box-sizing: border-box;
`;

interface SwiperProps {
  children: ReactNode;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  maxStep: number;
}

function Swiper({ children, step, setStep, maxStep }: SwiperProps) {
  const startX = useRef<number>(0);
  const endX = useRef<number>(0);
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    startX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (startX.current - endX.current > 50) {
      setStep((prevStep) => (prevStep < maxStep ? prevStep + 1 : prevStep));
    } else if (endX.current - startX.current > 50) {
      setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
    }
  };
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    startX.current = e.clientX;
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (startX.current !== 0) {
      endX.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    if (startX.current - endX.current > 50) {
      setStep((prevStep) => (prevStep < maxStep ? prevStep + 1 : prevStep));
    } else if (endX.current - startX.current > 50) {
      setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
    }
    startX.current = 0;
    endX.current = 0;
  };

  return (
    <SwiperContainer
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <SwiperWrapper style={{ transform: `translateX(-${(step - 1) * 100}%)` }}>
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </SwiperWrapper>
    </SwiperContainer>
  );
}

export default Swiper;
