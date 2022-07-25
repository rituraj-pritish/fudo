import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

import theme from '../../../constants/theme'

const SearchBar = () => {
  return (
    <View style={styles.inputWrapper}>
      <AntDesign name="search1" color={theme.radicalRed} size={20} style={styles.searchIcon}/>
      <TextInput placeholder='Restaurant name' selectionColor={theme.silver} style={styles.input} />
    </View>
  )
}

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: theme.silver,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 12,
    fontSize: 16,
    borderRadius: 8
  },
  searchIcon: {
    marginRight: 12,
  },
  input: {
    flexGrow: 1
  }
})

export default SearchBar
