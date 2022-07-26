import React from 'react'
import { StyleSheet, View } from 'react-native'

import Filters from '../Filters'
import SearchBar from '../SearchBar'

const Header = () => {
  return (
    <View style={styles.wrapper}>
      <SearchBar forHome />
      <Filters />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10
  }
})

export default Header
