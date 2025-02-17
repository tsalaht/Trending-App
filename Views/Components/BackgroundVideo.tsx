import { View, StyleSheet, Dimensions } from 'react-native';
import React, { useRef, useEffect } from 'react';
import { Video, ResizeMode } from 'expo-av';
import { Stack,Image } from 'native-base';
import Bck from '../../assets/background.png'

const { width, height } = Dimensions.get('window'); // Get full screen size
const fullllheight =height+20
const BackgroundVideo = () => {
  const videoRef = useRef<Video>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playAsync();
    }
  }, []);

  return (
    <View style={styles.container}>
      {/* Dark Overlay */}
      <Stack w={'full'} h={'full'} bgColor={'black'} zIndex={1} opacity={0.8}/>
      <Image  source={Bck}  style={styles.backgroundVideo} alt='back'/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width, // Full width
    height:'100%', // Full height
    position: 'absolute',
    top: 0,
    left: 0,
    flexGrow: 1,
  },
  overlay: {
    width , 
    height :'100%',
    position: 'absolute',
    backgroundColor: 'black',
    opacity: 0.6,
  },
  backgroundVideo: {
    width,
    height:'100%',
    position: 'absolute',
  },
});

export default BackgroundVideo;
