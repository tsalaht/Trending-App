import { View, Pressable } from 'react-native';
import React from 'react';
import { Stack, Text, Icon, Box, FlatList } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BackgroundVideo from '../../Components/BackgroundVideo';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define type for navigation
type RootStackParamList = {
    NotificationDeatil: { signal: SignalType };
};

type SignalType = {
    id: string;
    type: 'BUY' | 'SELL';
    asset: string;
    price: number;
    tp1: number;
    tp2: number;
    sl: number;
    status: 'active' | 'closed';
    result?: 'profit' | 'loss';
    leverage?: number; // Leverage used for the trade
    riskLevel?: string; // Risk level (e.g., "low", "medium", "high")
    description?: string; // Description of the signal
    closureNote?: string; // Note when the signal is closed
  };
  const signals: SignalType[] = [
    {
      id: '1',
      type: 'BUY',
      asset: 'GOLD',
      price: 2777,
      tp1: 6666,
      tp2: 7777,
      sl: 8888,
      status: 'active',
      leverage: 50,
      riskLevel: 'high',
      description: 'This signal is based on a strong bullish trend in gold.',
    },
    {
      id: '2',
      type: 'SELL',
      asset: 'EUR/USD',
      price: 1.12,
      tp1: 1.10,
      tp2: 1.08,
      sl: 1.14,
      status: 'closed',
      result: 'profit',
      closureNote: 'Closed early due to unexpected market volatility.',
    },
  ];

const FreeSignals = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Stack flex={1} backgroundColor="#000">
      <BackgroundVideo />

      {/* Back Button */}
      <Stack top={5} left={5} zIndex={2} mb={8}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon as={AntDesign} name="arrowleft" size={6} color="#FFA500" />
        </Pressable>
      </Stack>

      {/* Signals List */}
      <Stack flex={1} zIndex={1} p={4}>
        <Text color="#FFA500" fontSize="xl" fontWeight="bold">Free Signals</Text>
        <FlatList
          data={signals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable onPress={() => navigation.navigate('NotificationDeatil', { signal: item })}>
              <Box bg="#222" p={4} my={2} borderRadius={8}>
                <Text color="#FFA500" fontSize="lg" fontWeight="bold">
                  {item.type} {item.asset} @ {item.price}
                </Text>
                <Text color="white">TP1: {item.tp1} | TP2: {item.tp2} | SL: {item.sl}</Text>
                <Text color={item.status === 'active' ? 'green.400' : 'red.400'}>
                  {item.status === 'active' ? 'Active' : `Closed - ${item.result}`}
                </Text>
              </Box>
            </Pressable>
          )}
        />
      </Stack>
    </Stack>
  );
};

export default FreeSignals;
