import { View, Pressable } from 'react-native';
import React from 'react';
import { Stack, Text, Box, Icon, FlatList } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BackgroundVideo from '../../Components/BackgroundVideo';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define type for navigation
type RootStackParamList = {
    VipSignalDetail: { signal: VipSignalType };
};

type VipSignalType = {
    id: string;
    type: 'BUY' | 'SELL';
    asset: string;
    price: number;
    tp1: number;
    tp2: number;
    sl: number;
    status: 'active' | 'closed';
    result?: 'profit' | 'loss';
    leverage?: number;
    riskLevel?: string;
    description?: string;
    closureNote?: string;
};

// Sample VIP signals
const vipSignals: VipSignalType[] = [
    {
        id: '1',
        type: 'BUY',
        asset: 'BTC/USD',
        price: 45000,
        tp1: 47000,
        tp2: 49000,
        sl: 44000,
        status: 'active',
        leverage: 20,
        riskLevel: 'medium',
        description: 'Strong bullish trend with high momentum.',
    },
    {
        id: '2',
        type: 'SELL',
        asset: 'ETH/USD',
        price: 3200,
        tp1: 3100,
        tp2: 3000,
        sl: 3300,
        status: 'closed',
        result: 'profit',
        closureNote: 'Exited early due to market conditions.',
    },
];

const VipSignals = () => {
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

            {/* VIP Signals List */}
            <Stack flex={1} zIndex={1} p={4}>
                <Text color="#FFA500" fontSize="xl" fontWeight="bold">VIP Signals</Text>
                <FlatList
                    data={vipSignals}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Pressable onPress={() => navigation.navigate('VipSignalDetail', { signal: item })}>
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

export default VipSignals;
