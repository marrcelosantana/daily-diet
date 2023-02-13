import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { useTheme } from "styled-components/native";

export function Routes() {
  const theme = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.COLORS.WHITE }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}