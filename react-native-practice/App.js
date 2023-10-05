import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import { AuthProvider } from './context/auth';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
      <Stack.Navigator initialRouteName='SignIn'>
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='SignIn' component={SignIn} />
      </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}

