import React, { useState } from "react";
import { StatusBar as RNStatusBar, Platform } from "react-native";
import styles from "../Styles";
import {
  VStack,
  Text,
  Stack,
  Input,
  Box,
  HStack,
  Pressable,
  Button,
  useToast,
  ScrollView,
  Image
} from "native-base";
import { StatusBar } from "expo-status-bar";
import { UserSquare, Mobile, Google } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import BackgroundVideo from "../Components/BackgroundVideo";
import logo from '../../assets/logo.png'

export default function Register() {
  const navigation:any = useNavigation();
  const toast = useToast();

  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gmail, setGmail] = useState("");
  const [address, setAddress] = useState("");
  const [isPressed, setIsPressed] = useState(false);

  const handleRegister = async () => {
    if (!username.trim()) {
      showToast("Username is required", "red.500");
      return;
    }
    if (!phoneNumber.trim()) {
      showToast("Phone number is required", "red.500");
      return;
    }
    if (!gmail.trim()) {
      showToast("Gmail is required", "red.500");
      return;
    }
    
    showToast("Registration successful", "#FFA500");
    navigation.navigate("Login");
  };

  const showToast = (message:any, bgColor:any) => {
    toast.show({
      placement: "top",
      render: () => (
        <Box bg={bgColor} px="2" py="1" rounded="sm" _text={{ color: "light.100" }}>
          {message}
        </Box>
      ),
    });
  };

  return (
    <VStack style={styles.mainContainer} flex={1}>
      <BackgroundVideo />
      <Stack py={10} width={'full'} zIndex={1} alignItems={'center'} justifyContent={'center'}>
        <HStack w={120} h={120} rounded={'full'} bgColor={'#FFA500'} justifyContent="center" alignItems="center">
          <Image source={logo} alt="Logo" w={100} h={100} resizeMode="contain" />
        </HStack>
      </Stack>
      <ScrollView zIndex={1}>
        <StatusBar style={Platform.OS === "ios" ? "dark" : "auto"} />
        <Stack w="full" justifyContent="center" alignItems="center">
          <Text fontWeight={'bold'} fontSize="18px" color="#FFA500">
            New Registration
          </Text>
        </Stack>

        <VStack space="14px" flex={1} mt="20px" mb={10}>
          <Text color="#fff">Username</Text>
          <Box flexDirection="row" alignItems="center" px={4} borderWidth={1} borderColor="#E9E9F1" rounded="8px">
            <Input
              placeholder="Enter username"
              flex={1}
              variant="unstyled"
              value={username}
              onChangeText={setUsername}
              bg="transparent"
              borderWidth={0}
              color="#fff"
            />
            <UserSquare size="24" color="#FFA500" />
          </Box>

          <Text color="#ffff">Phone Number</Text>
          <Box flexDirection="row" alignItems="center" px={4} borderWidth={1} borderColor="#E9E9F1" rounded="8px">
            <Input
              placeholder="Enter phone number"
              flex={1}
              value={phoneNumber}
              onChangeText={(text) => /^\d*$/.test(text) && setPhoneNumber(text)}
              keyboardType="numeric"
              maxLength={15}
              variant="unstyled"
              bg="transparent"
              borderWidth={0}
              color="#fff"
            />
            <Mobile size="26" color="#FFA500" />
          </Box>

          <Text color="#fff">Gmail</Text>
          <Box flexDirection="row" alignItems="center" px={4} borderWidth={1} borderColor="#E9E9F1" rounded="8px">
            <Input
              placeholder="Enter your gmail"
              flex={1}
              value={gmail}
              onChangeText={setGmail}
              variant="unstyled"
              bg="transparent"
              borderWidth={0}
              color="#fff"
            />
            <Google size="26" color="#FFA500" />
          </Box>

          <HStack alignItems="center" space="2px">
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text fontSize="12px" color="#FFA500">Login</Text>
            </Pressable>
            <Text ml="1px" fontSize="12px" color="#fff">Already have an account?</Text>
          </HStack>
        </VStack>

       
      </ScrollView>
      <VStack zIndex={1} py={4}>
          <Button
            width="full"
            backgroundColor={isPressed ? "#F9D77E" : "#FFA500"}
            rounded="12px"
            mt="20px"
            py="16px"
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            onPress={handleRegister}
          >
            <Text fontSize="16px" fontWeight={700} color="white">Register</Text>
          </Button>
        </VStack>
    </VStack>
  );
}