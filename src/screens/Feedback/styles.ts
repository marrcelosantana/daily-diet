import styled, { css } from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

export type FeedbackStyleProps = {
  isInDiet: boolean;
};

export const Container = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;
  align-items: center;
  justify-content: center;
`;

export const Highlight = styled.View<FeedbackStyleProps>`
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
`;

export const Title = styled.Text<FeedbackStyleProps>`
  ${({ theme, isInDiet }) => css`
    font-size: ${theme.FONT_SIZE.XL_24}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${isInDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    text-align: center;
    margin-bottom: 16px;
  `}
`;

export const Subtitle = styled.Text<FeedbackStyleProps>`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD_16}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
    text-align: center;
    margin-bottom: 48px;
  `}
`;

export const SubtitleBold = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD_16}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
