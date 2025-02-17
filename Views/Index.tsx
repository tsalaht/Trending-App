import { View, Text } from 'react-native'
import React from 'react'
import AuthPages from './Auth/Index'
import ProtectedScreens from './ProtectedScreens/Index'
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';

const AllPages = () => {
    const passHome = useSelector((state: RootState) => state.passHome.value);
  return (
passHome ? <ProtectedScreens/> :<AuthPages/>
  )
}

export default AllPages