import styled, { css } from "styled-components/native";

export type MealStatusProps = {
  status?: string;
};

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 49px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 14px 16px 14px 12px;
  margin-top: 8px;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  width: 80%;
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM_14}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Divider = styled.View`
  height: 20px;
  border: 0.5px solid ${({ theme }) => theme.COLORS.GRAY_400};
  margin: 0 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD_16}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Status = styled.View<MealStatusProps>`
  width: 12px;
  height: 12px;
  border-radius: 9999px;

  ${({ theme, status }) => css`
    background-color: ${status === "inTheDiet"
      ? theme.COLORS.GREEN_MID
      : theme.COLORS.RED_MID};
  `}
`;
