import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Rides from "../../../screens/private/Rides/Rides";

const Stack = createNativeStackNavigator();

export default () => {
    return (
        <Stack.Navigator
            initialRouteName="Rides"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Rides" component={Rides} />
        </Stack.Navigator>
    );
};
