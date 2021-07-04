import React from "react";
import styled from "styled-components";
import { Body } from "../Paragraphs";
import { H5, H3 } from "../Headings";
import { BreakpointType } from "../../types";
import FavoriteToggleStories from "../FavoriteToggle/stories/FavoriteToggle.stories";
import { FavoriteToggle } from "..";
// import { Like } from "..";

const Container = styled.li`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  height: fit-content;
  padding: 18px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Name = styled(H3)`
  text-align: center;
  margin-bottom: 10px;
`;

const CommentBottom = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const Author = styled(H5)`
  text-align: right;
`;

type PropsType = {
  isToggle: boolean;
  name: string;
  body: string;
  email: string;
  onClick: () => void;
};

const CommentItem = ({ name, body, email, isToggle, onClick }: PropsType) => {
  return (
    <Container>
      <Name>{name}</Name>
      <Body>{body}</Body>
      <CommentBottom>
        <Author>{email}</Author>
        <FavoriteToggle isToggle={isToggle} onClick={onClick} />
      </CommentBottom>
    </Container>
  );
};

export default CommentItem;
