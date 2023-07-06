import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigationContainer } from "@react-navigation/native";

import Preload from "../screens/public/Preload";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import { Context } from "../Providers/context";

const MainNavigation = createNativeStackNavigator();

export default () => {
    const { isLogged, initializing } = useContext(Context);

    return (
        <NavigationContainer>
            {initializing ? (
                <MainNavigation.Navigator
                    screenOptions={{ headerShown: false }}
                >
                    <MainNavigation.Screen name="Preload" component={Preload} />
                </MainNavigation.Navigator>
            ) : (
                <MainNavigation.Navigator
                    screenOptions={{ headerShown: false }}
                >
                    {isLogged ? (
                        <MainNavigation.Screen
                            name="PrivateRoutes"
                            component={PrivateRoutes}
                        />
                    ) : (
                        <MainNavigation.Screen
                            name="PublicRoutes"
                            component={PublicRoutes}
                        />
                    )}
                </MainNavigation.Navigator>
            )}
        </NavigationContainer>
    );
};
