import React from "react";
import styled from "styled-components";
import FavoriteToggle from "..";

const IsFavoriteToggle = styled(FavoriteToggle).attrs({
  style: {
    color: "red",
    border: "1px solid red",
  },
})``;

export default { title: "FavoriteToggle" };

export const defaultFavoriteToggle = () => (
  <FavoriteToggle isToggle={false} onClick={() => {}} />
);

export const isFavoriteToggle = () => (
  <FavoriteToggle isToggle={true} onClick={() => {}} />
);
