import React from 'react';
import { Stack, Text, Box, Icon, Divider, Badge,VStack } from 'native-base';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BackgroundVideo from '../../Components/BackgroundVideo';

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

type Props = NativeStackScreenProps<RootStackParamList, 'VipSignalDetail'>;

const VipSignalDetail: React.FC<Props> = ({ route }) => {
    const { signal } = route.params;
    const navigation = useNavigation();

    return (
        <Stack flex={1} backgroundColor="#000" p={4}>
            <BackgroundVideo/>.
            
            {/* Back Button */}
            <Stack top={5} left={5} zIndex={2} mb={8}>
                <Icon as={AntDesign} name="arrowleft" size={6} color="#FFA500" onPress={() => navigation.goBack()} />
            </Stack>

            {/* Signal Details Card */}
            <Box bg="#222" p={5} borderRadius={10} shadow={2} zIndex={1}>
                <Stack direction='column' justifyContent="space-between" alignItems="center">
                    <Text color="#FFA500" fontSize="xl" fontWeight="bold">
                        {signal.type} {signal.asset} @ {signal.price}
                    </Text>

                    {/* Status Badge */}
                    <Badge 
                        colorScheme={signal.status === 'active' ? 'success' : 'danger'} 
                        variant="solid"
                        borderRadius="full"
                        px={3}
                    >
                        {signal.status === 'active' ? 'Active' : `Closed - ${signal.result}`}
                    </Badge>
                </Stack>

                <Divider my={3} bg="gray.600" />

                {/* Trade Details */}
                <Stack space={3}>
                    <Stack direction="row" alignItems="center">
                        <Icon as={MaterialIcons} name="trending-up" size={5} color="gray.400" />
                        <Text color="white" ml={2}>Take Profit 1: <Text color="#0f0">{signal.tp1}</Text></Text>
                    </Stack>

                    <Stack direction="row" alignItems="center">
                        <Icon as={MaterialIcons} name="trending-up" size={5} color="gray.400" />
                        <Text color="white" ml={2}>Take Profit 2: <Text color="#0f0">{signal.tp2}</Text></Text>
                    </Stack>

                    <Stack direction="row" alignItems="center">
                        <Icon as={MaterialIcons} name="trending-down" size={5} color="gray.400" />
                        <Text color="white" ml={2}>Stop Loss: <Text color="red.400">{signal.sl}</Text></Text>
                    </Stack>

                    {signal.leverage && (
                        <Stack direction="row" alignItems="center">
                            <Icon as={MaterialIcons} name="bolt" size={5} color="yellow.400" />
                            <Text color="white" ml={2}>Leverage: <Text color="yellow.400">{signal.leverage}x</Text></Text>
                        </Stack>
                    )}

                    {signal.riskLevel && (
                        <Stack direction="row" alignItems="center">
                            <Icon as={MaterialIcons} name="warning" size={5} color="orange.400" />
                            <Text color="white" ml={2}>Risk Level: <Text color="orange.400">{signal.riskLevel}</Text></Text>
                        </Stack>
                    )}

                    {signal.description && (
                        <Stack direction="row" alignItems="center">
                            <Icon as={MaterialIcons} name="description" size={5} color="gray.400" />
                            <Text color="gray.400" ml={2}>{signal.description}</Text>
                        </Stack>
                    )}
                </Stack>

                {/* Closure Note for Closed Trades */}
                {signal.status === 'closed' && signal.closureNote && (
                    <Box bg="gray.700" p={3} borderRadius={6} mt={4}>
                        <Text color="gray.300" fontSize="sm">Closure Note:</Text>
                        <Text color="gray.200" fontWeight="bold">{signal.closureNote}</Text>
                    </Box>
                )}
            </Box>
        </Stack>
    );
};

export default VipSignalDetail;
