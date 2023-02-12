import styled, { css } from "styled-components/native";

export const HomeContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_1};
    font-weight: bold;
  `}
`;
