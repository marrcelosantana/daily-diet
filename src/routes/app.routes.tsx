import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { Register } from "@screens/Register";
import { Statistics } from "@screens/Statistics";
import { Feedback } from "@screens/Feedback";
import { Details } from "@screens/Details";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="register" component={Register} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="details" component={Details} />
    </Navigator>
  );
}
