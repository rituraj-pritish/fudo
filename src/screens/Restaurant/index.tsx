import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text } from 'react-native'

const Restaurant = () => {
  const navigation = useNavigation()
  return (
    <Text onPress={() => navigation.goBack()}>Back</Text>
  )
}

export default Restaurant