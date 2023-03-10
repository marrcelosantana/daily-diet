import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

export type StatisticsStyleProps = string;

type Props = {
  type: StatisticsStyleProps;
};

export const Container = styled(SafeAreaView)<Props>`
  width: 100%;
  height: 100%;
  ${({ theme, type }) => css`
    background-color: ${type === "inTheDiet"
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
  `}
`;

export const Header = styled.View`
  height: 200px;
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XXL_32}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const HeaderSubtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.MD_16}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  align-items: center;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const GoBackButton = styled.TouchableOpacity`
  padding: 12px 0 0 12px;
`;

export const ArrowLeftIcon = styled(Feather).attrs<Props>(
  ({ theme, type }) => ({
    size: 24,
    color:
      type === "inTheDiet" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
  })
)``;

export const ContentTitle = styled.Text`
  margin-bottom: 24px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.SM_14}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const GeneralStatisticsCard = styled.View`
  width: 100%;
  height: 89px;
  padding: 16px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  margin-bottom: 16px;
`;

export const CardTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XL_24}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const CardSubtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.SM_14}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  text-align: center;
`;

export const FooterCardsContainer = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const InTheDietCard = styled.View`
  width: 48%;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  height: 89px;
  padding: 16px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const OffDietCard = styled.View`
  width: 48%;
  background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
  height: 89px;
  padding: 16px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-left: 4%;
`;
