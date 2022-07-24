import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'

import { Body, Headline } from '../../../atoms'
import { BottomModal } from '../../../components'
import theme from '../../../constants/theme'

const Sort = () => {
  return (
    <BottomModal
      render={(
        <View style={styles.view}>
          <Body level={1}>Relevance</Body>
        </View>
      )}
    >
      {(_, handleVisible) => (
        <Pressable onPress={() => handleVisible(false)}>
          <Headline bold={false} style={styles.clear} level={6}>Clear All</Headline>
        </Pressable>
      )}
    </BottomModal>
  )
}

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    right: 0,
    top: -29,
    marginRight: -10,
    backgroundColor: 'white',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    borderColor: '#b4b4b4',
    borderWidth: 0.7,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  clear: {
    paddingLeft: 20,
    color: theme.radicalRed
  }
})

export default Sort
