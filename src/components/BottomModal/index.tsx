import { Entypo } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Modal, Pressable, StyleSheet, View } from 'react-native'

import { Headline } from '../../atoms'
import theme from '../../constants/theme'

type Props = {
  children: React.ReactNode
  render: React.ReactNode | (() => React.ReactNode)
  title?: string
}

const BottomModal = ({ children, render, title }: Props) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <Pressable onPress={() => setIsVisible(true)}>{render}</Pressable>
      <Modal
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}
        animationType="fade"
        transparent
      >
        <Pressable style={styles.overlay} onPress={() => setIsVisible(false)} />
        <View style={styles.view}>
          <Pressable style={styles.closeBtn} onPress={() => setIsVisible(false)}>
            <Entypo name="cross" size={28} color="white" />
          </Pressable>
          {title && (
            <View style={styles.title}>
              <Headline level={6} bold={false}>
                {title}
              </Headline>
            </View>
          )}
          {typeof children === 'function' ? children(isVisible, setIsVisible) : children}
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    borderBottomColor: theme.silver,
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginHorizontal: -10,
    paddingHorizontal: 10,
    paddingLeft: 24,
    marginBottom: 10
  },
  overlay: {
    flexGrow: 1,
    backgroundColor: theme.black,
    opacity: 0.45
  },
  closeBtn: {
    backgroundColor: theme.black,
    width: 40,
    height: 40,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: -56
  },
  view: {
    width: '100%',
    padding: 10,
    paddingBottom: 16
  }
})

export default BottomModal
