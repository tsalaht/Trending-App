import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  HStack,
  Stack,
  Text,
  VStack,
  WarningOutlineIcon,
  useToast,
  Pressable,
  Image
} from "native-base";
import { TextInput } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { StatusBar } from "expo-status-bar";
import { ArrowLeft } from "iconsax-react-native";
import styles from "../Styles";
import BackgroundVideo from "../Components/BackgroundVideo";
import logo from '../../assets/logo.png'

const Confirmation = ({ navigation }: any) => {
  const toast = useToast();
  const [isPressed, setIsPressed] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", ""]);

  const validationSchema = yup.object().shape({
    otp: yup.string().required("OTP is required").min(5, "Invalid OTP"),
  });

  const initialValues = { otp: "" };

  const handleSubmit: any = async (values: any) => {
    await toast.show({
      placement: "top",
      render: () => (
        <Box bg="#FFA500" px="2" py="1" rounded="sm" _text={{ color: "white" }}>
          Confirmation successful
        </Box>
      ),
    });
    navigation.navigate("recoveryPassword");
  };

  const inputRefs = Array(5)
    .fill(null)
    .map(() => React.createRef<TextInput>());

  const handleChange = (value: string, index: number, setFieldValue: any) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setFieldValue("otp", newOtp.join(""));
    if (value && index < 4) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && index > 0 && !otp[index]) {
      inputRefs[index - 1].current?.focus();
    }
  };

  return (
    <VStack style={styles.mainContainer} flex={1}>
            <BackgroundVideo />
      <StatusBar style="auto" />
      <Stack w="full" mb={4} mt={10} position="fixed" zIndex={1}>
        <Pressable onPress={() => navigation.goBack()}>
          <ArrowLeft size="32" color="#FFA500" />
        </Pressable>
      </Stack>
      <Stack py={10} width={'full'} zIndex={1} alignItems={'center'} justifyContent={'center'}>
        <HStack w={120} h={120} rounded={'full'} bgColor={'#FFA500'} justifyContent="center" alignItems="center">
          <Image source={logo} alt="Logo" w={100} h={100} resizeMode="contain" />
        </HStack>
      </Stack>
      <Stack w="full" justifyContent="center" alignItems="center" zIndex={1}>
        <Text fontWeight={700} fontSize="16px" color="#FFA500">
          Confirm Code
        </Text>
      </Stack>

      <Stack h="full" w="full" zIndex={1}>
        <Stack w="full" justifyContent="center" alignItems="center" mt={10}>
          <Text color="#fff">Enter the code sent to 98798733</Text>
        </Stack>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ handleSubmit, errors, touched, setFieldValue }) => (
            <>
              <VStack space="16px">
                <FormControl isInvalid={!!(errors.otp && touched.otp)} marginTop="48px">
                  <HStack space="20px" alignItems="center" justifyContent="center">
                    {otp.map((value, index) => (
                      <TextInput
                        key={index}
                        ref={inputRefs[index]}
                        value={value}
                        onChangeText={(text) => handleChange(text, index, setFieldValue)}
                        onKeyPress={(e) => handleKeyPress(e, index)}
                        style={{
                          borderBottomWidth: 2,
                          borderBottomColor: "#FFA500",
                          textAlign: "center",
                          fontSize: 24,
                          width: 40,
                          color: "#FFA500",
                        }}
                        maxLength={1}
                        keyboardType="number-pad"
                      />
                    ))}
                  </HStack>
                  <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                    {errors.otp}
                  </FormControl.ErrorMessage>
                </FormControl>
              </VStack>

              <HStack paddingTop="24px" w="full" alignItems="center" justifyContent="center">
                <Text color="#fff">
                  Didn’t receive the code?
                  <Text underline style={{ color: "#FFA500" }}> Resend</Text>
                </Text>
              </HStack>

              <VStack zIndex={1} mt="180px" space="20px" alignItems="center" position="relative" width="full">
  <Button
    width="full"
    backgroundColor={isPressed ? "#F9D77E" : "#FFA500"}
    rounded="12px"
    mt="20px"
    py="16px"
    onPressIn={() => setIsPressed(true)}
    onPressOut={() => setIsPressed(false)}
    onPress={() => handleSubmit()}
  >
    <HStack alignItems="center" justifyContent="space-between" w="full">
      <Text fontSize="16px" fontWeight={700} color="white">
        Confirm
      </Text>
    </HStack>
  </Button>
</VStack>

            </>
          )}
        </Formik>
      </Stack>
    </VStack>
  );
};

export default Confirmation;