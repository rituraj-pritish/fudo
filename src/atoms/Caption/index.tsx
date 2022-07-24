import React from 'react'
import { StyleProp, StyleSheet, Text, TextProps, TextStyle } from 'react-native'

import theme from '../../constants/theme'

type Props = {
  children: React.ReactNode
  level: 1 | 2
  bold?: boolean
  style?: StyleProp<TextStyle>
} & TextProps

const Caption = ({ children, level, bold = false, style, ...props }: Props) => {
  return (
    <Text style={[styles.caption, bold && styles.bold, styles[`level${level}`], style]} {...props}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  caption: {
    color: theme.dimGray
  },
  bold: {
    fontWeight: 'bold'
  },
  level1: {
    fontSize: 14
  },
  level2: {
    fontSize: 12
  }
})

export default Caption
