import React, { CSSProperties, useState } from "react";
import styled from "styled-components";
import { H2 } from "../Headings";

type PropsType = {
  style?: CSSProperties;
  isToggle: boolean;
  onClick: () => void;
};

type LikeButtonType = {
  isToggle: boolean;
};

const LikeButton = styled(H2)<LikeButtonType>`
  border: ${({ isToggle, theme }) =>
    isToggle
      ? `1px solid ${theme.colors.red}`
      : `1px solid ${theme.colors.black}`};
  color: ${({ isToggle, theme }) =>
    isToggle ? `${theme.colors.red}` : `${theme.colors.black}`};
  width: 40px;
  height: 40px;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const FavoriteToggle = ({ isToggle, onClick, style }: PropsType) => {
  return (
    <div>
      <LikeButton onClick={onClick} isToggle={isToggle} style={style}>
        &#10083;
      </LikeButton>
    </div>
  );
};

export default FavoriteToggle;
