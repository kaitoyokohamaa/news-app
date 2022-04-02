import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import ArticleScreen from '../screens/ArticleScreen';

export default function AppNavigator() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Article" component={ArticleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
