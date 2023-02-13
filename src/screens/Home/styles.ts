import styled, { css } from "styled-components/native";

export const HomeContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  padding: 48px 24px;
`;

export const HomeContent = styled.View`
  width: 100%;
  margin-top: 24px;
  flex: 1;
`;

export const HomeTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD_16}px;
  `}
  margin-bottom: 10px;
`;
