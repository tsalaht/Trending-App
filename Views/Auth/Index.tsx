import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header
 from '../ProtectedScreens/Headers/Index';
import Register from './Register';
import Login from './Login';
import Confirmation from './Confirmation';
import RecoveryPassword from './RecoveryPassword';
import { View } from 'react-native';
import PlansAndPricing from './PlansAndPricing';

const Stack = createNativeStackNavigator<any>();

const AuthPages: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Register">
      <Stack.Screen
        name="PlansAndPricing"
        component={PlansAndPricing}
        options={{
          headerShown:false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerShown:false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown:false,
        }}
      />
      <Stack.Screen
        name="Confirmation"
        component={Confirmation}
        options={{
          headerShown:false,
        }}
      />
      <Stack.Screen
        name="recoveryPassword"
        component={RecoveryPassword}
        options={{
          headerShown:false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthPages;
