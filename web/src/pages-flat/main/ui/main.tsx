"use client";
import React from "react";
import * as Styled from "./main.styled";
import styled from "styled-components";
// import { useStore } from "@/shared/store";

const Container = styled.div`
    padding: 20px;
    font-family: Pretandard, sans-serif;
`

const Counter = styled.div`
    margin-bottom: 20px;
    font-size: 24px;
`

const Button = styled.div`
    cursor: pointer;
    color: white;
    background-color: #007bff;
    padding: 10px 20px;
    border-radius: 5px;
    display: inline-block;
    &:hover {
        background-color: #0056b3;
    }
`

export const Main = () => {
<<<<<<< HEAD
    const { bears, increasePopulation } = useStore()
=======
  // const { bears, increasePopulation } = useStore();
>>>>>>> df2e468fc59daa2b5d3a6cf5790fcf0c2bf58421

    return (
        <Container>
            {/* <Counter>Zustand! {bears}</Counter>
      <Button onClick={increasePopulation}>+1</Button> */}
            {/* <Styled.SLayout>Main</Styled.SLayout> */}
        </Container>
    )
}
