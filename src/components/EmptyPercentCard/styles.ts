import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.Pressable`
  width: 100%;
  height: 130px;
  align-items: center;
  justify-content: center;
  padding: 20px 16px;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG_18}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_300};
    margin-bottom: 2px;
  `}
`;

export const Icon = styled(Feather).attrs(({ theme }) => ({
  size: 48,
  color: theme.COLORS.GRAY_300,
}))`
  margin-bottom: 16px;
`;
