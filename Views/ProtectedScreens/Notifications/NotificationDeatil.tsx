import { View } from 'react-native';
import React from 'react';
import { Stack, Text, Box, Icon, Divider } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import BackgroundVideo from '../../Components/BackgroundVideo';


const NotificationDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { signal }: any = route.params || {};

  return (
    <Stack flex={1} backgroundColor="#000">
      <BackgroundVideo />
      <Stack top={5} left={5} zIndex={2} mb={8}>
        <Icon
          as={AntDesign}
          name="arrowleft"
          size={6}
          color="#FFA500"
          onPress={() => navigation.goBack()}
        />
      </Stack>
      <Stack flex={1} zIndex={1} p={4}>
        <Text color="#FFA500" fontSize="xl" fontWeight="bold">
          Signal Details
        </Text>
        {signal ? (
          <Box bg="#222" p={4} my={2} borderRadius={8}>
            <Text color="#FFA500" fontSize="lg" fontWeight="bold">
              {signal.type} {signal.asset} @ {signal.price}
            </Text>
            <Divider my={2} bg="#FFA500" />
            <Text color="white">TP1: {signal.tp1} | TP2: {signal.tp2} | SL: {signal.sl}</Text>
            <Text color="white" mt={2}>
              Leverage: {signal.leverage ?? 'N/A'}x
            </Text>
            <Text color="white">Risk Level: {signal.riskLevel ?? 'N/A'}</Text>
            {signal.description && (
              <Text color="white" mt={2} fontStyle="italic">
                Description: {signal.description}
              </Text>
            )}
            <Divider my={2} bg="#FFA500" />
            <Text
              color={signal.status === 'active' ? 'green.400' : 'red.400'}
            >
              {signal.status === 'active' ? 'Active' : `Closed - ${signal.result}`}
            </Text>
            {signal.status !== 'active' && signal.closureNote && (
              <Text color="gray.400" mt={2} fontSize="sm">
                Note: {signal.closureNote}
              </Text>
            )}
          </Box>
        ) : (
          <Text color="white">No signal data available.</Text>
        )}
      </Stack>
    </Stack>
  );
};

export default NotificationDetail;