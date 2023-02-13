import styled, { css } from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  padding: 24px;
`;

export const Content = styled.View`
  width: 100%;
  margin-top: 24px;
  flex: 1;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD_16}px;
  `}
  margin-bottom: 10px;
`;
