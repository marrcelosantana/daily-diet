import styled, { css } from "styled-components/native";
import { Diet } from "@models/MealsByDate";

type RadioStyleProps = {
  type: Diet;
  isSelected?: boolean;
  hasMarginLeft?: boolean;
};

export const Container = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM_14}px;
    color: ${theme.COLORS.GRAY_200};
  `}
  margin-bottom: 8px;
`;

export const OptionsContainer = styled.View`
  flex-direction: row;
`;

export const OptionWrapper = styled.Pressable<RadioStyleProps>`
  ${({ theme, isSelected, type, hasMarginLeft }) => css`
    background-color: ${isSelected
      ? type === "inTheDiet"
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_600};
    border-color: ${isSelected
      ? type === "inTheDiet"
        ? theme.COLORS.GREEN_DARK
        : theme.COLORS.RED_DARK
      : "transparent"};
    margin-left: ${hasMarginLeft ? "8px" : 0};
  `};

  border-width: 1px;
  border-style: solid;
  border-radius: 6px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const OptionIcon = styled.View<RadioStyleProps>`
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  margin-right: 5px;
  background-color: ${({ theme, type }) => css`
    ${type === "inTheDiet" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK}
  `};
`;

export const OptionText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM_14};
  `}
`;
