import { Entypo } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Modal, Pressable, StyleSheet, View } from 'react-native'

const BottomModal = ({ children, render }) => {
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
          {children}
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flexGrow: 1,
    backgroundColor: 'black',
    opacity: 0.45
  },
  closeBtn: {
    backgroundColor: 'black',
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
