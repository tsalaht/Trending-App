import { View, Pressable } from 'react-native';
import React, { useEffect } from 'react';
import { Stack, Text, Icon, Box, FlatList } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BackgroundVideo from '../../Components/BackgroundVideo';

const closedSignals = [
  {
    id: '1',
    type: 'BUY',
    asset: 'GOLD',
    price: 2777,
    tp1: 6666,
    tp2: 7777,
    sl: 8888,
    result: 'profit',
    closureNote: 'Closed with a strong profit.',
    closedDate: '2025-02-15', // Add closure date
  },
  {
    id: '2',
    type: 'SELL',
    asset: 'EUR/USD',
    price: 1.12,
    tp1: 1.10,
    tp2: 1.08,
    sl: 1.14,
    result: 'loss',
    closureNote: 'Market reversed, closing in loss.',
    closedDate: '2025-02-15',
  },
  {
    id: '3',
    type: 'BUY',
    asset: 'BTC/USD',
    price: 45000,
    tp1: 46000,
    tp2: 47000,
    sl: 44000,
    result: 'profit',
    closureNote: 'Reached TP1 and TP2 smoothly.',
    closedDate: '2025-02-14', // Different date
  },
];

const sendNotification = (message: any) => {
  console.log('Notification:', message);
};

const groupByDate = (signals: typeof closedSignals) => {
  return signals.reduce((acc, signal) => {
    if (!acc[signal.closedDate]) {
      acc[signal.closedDate] = [];
    }
    acc[signal.closedDate].push(signal);
    return acc;
  }, {} as Record<string, typeof closedSignals>);
};

const NormaleHistory = () => {
  const navigation = useNavigation();
  const groupedSignals = groupByDate(closedSignals);

  useEffect(() => {
    sendNotification('A new signal has been closed. Check the history.');
  }, []);

  return (
    <Stack flex={1} backgroundColor="#000">
      <BackgroundVideo />
      <Stack top={5} left={5} zIndex={2} mb={8}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon as={AntDesign} name="arrowleft" size={6} color="#FFA500" />
        </Pressable>
      </Stack>
      <Stack flex={1} zIndex={1} p={4}>
        <Text color="#FFA500" fontSize="xl" fontWeight="bold">History</Text>
        <FlatList
          data={Object.keys(groupedSignals)}
          keyExtractor={(date) => date}
          renderItem={({ item: date }) => (
            <Box my={4}>
              <Text color="white" fontSize="lg" fontWeight="bold" mb={2}>
                {new Date(date).toDateString()}
              </Text>
              {groupedSignals[date].map((signal) => (
                <Box key={signal.id} bg="#222" p={4} my={2} borderRadius={8}>
                  <Text color="#FFA500" fontSize="lg" fontWeight="bold">
                    {signal.type} {signal.asset} @ {signal.price}
                  </Text>
                  <Text color="white">TP1: {signal.tp1} | TP2: {signal.tp2} | SL: {signal.sl}</Text>
                  <Text color={signal.result === 'profit' ? 'green.400' : 'red.400'}>
                    {signal.result === 'profit' ? 'Profit' : 'Loss'}
                  </Text>
                  <Text color="gray.400" mt={2} fontSize="sm">Note: {signal.closureNote}</Text>
                </Box>
              ))}
            </Box>
          )}
        />
      </Stack>
    </Stack>
  );
};

export default NormaleHistory;
