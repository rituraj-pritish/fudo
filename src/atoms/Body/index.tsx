import React from 'react'
import { StyleSheet, TextProps, Text } from 'react-native'

type Props = {
  bold?: boolean
  level: 1 | 2
} & TextProps

const Body = ({ bold, level, style, children, ...props }: Props) => {
  return (
    <Text style={[bold && styles.bold, styles[`level${level}`], style]} {...props}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold'
  },
  level1: {
    fontSize: 16
  },
  level2: {
    fontSize: 14
  }
})

export default Body
