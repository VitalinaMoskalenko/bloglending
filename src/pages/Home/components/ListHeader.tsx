import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { H2 } from "../../../components";
import { BreakpointType } from "../../../types";

const Container = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;

  @media (max-width: ${BreakpointType.xs}px) {
    display: none;
  }
`;

const HeaderTitle = styled(H2)`
  flex: 1;
  font-weight: bold;
`;

const baseTranslationPath = "Home.";

const ListHeader = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <HeaderTitle>{t(`${baseTranslationPath}title`)}</HeaderTitle>
      <HeaderTitle>{t(`${baseTranslationPath}description`)}</HeaderTitle>
    </Container>
  );
};

export default ListHeader;
