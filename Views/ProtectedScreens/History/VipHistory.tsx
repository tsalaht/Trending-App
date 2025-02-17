import { View, Pressable } from 'react-native';
import React from 'react';
import { Stack, Text, Icon, Box, FlatList, Badge } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BackgroundVideo from '../../Components/BackgroundVideo';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define type for navigation
type RootStackParamList = {
  VipNotificationDetail: { signal: SignalType };
};

type SignalType = {
  id: string;
  type: 'BUY' | 'SELL';
  asset: string;
  price: number;
  tp1: number;
  tp2: number;
  sl: number;
  status: 'closed';
  result: 'profit' | 'loss';
  leverage?: number;
  riskLevel?: string;
  description?: string;
  closureNote?: string;
  closedDate: string; // Added closedDate
};

// Sample VIP Signals with Closing Dates
const vipSignals: SignalType[] = [
  {
    id: '1',
    type: 'BUY',
    asset: 'GOLD',
    price: 2777,
    tp1: 6666,
    tp2: 7777,
    sl: 8888,
    status: 'closed',
    result: 'profit',
    leverage: 50,
    riskLevel: 'high',
    description: 'VIP Signal based on market trend analysis.',
    closureNote: 'Closed as a successful VIP trade.',
    closedDate: '2025-02-15', // Example date
  },
  {
    id: '2',
    type: 'SELL',
    asset: 'BTC/USD',
    price: 42000,
    tp1: 41000,
    tp2: 40000,
    sl: 43000,
    status: 'closed',
    result: 'loss',
    leverage: 25,
    riskLevel: 'medium',
    description: 'VIP signal recommended for premium traders.',
    closureNote: 'Market reversed unexpectedly, resulting in a loss.',
    closedDate: '2025-02-14', // Example date
  },
];

const VipHistory = () => {
  const navigation:any = useNavigation();

  return (
    <Stack flex={1} backgroundColor="#000">
      <BackgroundVideo />

      {/* Back Button */}
      <Stack top={5} left={5} zIndex={2} mb={8}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon as={AntDesign} name="arrowleft" size={6} color="#FFA500" />
        </Pressable>
      </Stack>

      {/* VIP Signals List */}
      <Stack flex={1} zIndex={1} p={4}>
        <Text color="#FFA500" fontSize="xl" fontWeight="bold">VIP Signal History</Text>
        <FlatList
          data={vipSignals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable onPress={() => navigation.navigate('VipNotificationDetail', { signal: item })}>
              <Box bg="#222" p={4} my={2} borderRadius={8} borderWidth={1} borderColor="#FFA500">
                <Stack direction="row" justifyContent="space-between">
                  <Text color="#FFA500" fontSize="lg" fontWeight="bold">
                    {item.type} {item.asset} @ {item.price}
                  </Text>
                  <Badge colorScheme="warning">VIP</Badge>
                </Stack>
                <Text color="white">TP1: {item.tp1} | TP2: {item.tp2} | SL: {item.sl}</Text>
                <Text color="white">Leverage: {item.leverage}x | Risk: {item.riskLevel}</Text>
                <Text color="gray.400" italic>{item.description}</Text>
                <Text color={item.result === 'profit' ? 'green.400' : 'red.400'} fontWeight="bold">
                  {item.result === 'profit' ? 'Profit ✅' : 'Loss ❌'}
                </Text>
                <Text color="gray.300" fontSize="xs">{item.closureNote}</Text>
                
                {/* Displaying Closing Date */}
                <Text color="gray.500" fontSize="xs" mt={2}>
                  Closed on: {item.closedDate}
                </Text>
              </Box>
            </Pressable>
          )}
        />
      </Stack>
    </Stack>
  );
};

export default VipHistory;
