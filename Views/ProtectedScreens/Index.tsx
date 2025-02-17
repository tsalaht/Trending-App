import { Stack, View } from "native-base";
import React, { useState } from "react";
import { Text } from "native-base";
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { User,Home as HomeIcone ,Notification,Clock} from "iconsax-react-native";
import Home from "./Home/Index";
import Header from "./Headers/Index";
import styles from "../Styles";
import { useSelector } from "react-redux";



import Notifications from "./Notifications/Index";
import History from "./History/Index";
import Profile from "./Profile/Index";
interface Screen {
  name: string;
  component: React.FC<any>;
  options?: BottomTabNavigationOptions;
}
const Tab = createBottomTabNavigator();

const ProtectedScreens: React.FC = () => {

  const [focusedTab, setFocusedTab] = useState<string>("");

  const handleTabPress = (name: string) => {
    setFocusedTab(name);
  };
  const screens: Screen[] = [
    {
      name: "Home",
      component: Home,
      options: {
        headerShown: true,
        header: (props) => <Header/>,
        tabBarStyle: {
          height: 50,
          backgroundColor: "#000000",
          borderTopWidth: 0,
        },
        tabBarLabel: (props:any) => (
          <Text
            color={props.focused ? "#FFA500" : "#D1D1D1"}
            fontWeight={500}
            fontSize={"10px"}
          >
          Home
          </Text>
        ),
        tabBarIconStyle: {
          marginBottom: 0,
        },
        tabBarIcon: (props) => (
          <HomeIcone
            width="22"
            height="22"
            color={props.focused ? "#FFA500" : "#D1D1D1"}
            variant={"Bold"}
          />
        ),
      },
    },
    {
      name: "Notifications",
      component: Notifications,
      options: {
        headerShown: true,
        header: (props) => <Header/>,
        tabBarStyle: {
          height: 50,
          backgroundColor:  "#000000",
          borderTopWidth: 0,
        },
        tabBarLabel: (props) => (
          <Text
            color={props.focused ? "#FFA500" : "#D1D1D1"}
            fontWeight={500}
            fontSize={"10px"}
          >
    Notification
          </Text>
        ),
        tabBarIconStyle: {
          marginBottom: 0,
        },
        tabBarIcon: (props) => (
         
          <Notification
            width="22"
            height="22"
            color={props.focused ? "#FFA500" : "#D1D1D1"}
            variant={"Bold"}
          />
        ),
      },
    },
    {
      name: "History",
      component: History,
      options: {
        headerShown: true,
        header: (props) => <Header/>,
        tabBarStyle: {
          height: 50,
          backgroundColor:  "#000000",
          borderTopWidth: 0,
        },
        tabBarLabel: (props) => (
          <Text
            color={props.focused ? "#FFA500" : "#D1D1D1"}
            fontWeight={500}
            fontSize={"10px"}
          >
          History
          </Text>
        ),
        tabBarIconStyle: {
          marginBottom: 0,
        },
        tabBarIcon: (props) => (
          <Stack position={'relative'}>
          
             <Clock
            width="22"
            height="22"
            color={props.focused ? "#FFA500" : "#D1D1D1"}
            variant={"Bold"}
          />   
        
          </Stack>
         
        ),
      },
    },
    {
      name: "Profile",
      component: Profile,
      options: {
        headerShown: true,
        header: (props) => <Header/>,
        tabBarStyle: {
          height: 50,
          backgroundColor:  "#000000",
          borderTopWidth: 0,
        },
        tabBarLabel: (props) => (
          <Text
            color={props.focused ? "#FFA500" : "#D1D1D1"}
            fontWeight={500}
            fontSize={"10px"}
          >
           My Profil
          </Text>
        ),
        tabBarIconStyle: {
          marginBottom: 0,
        },
        tabBarIcon: (props) => (
          <User
            width="22"
            height="22"
            color={props.focused ? "#FFA500" : "#D1D1D1"}
            variant={"Bold"}
          />
        ),
      },
    },
  ];
  return (

      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarStyle: {
            height: 50,
            backgroundColor: "#000000",
            borderTopWidth: 0,
          },
          tabBarLabel: () => null,
        })}
      >
        {screens.map((screen: Screen, index: number) => (
          <Tab.Screen
            key={index}
            options={screen.options}
            name={screen.name}
            component={screen.component}
            listeners={{
              tabPress: (e) => {
                handleTabPress(screen.name);
              },
            }}
          />
        ))}
      </Tab.Navigator>
  );
};

export default ProtectedScreens;
