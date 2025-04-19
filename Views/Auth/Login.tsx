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
  Pressable,
  Image,
  HStack,
  ScrollView,
  useToast
} from "native-base";
import { StatusBar } from "expo-status-bar";
import { Mobile, Eye, EyeSlash, ArrowLeft } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";
import BackgroundVideo from "../Components/BackgroundVideo";
import logo from '../../assets/logo.png'
import { setPassHome } from "../../store/PassHomeSlice";
import { useDispatch } from "react-redux";

export default function Login() {
  const logoSource: any = logo;
    const toast = useToast();
  const navigation: any = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();
  const login = async () => {
    if (!phoneNumber.trim()) {
      showToast("Phone number is required", "error"); // Show error toast
      return;
    }
    if (!password.trim()) {
      showToast("Password is required", "error"); // Show error toast
      return;
    }
    showToast("Login successful", "success");
    navigation.navigate("PlansAndPricing");
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
    }

  const textColor = "#fff";
  const inputBorderColor = "#E9E9F1";

  return (
    <VStack style={[styles.mainContainer]} flex={1}>
      <StatusBar style={Platform.OS === "ios" ? "dark" : "auto"} />
      <BackgroundVideo />
      <Stack w={"full"} mb={4} mt={8} position={"fixed"} zIndex={1}>
        <Pressable onPress={() => navigation.goBack()}>
          <ArrowLeft size="32" color="#FFA500" />
        </Pressable>
      </Stack>
 
  

    
<ScrollView zIndex={1}>
<Stack py={10} width={'full'} zIndex={1} alignItems={'center'} justifyContent={'center'}>
        <HStack w={120} h={120} rounded={'full'} bgColor={'#FFA500'} justifyContent="center" alignItems="center">
          <Image source={logoSource} alt="Logo" w={100} h={100} resizeMode="contain" />
        </HStack>
      </Stack>
<Stack w="full" justifyContent="center" alignItems="center" zIndex={1}>
        <Text fontWeight={700} fontSize="16px" color={'#FFA500'}>
          Login
        </Text>
      </Stack>
<VStack space="14px" flex={1} mt="50px" mb={10} zIndex={1}>
        {/* Phone Number Input */}
        <Text textAlign="left" color={textColor}>
          Phone Number
        </Text>
        <Box flexDirection="row" alignItems="center" px={4} borderWidth={1} borderColor={inputBorderColor} rounded="8px">
          <Input
            placeholder="Enter phone number"
            textAlign="left"
            flex={1}
            value={phoneNumber}
            onChangeText={(text) => /^\d*$/.test(text) && setPhoneNumber(text)}
            keyboardType="numeric"
            maxLength={15}
            variant="unstyled"
            _focus={{ backgroundColor: "transparent", borderColor: "transparent" }}
            bg="transparent"
            borderWidth={0}
            color={textColor}
          />
          <Mobile size="26" color="#FFA500" />
        </Box>

        {/* Password Input */}
        <Text textAlign="left" color={textColor}>
          Password
        </Text>
        <Box flexDirection="row" alignItems="center" px={4} borderWidth={1} borderColor={inputBorderColor} rounded="8px">
          <Input
            placeholder="Enter password"
            textAlign="left"
            flex={1}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible}
            variant="unstyled"
            _focus={{ backgroundColor: "transparent", borderColor: "transparent" }}
            bg="transparent"
            borderWidth={0}
            color={textColor}
          />
          <Pressable onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Icon as={isPasswordVisible ? <EyeSlash /> : <Eye />} color="#FFA500" size="26" />
          </Pressable>
        </Box>

        {/* Forgot Password */}
        <Pressable onPress={() => navigation.navigate("Confirmation")} mt="5px">
          <Text fontSize="14px" textAlign="left" color="#FFA500" underline>
            Forgot Password?
          </Text>
        </Pressable>
      </VStack>
</ScrollView>
     

      <Button
        width="full"
        backgroundColor={isPressed ? "#FFD700" : "#FFA500"}
        rounded="12px"
        mt="84px"
        py="16px"
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        onPress={login}
        zIndex={1}
      >
        <Text fontSize="16px" fontWeight="bold" color="white">
          Login
        </Text>
      </Button>
    </VStack>
  );
}
