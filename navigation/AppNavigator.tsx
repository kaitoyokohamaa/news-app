import React from "react";
import {
  NavigationContainer,
  RouteProp,
  ParamListBase,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ArticleScreen from "../screens/ArticleScreen";
import { ClipScreen } from "../screens/ClipScreen";
import { FontAwesome } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
};

const ClipStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="clip" component={ClipScreen}></Stack.Screen>
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
};

const screenOption = ({
  route,
}: {
  route: RouteProp<ParamListBase, string>;
}) => ({
  tabBarIcon: ({ color, size }: { color: string; size: number }) => {
    let iconName;
    if (route.name === "Home") {
      iconName = "home";
    } else if (route.name === "Clip") {
      iconName = "bookmark";
    }
    if (iconName !== "home" && iconName !== "bookmark") return;
    return <FontAwesome name={iconName} size={size} color={color} />;
  },
});

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOption}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Clip" component={ClipStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
