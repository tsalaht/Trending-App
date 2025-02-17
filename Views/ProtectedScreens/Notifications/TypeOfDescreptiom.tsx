import { View} from 'react-native'
import React from 'react'
import styles from '../../Styles'
import { HStack, Pressable, Stack, Text,VStack  } from 'native-base'
import BackgroundVideo from '../../Components/BackgroundVideo'
import { ArrowRight2 } from 'iconsax-react-native'
import { useNavigation } from '@react-navigation/native'

const TypeOfDescreptiom = () => {
    const navigation: any = useNavigation();
  return (
    <Stack style={styles.mainContainer} flex={1}>
         <BackgroundVideo />
<VStack zIndex={1} flex={1} space={4}>
    <Pressable bgColor={'#FFA500'} py={4} px={8} rounded={8} onPress={()=> navigation.navigate("NormaleSignales")}>
    <HStack width={'full'} alignItems={'center'} justifyContent={'space-between'} >
<Text color={'#000000'} fontWeight={'bold'} fontSize={16}>
Free signals
</Text>
<ArrowRight2 size="32" color="#000000" variant="Broken"/>
</HStack>
    </Pressable>
    <Pressable bgColor={'#FFA500'} py={4} px={8} rounded={8} onPress={()=> navigation.navigate("VipSignals")}>
    <HStack width={'full'} alignItems={'center'} justifyContent={'space-between'} >
<Text color={'#000000'} fontWeight={'bold'} fontSize={16}>
ViP signal
</Text>
<ArrowRight2 size="32" color="#000000" variant="Broken"/>
</HStack>
    </Pressable>

</VStack>
    </Stack>
  )
}

export default TypeOfDescreptiom