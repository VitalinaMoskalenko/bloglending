import React, { CSSProperties } from "react";
import styled from "styled-components";
import { H2 } from "../Headings";

type PropsType = {
  style?: CSSProperties;
  onClick: () => void;
};

const LikeButton = styled(H2)`
  border: 1px solid black;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const FavoriteToggle = ({ style, onClick }: PropsType) => {
  return (
    <div onClick={onClick}>
      <LikeButton style={style}>&#10083;</LikeButton>
    </div>
  );
};

export default FavoriteToggle;
