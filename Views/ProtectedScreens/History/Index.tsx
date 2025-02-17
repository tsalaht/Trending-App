import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TypeOfHistory from "./TypeOfHistory";

import NormaleHistory from "./NormaleHistory";
import VipHistory from "./VipHistory";




const Stack:any = createNativeStackNavigator();

const Notifications: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TypeOfHistory" component={TypeOfHistory} />
      <Stack.Screen name="NormaleHistory" component={NormaleHistory} />
      <Stack.Screen name="VipHistory" component={VipHistory} />
    </Stack.Navigator>
  );
};

export default Notifications;
