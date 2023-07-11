import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Search from "../../../screens/private/Search";
import Chat from "../../../screens/private/Chat";

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
