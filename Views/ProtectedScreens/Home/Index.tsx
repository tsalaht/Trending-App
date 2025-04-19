import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./Home";
import PlansAndPricing from "../../Auth/PlansAndPricing";


const Stack:any = createNativeStackNavigator();

const HomePgae: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="PlansAndPricing" component={PlansAndPricing} /> */}
      <Stack.Screen name="Home" component={Home} />
    
    </Stack.Navigator>
  );
};

export default HomePgae;
