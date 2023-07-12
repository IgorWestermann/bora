import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/FontAwesome5";

import RideStack from "./Stacks/RideStack";
import Search from "../screens/private/Search";
import FriendsStack from "./Stacks/FriendsStack";
import Profile from "../screens/private/Profile";
import SearchStack from "./Stacks/SearchStack";

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      tabBarStyle={{
        backgroundColor: "#8b5cf6",
        borderTopColor: "transparent",
        flex: 1,
      }}
      screenOptions={{
        tabBarActiveTintColor: "#7c3aed",
        tabBarActiveBackgroundColor: "#c4b5fd",
        tabBarInactiveTintColor: "#8b5cf6",
        tabBarInactiveBackgroundColor: "#f5f3ff",
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
