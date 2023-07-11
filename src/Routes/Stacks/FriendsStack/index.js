import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Friends from "../../../screens/private/Friends";
import OtherUserProfile from "../../../screens/private/OtherUserProfile";

const Stack = createNativeStackNavigator();

export default () => {
    return (
        <Stack.Navigator
            initialRouteName="Friends"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="Friends"
                component={Friends}
                options={{
                    headerTitle: "Friends",
                }}
            />
            <Stack.Screen
                name="OtherUserProfile"
                component={OtherUserProfile}
            />
        </Stack.Navigator>
    );
};
