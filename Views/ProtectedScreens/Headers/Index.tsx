import { View } from 'react-native'
import React from 'react'
import { Box, HStack, Stack,Text,Icon,Input } from 'native-base'
import { User,Home as HomeIcone ,Notification,SearchNormal1} from "iconsax-react-native";

export default function Header() {
  return (
    <Stack width={'full'} bgColor={'#000000'} py={8}>
  
  <HStack width={'full'} alignItems={'center'} justifyContent={'center'} space={4}>
    <Box position={'relative'}>
<Stack position={'absolute'} w={3} h={3} bgColor={'#FFA500'} rounded={'full'} right={0.5} top={-0.5}/>
  <Notification size="32" color="#FFA500"/>
    </Box>
  <Box width="70%" variant="filled"   bgColor={ "#000000"}  borderRadius="8"    borderWidth={1} borderColor={'#FFA500'}>
        <Input
          
          variant="unstyled"
          _focus={{ backgroundColor: "transparent", borderColor: "transparent" }}
          bg="transparent"
          borderWidth={0}
          placeholder={"Search..."}
        
       
          InputLeftElement={<Icon as={<SearchNormal1 />} size={5} ml={2} color={ "#FFA500"} />}
          color={ "white"}
    
        />
        </Box>
  </HStack>
    </Stack>
  )
}