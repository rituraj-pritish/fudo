import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Pressable, StyleSheet } from 'react-native'

import { Body } from '../../../atoms'
import theme from '../../../constants/theme'
import { Restaurant } from '../../Home/types'

const SearchResult = ({ logo, name, id }: Restaurant) => {
  const navigation = useNavigation()
  return (
    <Pressable
      style={styles.wrapper}
      onPress={() =>
        navigation.navigate('Restaurant', {
          restaurantId: id
        })
      }
    >
      <Image style={styles.logo} source={{ uri: logo }} />
      <Body level={1}>{name}</Body>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  logo: {
    borderWidth: 1,
    borderColor: theme.silver,
    borderRadius: 4,
    width: 32,
    height: 32,
    marginRight: 12
  }
})

export default SearchResult
