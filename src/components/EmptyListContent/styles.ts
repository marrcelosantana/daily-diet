import styled, { css } from "styled-components/native";

import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_300};
    font-size: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD_16}px;
  `};
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 48,
  color: theme.COLORS.GRAY_300,
}))`
  margin-bottom: 16px;
`;
