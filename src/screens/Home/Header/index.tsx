import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, View } from 'react-native'

import Searchbar from '../../../components/Searchbar'
import theme from '../../../constants/theme'
import Filters from '../Filters'

const Header = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.wrapper}>
      <Searchbar 
        placeholder='Restaurant name or a dish'
        onPress={() => navigation.navigate('Search')}
        prefix={<AntDesign name="search1" color={theme.radicalRed} size={20} />}
      />
      <Filters />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10
  },

})

export default Header
