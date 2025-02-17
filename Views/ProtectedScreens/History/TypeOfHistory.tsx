import { View} from 'react-native'
import React from 'react'
import styles from '../../Styles'
import { HStack, Pressable, Stack, Text,VStack  } from 'native-base'
import BackgroundVideo from '../../Components/BackgroundVideo'
import { ArrowRight2 } from 'iconsax-react-native'
import { useNavigation } from '@react-navigation/native'

const TypeOfHistory = () => {
    const navigation: any = useNavigation();
  return (
    <Stack style={styles.mainContainer} flex={1}>
         <BackgroundVideo />
<VStack zIndex={1} flex={1} space={4}>
    <Pressable bgColor={'#FFA500'} py={4} px={8} rounded={8} onPress={()=> navigation.navigate("NormaleHistory")}>
    <HStack width={'full'} alignItems={'center'} justifyContent={'space-between'} >
<Text color={'#000000'} fontWeight={'bold'} fontSize={16}>
Free History
</Text>
<ArrowRight2 size="32" color="#000000" variant="Broken"/>
</HStack>
    </Pressable>
    <Pressable bgColor={'#FFA500'} py={4} px={8} rounded={8} onPress={()=> navigation.navigate("VipHistory")}>
    <HStack width={'full'} alignItems={'center'} justifyContent={'space-between'} >
<Text color={'#000000'} fontWeight={'bold'} fontSize={16}>
ViP History
</Text>
<ArrowRight2 size="32" color="#000000" variant="Broken"/>
</HStack>
    </Pressable>

</VStack>
    </Stack>
  )
}

export default TypeOfHistory