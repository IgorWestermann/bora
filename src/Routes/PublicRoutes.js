import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../screens/public/SignIn";
import SignUp from "../screens/public/SignUp";
import ForgetPassword from "../screens/public/ForgetPassword";

const Stack = createNativeStackNavigator();

export default () => {
    return (
        <Stack.Navigator initialRouteName="SignIn">
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    headerTitle: "Cadastro",
                }}
            />
            <Stack.Screen
                name="ForgetPassword"
                component={ForgetPassword}
                options={{
                    headerTitle: "Esqueci minha senha",
                }}
            />
        </Stack.Navigator>
    );
};
