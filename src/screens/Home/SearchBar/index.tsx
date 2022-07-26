import { AntDesign, Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'

import { Body } from '../../../atoms'
import theme from '../../../constants/theme'

type Props = {
  forHome?: boolean
  onChange?: VoidFunction
}

const SearchBar = ({ forHome = false, onChange }: Props) => {
  const navigation = useNavigation()
  const WrapperComponent = forHome ? Pressable : View
  const icon = forHome ? (
    <AntDesign style={styles.icon} name="search1" color={theme.radicalRed} size={20} />
  ) : (
    <TouchableOpacity style={styles.icon} onPress={navigation.goBack}>
      <Entypo name="chevron-thin-left" color={theme.radicalRed} size={20} />
    </TouchableOpacity>
  )
  return (
    <WrapperComponent
      style={styles.inputWrapper}
      onPress={() => forHome && navigation.navigate('Search')}
    >
      {icon}
      {forHome ? (
        <Body level={1} style={styles.placeholder}>
          Restaurant Name
        </Body>
      ) : (
        <TextInput
          placeholder="Restaurant name"
          selectionColor={theme.silver}
          style={styles.input}
          onChangeText={onChange}
        />
      )}
    </WrapperComponent>
  )
}

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.silver,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 12,
    fontSize: 16,
    borderRadius: 8
  },
  placeholder: {
    color: theme.silver
  },
  icon: {
    marginRight: 12
  },
  input: {
    flexGrow: 1
  }
})

export default SearchBar
