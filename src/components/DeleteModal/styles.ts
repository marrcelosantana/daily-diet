import { StyleSheet } from "react-native";

import styled, { css } from "styled-components/native";

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    opacity: 0.8,
  },
});

export const CenteredView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #000;
  opacity: 0.9;
`;

export const Container = styled.View`
  width: 327px;
  height: 192px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 8px;
  padding: 24px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZE.LG_18}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  text-align: center;
  margin-bottom: 16px;
`;

export const ButtonsContainer = styled.View`
  width: 100%;
  flex-direction: row;
`;

const Button = styled.Pressable`
  width: 135px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM_14}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const ConfirmButton = styled(Button)`
  margin-left: 8px
    ${({ theme }) => css`
      background-color: ${theme.COLORS.GRAY_100};
      border: 1px solid ${theme.COLORS.GRAY_700};
    `};
`;

export const CancelButton = styled(Button)`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_700};
    border: 1px solid ${theme.COLORS.GRAY_100};
  `}
`;

export const ConfirmText = styled(ButtonText)`
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const CancelText = styled(ButtonText)`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;
