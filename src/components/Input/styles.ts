import styled, { css } from "styled-components/native";

export const InputContainer = styled.View`
  margin-top: 20px;
`;

export const InputTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM_14}px;
    color: ${theme.COLORS.GRAY_200};
  `};
  margin-bottom: 2px;
`;

export const InputForm = styled.TextInput`
  width: 100%;
  padding: 14px;
  border-radius: 6px;

  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD_16}px;
    color: ${theme.COLORS.GRAY_100};
    border: 1px solid ${theme.COLORS.GRAY_500};
  `};
`;
