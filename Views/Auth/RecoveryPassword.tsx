import React, { useState } from "react";
import { StatusBar as RNStatusBar, Platform } from "react-native";
import styles from "../Styles";
import {
  VStack,
  Text,
  Stack,
  Input,
  Box,
  Button,
  Icon,
  useToast,
  Pressable,
  HStack,
  Image
} from "native-base";
import { StatusBar } from "expo-status-bar";
import { Eye, EyeSlash } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import BackgroundVideo from "../Components/BackgroundVideo";
import logo from '../../assets/logo.png'

export default function RecoveryPassword() {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();
  const toast = useToast();

  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const login = async () => {
    if (!password.trim()) {
      showToast("Password is required", "red.500");
      return;
    }
    showToast("Registration successful", "#FFD700");
    navigation.navigate("Login");
  };

  const showToast = (message: string, bgColor: string) => {
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
    <VStack style={[styles.mainContainer]} flex={1}>
      <StatusBar style={Platform.OS === "ios" ? "dark" : "auto"} />
      <BackgroundVideo />
      <Stack py={10} width={'full'} zIndex={1} alignItems={'center'} justifyContent={'center'}>
        <HStack w={120} h={120} rounded={'full'} bgColor={'#FFA500'} justifyContent="center" alignItems="center">
          <Image source={logo} alt="Logo" w={100} h={100} resizeMode="contain" />
        </HStack>
      </Stack>
      <Stack w="full" justifyContent="center" alignItems="center" zIndex={1} mt={16}>
        <Text fontWeight={700} fontSize="16px" color="#FFA500">
          Recovery Password
        </Text>
      </Stack>

      <VStack space="14px" flex={1} mt="50px" mb={10} zIndex={1}>
        {/* Password Input */}
        <Text textAlign="left" color="#fff">
          New Password
        </Text>
        <Box flexDirection="row" alignItems="center" px={4} borderWidth={1} borderColor="#E9E9F1" rounded="8px">
          <Input
            placeholder="Enter your new password"
            textAlign="left"
            flex={1}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible}
            variant="unstyled"
            _focus={{ backgroundColor: "transparent", borderColor: "transparent" }}
            bg="transparent"
            borderWidth={0}
            color="#fff"
          />
          <Pressable onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Icon as={isPasswordVisible ? <EyeSlash /> : <Eye />} color="#FFA500" size="26" />
          </Pressable>
        </Box>
      </VStack>

      <Button
      zIndex={1}
        width="full"
        backgroundColor={isPressed ? "#F9D77E" : "#FFA500"}
        rounded="12px"
        mt="84px"
        py="16px"
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        onPress={login}
      >
        <Text fontSize="16px" fontFamily="Alexandria_700Bold" color="white">
          Back to Login
        </Text>
      </Button>
    </VStack>
  );
}
