import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotificationDeatil from "./NotificationDeatil";

import TypeOfDescreptiom from "./TypeOfDescreptiom";
import VipSignals from "./VipSignals";
import NormaleSignales from "./NormaleSignales";
import VipSignalDetail from "./VipSignalDetail";



const Stack:any = createNativeStackNavigator();

const Notifications: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TypeOfDescreptiom" component={TypeOfDescreptiom} />
      <Stack.Screen name="NotificationDeatil" component={NotificationDeatil} />
      <Stack.Screen name="VipSignals" component={VipSignals} />
      <Stack.Screen name="NormaleSignales" component={NormaleSignales} />
      <Stack.Screen name="VipSignalDetail" component={VipSignalDetail} />
    </Stack.Navigator>
  );
};

export default Notifications;
