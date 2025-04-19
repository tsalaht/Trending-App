import React from 'react';
import { Stack, Box, Text, Pressable, HStack, VStack, Image } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import BackgroundVideo from '../Components/BackgroundVideo';
import styles from '../Styles';
import Swiper from 'react-native-swiper';
import logo from '../../assets/logo.png';
import { useNavigation } from '@react-navigation/native';
import { setPassHome } from "../../store/PassHomeSlice";
import { useDispatch } from "react-redux";
export default function PlansAndPricing() {
    const dispatch = useDispatch();
   const navigation: any = useNavigation();
   const logoSource: any = logo;
  const plans = [
    {
      title: 'Premium 1 Month',
      price: '$60',
      description: [
        'Short term signals',
        '2 to 8 Signals per day*',
        'Telegram live alerts',
        'Accuracy: almost 90%',
        '1500 to 3500 Pips per month',
        '3 Take profits per signal',
        'No manual close',
        'Signals time: Asia, London & USA',
        'Signals for currencies & gold',
        'Risk management advice',
      ],
      duration: '1 Month',
    },
    {
      title: 'Premium 3 Months',
      price: '$120',
      description: [
        'Short term signals',
        '2 to 8 Signals per day*',
        'Telegram live alerts',
        'Accuracy: almost 90%',
        '1500 to 3500 Pips per month',
        '3 Take profits per signal',
        'No manual close',
        'Signals time: Asia, London & USA',
        'Signals for currencies & gold',
        'Risk management advice',
      ],
      duration: '3 Months',
    },
    {
      title: 'Premium 6 Months',
      price: '$190',
      description: [
        'Short term signals',
        '2 to 8 Signals per day*',
        'Telegram live alerts',
        'Accuracy: almost 90%',
        '1500 to 3500 Pips per month',
        '3 Take profits per signal',
        'No manual close',
        'Signals time: Asia, London & USA',
        'Signals for currencies & gold',
        'Risk management advice',
      ],
      duration: '6 Months',
    },
  ];

  return (
    <Stack style={styles.mainContainer} flex={1}>
      <BackgroundVideo />
      <Stack zIndex={1} flex={1} alignItems="center" justifyContent="center" mt={4}>
        {/* Logo */}
        <Stack width={'full'} zIndex={1} alignItems={'center'} justifyContent={'center'} mb={4}>
          <HStack w={120} h={120} rounded={'full'} bgColor={'#FFA500'} justifyContent="center" alignItems="center">
            <Image source={logoSource} alt="Logo" w={100} h={100} resizeMode="contain" />
          </HStack>
        </Stack>

        {/* Swiper */}
        <Swiper
          showsButtons={false} // Remove pagination arrows
          loop={false}
          dotColor="#FFA500"
          activeDotColor="#FFFFFF"
        >
          {plans.map((plan, index) => (
            <Box
              key={index}
              borderWidth={1}
              borderRadius="lg"
              borderColor="#FFA500"
           backgroundColor={'black'}
              p={4} // Reduced padding to prevent overflow
              width="90%"
           
              justifyContent="space-between"
              alignItems="center"
              mx="auto"
            >
              {/* Title, Price, and Duration */}
              <VStack space={2} alignItems="center">
                <Text fontSize="xl" color="#FFFFFF" fontWeight="bold">
                  {plan.title}
                </Text>
                <Text fontSize="3xl" color="#FFFFFF" fontWeight="bold">
                  {plan.price}
                </Text>
                <Text fontSize="md" color="#FFFFFF" fontStyle="italic">
                  {plan.duration}
                </Text>
              </VStack>

              {/* Description */}
              <VStack space={1} alignItems="flex-start" w="100%" maxH="50%">
                {plan.description.map((item, idx) => (
                  <HStack key={idx} alignItems="center" space={2}>
                    <AntDesign name="checkcircle" size={16} color="#FFFFFF" />
                    <Text fontSize="sm" color="#FFFFFF" numberOfLines={1}>
                      {item}
                    </Text>
                  </HStack>
                ))}
              </VStack>

              {/* Select Button */}
              <Pressable
              onPress={() =>  dispatch(setPassHome(true)) }
  borderRadius="full"
  bgColor="#FFFFFF"
  px={6}
  py={3}
  mt={8}
  justifyContent="center"
  alignItems="center"
  // Add these:
  flex={0.5}
  alignSelf="stretch"
>
  <Text color="#000000" fontWeight="bold">
    Select
  </Text>
</Pressable>
            </Box>
          ))}
        </Swiper>
      </Stack>
    </Stack>
  );
}