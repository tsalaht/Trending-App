import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Stack, Box, Image, Text, Pressable, Icon, VStack, HStack } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import BackgroundVideo from '../../Components/BackgroundVideo';
import styles from '../../Styles';
import TestImage from '../../../assets/background.png'

const posts = [
  {
    id: '1',
    title: '🔥 Hot Trend',
    description: 'This is the latest trend happening right now!',
    image: 'https://source.unsplash.com/random/400x300?nature',
  },
  {
    id: '2',
    title: '🚀 Tech Innovation',
    description: 'A new breakthrough in technology!',
    image: 'https://source.unsplash.com/random/400x300?technology',
  },
  {
    id: '3',
    title: '🎨 Art & Creativity',
    description: 'Beautiful designs trending worldwide.',
    image: 'https://source.unsplash.com/random/400x300?art',
  },
  {
    id: '4',
    title: '📈 Market Trends',
    description: 'Stocks are rising and crypto is booming!',
    image: 'https://source.unsplash.com/random/400x300?finance',
  },
];

export default function Home() {
  const [likes, setLikes] = useState<{ [key: string]: boolean }>({});

  const toggleLike = (id: string) => {
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderPost = ({ item }: { item: any }) => (
    <Box bg="black" borderRadius="lg" overflow="hidden" mb="4">
      <Image source={TestImage} alt={'dd'} w="100%" h="200px" />
      <VStack p="4">
        <Text fontSize="lg" bold color="#FFA500">
          {item.title}
        </Text>
        <Text fontSize="sm" color="white" mt="1">
          {item.description}
        </Text>
        <HStack mt="3" space="4" alignItems="center">
          <Pressable onPress={() => toggleLike(item.id)}>
            <Icon
              as={AntDesign}
              name={likes[item.id] ? 'heart' : 'hearto'}
              color={likes[item.id] ? '#FFA500' : 'white'}
              size="lg"
            />
          </Pressable>
          <Pressable>
            <Icon as={AntDesign} name="sharealt" color="white" size="lg" />
          </Pressable>
        </HStack>
      </VStack>
    </Box>
  );

  return (
    <Stack style={styles.mainContainer} flex={1}> 
      <BackgroundVideo />
      <Stack zIndex={1} flex={1}> 
        <HStack space={2} justifyContent={'center'} alignItems={'center'} w={'full'}>
          <Stack flex={1} h={1} bgColor={'#FFA500'} rounded={2}/>
        <Text fontSize="2xl" bold color="#FFA500" textAlign="center" my="4">
          Trending Posts
        </Text>
        <Stack flex={1} h={1} bgColor={'#FFA500'} rounded={2}/>
        </HStack>
      
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id}
          renderItem={renderPost}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }} // Makes scrolling smoother
        />
      </Stack>
    </Stack>
  );
}
