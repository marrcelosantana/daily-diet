import styled, { css } from "styled-components/native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

export type ButtonTypeStyleProps = {
  type: "dark" | "light";
};

type Props = ButtonTypeStyleProps;

export const Container = styled.Pressable<Props>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  flex-direction: row;
  border-radius: 6px;
  margin-bottom: 24px;

  ${({ theme, type }) => css`
    background-color: ${type === "dark"
      ? theme.COLORS.GRAY_200
      : theme.COLORS.WHITE};
    border: 1px solid ${theme.COLORS.GRAY_200};
  `}
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    color: ${type === "dark" ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.SM_14}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-left: 5px;
`;

export const Icon = styled(MaterialIcons).attrs<Props>(({ theme, type }) => ({
  size: 18,
  color: type === "dark" ? theme.COLORS.WHITE : theme.COLORS.GRAY_100,
}))``;

export const IconCommunity = styled(MaterialCommunityIcons).attrs<Props>(
  ({ theme, type }) => ({
    size: 18,
    color: type === "dark" ? theme.COLORS.WHITE : theme.COLORS.GRAY_100,
  })
)``;
