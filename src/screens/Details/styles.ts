import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

export type DetailsStyleProps = {
  type: string;
};

export const Container = styled(SafeAreaView)<DetailsStyleProps>`
  width: 100%;
  height: 100%;
  align-items: center;

  ${({ theme, type }) => css`
    background-color: ${type === "inTheDiet"
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
  `}
`;

export const Header = styled.View`
  width: 100%;
  padding: 0 24px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 90px;
`;

export const HeaderTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.LG_18}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-right: 24px;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 20px;
  padding: 24px;
`;

export const DescriptionContainer = styled.View`
  width: 100%;
  margin-top: 16px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL_24}px;
  `}
  margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD_16}px;
  `}
`;

export const InfoContainer = styled.View`
  width: 100%;
  margin: 32px 0px 16px 0px;
`;

export const InfoTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM_14}px;
  `}
`;

export const InfoSubtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD_16}px;
  `}
  margin-top: 8px;
`;

export const ButtonsContainer = styled.View`
  margin-top: 240px;
  width: 100%;
`;

export const ArrowLeftIcon = styled(Feather).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_100,
}))``;
