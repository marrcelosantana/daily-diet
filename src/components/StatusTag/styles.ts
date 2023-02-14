import styled, { css } from "styled-components/native";

export type StatusTagStyleProps = {
  type: "inTheDiet" | "offDiet";
};

export const Container = styled.View`
  flex-direction: row;
  width: 170px;
  padding: 8px 16px;

  align-items: center;
  justify-content: center;
  border-radius: 9999px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Icon = styled.View<StatusTagStyleProps>`
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  margin-right: 8px;

  ${({ theme, type }) => css`
    background-color: ${type === "inTheDiet"
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  `}
`;

export const Title = styled.Text`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM_14}px;
  `}
`;
