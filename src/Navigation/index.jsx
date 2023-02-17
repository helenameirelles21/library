import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../Screens/HomeScreen";
import { SobreScreen } from "../Screens/SobreScreen";

const Stack = createNativeStackNavigator();
const MBTabs = createBottomTabNavigator();

export const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={MBTNav} />
    </Stack.Navigator>
  );
};
export const MBTNav = () => {
  return (
    <MBTabs.Navigator>
      <MBTabs.Screen name="lidos" component={HomeScreen} />
      <MBTabs.Screen name="livros" component={SobreScreen} />
    </MBTabs.Navigator>
  );
};
