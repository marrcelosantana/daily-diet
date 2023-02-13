import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

export const RegisterContainer = styled(SafeAreaView)`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  height: 100%;
`;

export const RegisterHeader = styled.View`
  width: 100%;
  height: 90px;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  flex-direction: row;
`;

export const RegisterHeaderTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.LG_18}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-right: 20px;
`;

export const RegisterForm = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 20px;
  padding: 24px;
`;

export const MiniInputsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonsDietTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM_14}px;
    color: ${theme.COLORS.GRAY_200};
  `}
  margin-top: 16px;
`;

export const ButtonsDietContainer = styled.View``;

export const ArrowLeftIcon = styled(Feather).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_100,
}))``;
