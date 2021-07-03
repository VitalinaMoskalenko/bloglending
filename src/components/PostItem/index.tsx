import React from "react";
import styled from "styled-components";
import { BreakpointType } from "../../types";
import { H3 } from "../Headings";
import { Body } from "../Paragraphs";

const Container = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  height: fit-content;
  padding: 18px;
  border-radius: 8px;
  margin-bottom: 10px;
  list-style-type: none;
  cursor: pointer;

  @media (max-width: ${BreakpointType.xs}px) {
    height: fit-content;
    align-items: flex-start;
    flex-direction: column;
  }
  :hover {
    opacity: 0.5;
  }
`;

const PostContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const DesktopType = styled(Body)`
  flex: 1;
  @media (max-width: ${BreakpointType.xs}px) {
    display: none;
  }
`;

const MobileType = styled(Body)`
  display: none;

  @media (max-width: ${BreakpointType.xs}px) {
    display: flex;
  }
`;

const Info = styled.div`
  margin-left: 20px;

  @media (max-width: ${BreakpointType.xs}px) {
    display: flex;
    flex-direction: column;
  }
`;

const Description = styled(Body)`
  flex: 1;
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: ${BreakpointType.xs}px) {
    margin-top: 12px;
    width: 100%;
  }
`;

type PropsType = {
  name: string;
  description: string;
  onClick: () => void;
};

const PostItem = ({ name, description, onClick }: PropsType) => {
  return (
    <Container onClick={onClick}>
      <PostContainer>
        <Info>
          <H3>{name}</H3>
        </Info>
      </PostContainer>
      <Description>{description}</Description>
    </Container>
  );
};

export default PostItem;
