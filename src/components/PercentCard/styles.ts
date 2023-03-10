import styled, { css } from "styled-components/native";

import { Feather } from "@expo/vector-icons";

export type PercentCardStyleProps = string;

type Props = {
  type: PercentCardStyleProps;
};

export const Container = styled.Pressable<Props>`
  width: 100%;
  height: 130px;
  align-items: center;
  justify-content: center;
  padding: 20px 16px;
  border-radius: 8px;

  ${({ theme, type }) => css`
    background-color: ${type === "inTheDiet"
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
  `}
`;

export const Header = styled.View`
  margin-left: auto;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL_32}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
    margin-bottom: 2px;
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD_16}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
    margin-bottom: 2px;
  `}
`;

export const ArrowUpRightIcon = styled(Feather).attrs<Props>(
  ({ theme, type }) => ({
    size: 24,
    color:
      type === "inTheDiet" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  })
)``;
