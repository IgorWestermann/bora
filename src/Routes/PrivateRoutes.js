import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/FontAwesome5";

import RideStack from "./Stacks/RideStack";
import Search from "../screens/private/Search";
import FriendsStack from "./Stacks/FriendsStack";
import Profile from "../screens/private/Profile";
import SearchStack from "./Stacks/SearchStack";
import { useTheme } from "native-base";

const Tab = createBottomTabNavigator();

export default () => {
    const theme = useTheme();
    return (
        <Tab.Navigator
            tabBarStyle={{
                backgroundColor: theme.colors.primary[500],
                borderTopColor: "transparent",
                flex: 1,
            }}
            screenOptions={{
                tabBarActiveTintColor: theme.colors.primary[500],
                tabBarActiveBackgroundColor: theme.colors.primary[100],
                tabBarInactiveTintColor: theme.colors.primary[500],
                tabBarInactiveBackgroundColor: theme.colors.primary[0],
            }}
        >
            <Tab.Screen
                name="SearchStack"
                component={SearchStack}
                options={{
                    headerShown: false,
                    tabBarLabel: "Inicio",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="RidesStack"
                component={RideStack}
                options={{
                    headerShown: false,
                    tabBarLabel: "Corridas",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="car" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="FriendsStack"
                component={FriendsStack}
                options={{
                    headerShown: false,
                    tabBarLabel: "Amigos",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="users" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarLabel: "Perfil",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user-circle" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
