import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Friends from "../../../screens/private/Friends";

const Stack = createNativeStackNavigator();

export default () => {
    return (
        <Stack.Navigator
            initialRouteName="Friends"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Friends" component={Friends} />
        </Stack.Navigator>
    );
};
