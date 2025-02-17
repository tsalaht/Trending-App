import React, { useState, useEffect } from 'react';
import { View, Pressable, Image } from 'react-native';
import { Stack, Text, Icon, Box, Button, Input, ScrollView } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BackgroundVideo from '../../Components/BackgroundVideo';
import styles from '../../Styles';
import { setPassHome } from '../../../store/PassHomeSlice';
import { useDispatch } from "react-redux";
const Profile = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const dispatch = useDispatch();
  // Load saved user data
  useEffect(() => {
    const loadProfileData = async () => {
      const storedImage = await AsyncStorage.getItem('profileImage');
      const storedName = await AsyncStorage.getItem('name');
      const storedEmail = await AsyncStorage.getItem('email');
      const storedMobile = await AsyncStorage.getItem('mobile');

      if (storedImage) setProfileImage(storedImage);
      if (storedName) setName(storedName);
      if (storedEmail) setEmail(storedEmail);
      if (storedMobile) setMobile(storedMobile);
    };

    loadProfileData();
  }, []);

  // Pick Image from Gallery
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
      await AsyncStorage.setItem('profileImage', result.assets[0].uri);
    }
  };

  // Save User Info
  const saveProfile = async () => {
    await AsyncStorage.setItem('name', name);
    await AsyncStorage.setItem('email', email);
    await AsyncStorage.setItem('mobile', mobile);
    alert('Profile Updated!');
  };

  return (
    <Stack style={styles.mainContainer} flex={1} backgroundColor="#000">
      <BackgroundVideo />

   
      
      <ScrollView zIndex={1}>
      <Stack zIndex={1} alignItems="center" mt={0} p={4}>
        {/* Profile Image */}
        <Pressable onPress={pickImage}>
          <Image
            source={{ uri: profileImage || 'https://via.placeholder.com/100' }}
            alt="Profile Picture"
            style={{ width: 100, height: 100, borderRadius: 50, borderWidth: 2, borderColor: '#FFA500' }}
          />
          <Box position="absolute" bottom={0} right={0} bg="#FFA500" p={1} borderRadius="full">
            <Icon as={MaterialIcons} name="edit" size={5} color="#000" />
          </Box>
        </Pressable>

        {/* User Info */}
        <Text color="white" fontSize="xl" fontWeight="bold" mt={3}>{name || 'Your Name'}</Text>
        <Text color="gray.400">{email || 'your-email@example.com'}</Text>
        <Text color="gray.400">{mobile || '+0000000000'}</Text>
      </Stack>
   <Stack zIndex={1} px={4} mt={5} space={4}>
        <Box bg="#222" p={4} borderRadius={8} borderWidth={1} borderColor="#FFA500">
          <Text color="#FFA500" fontWeight="bold">Edit Profile</Text>
          <Input
            variant="unstyled"
            placeholder="Update Name"
            value={name}
            onChangeText={setName}
            placeholderTextColor="gray.500"
            color="white"
            mt={2}
            bg="#333"
            borderRadius={5}
            p={2}
          />
          <Input
            variant="unstyled"
            placeholder="Update Email"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="gray.500"
            color="white"
            mt={2}
            bg="#333"
            borderRadius={5}
            p={2}
          />
          <Input
            variant="unstyled"
            placeholder="Update Mobile Number"
            value={mobile}
            onChangeText={setMobile}
            placeholderTextColor="gray.500"
            color="white"
            mt={2}
            bg="#333"
            borderRadius={5}
            p={2}
          />
          <Button mt={3} bg="#FFA500" _pressed={{ bg: '#CC8500' }} onPress={saveProfile}>
            <Text color="black" fontWeight="bold">Save Changes</Text>
          </Button>
        </Box>

        {/* Logout Button */}
        <Button bg="red.600" _pressed={{ bg: 'red.800' }} onPress={() => dispatch(setPassHome(false))}>
          <Text color="white">Logout</Text>
        </Button>
      </Stack>
   </ScrollView>
      {/* Settings Section */}
   
    </Stack>
  );
};

export default Profile;
