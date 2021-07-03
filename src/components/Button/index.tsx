import React, { CSSProperties } from "react";
import styled from "styled-components";
import { BreakpointType } from "../../types";
import { Body } from "../Paragraphs";

const Container = styled.button`
  height: 40px;
  width: 100px;
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  @media (max-width: ${BreakpointType.xs}px) {
    width: 100%;
  }

  :hover {
    opacity: 0.8;
  }
`;

const Text = styled(Body)`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;

type PropsType = {
  style?: CSSProperties;
  text: string;
  onClick: () => void;
};

const Button = ({ text, onClick, style }: PropsType) => {
  return (
    <Container style={style} onClick={onClick}>
      <Text>{text}</Text>
    </Container>
  );
};

export default Button;
