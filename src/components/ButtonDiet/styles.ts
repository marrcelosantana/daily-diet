import styled, { css } from "styled-components/native";

export type ButtonDietStyleProps = {
  type: "inTheDiet" | "offDiet";
  isActive?: boolean;
};

export const Container = styled.TouchableOpacity<ButtonDietStyleProps>`
  width: 168px;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;

  ${({ theme, type, isActive }) =>
    isActive
      ? css`
          background-color: ${type === "inTheDiet"
            ? theme.COLORS.GREEN_LIGHT
            : theme.COLORS.RED_LIGHT};
          border: 1px solid
            ${type === "inTheDiet"
              ? theme.COLORS.GREEN_DARK
              : theme.COLORS.RED_DARK};
        `
      : css`
          background-color: ${theme.COLORS.GRAY_600};
        `};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD_16}px;
    color: ${theme.COLORS.GRAY_100};
  `};
`;

export const Icon = styled.View<ButtonDietStyleProps>`
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  margin-right: 8px;

  background-color: ${({ theme, type }) =>
    type === "inTheDiet" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;
