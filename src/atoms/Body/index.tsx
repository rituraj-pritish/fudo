import React from 'react'
import { StyleSheet, TextProps, Text } from 'react-native'

type Props = {
  bold?: boolean
  level: 1 | 2
} & TextProps

const Body = ({ bold, level, style, children, ...props }: Props) => {
  return (
    <Text style={[styles[`level${level}`], bold && styles.bold, style]} {...props}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: '600'
  },
  level1: {
    fontSize: 16,
    fontWeight: '400'
  },
  level2: {
    fontSize: 14,
    fontWeight: '400'
  }
})

export default Body
