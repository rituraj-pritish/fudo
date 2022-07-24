import React from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'

type Props = {
  bold?: boolean
  level: 1 | 2 | 3 | 4 | 5 | 6,
  children: React.ReactNode,
} & TextProps

const Headline = ({ bold = true, level, style, children, ...props }: Props) => {
  return (
      <Text 
        style={[
          bold && styles.bold,
          styles[`level${level}`],
          style
        ]}
        {...props}
      >
        {children}
      </Text>
    )
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  level1: {
    fontSize: 44
  },
  level2: {
    fontSize: 40
  },
  level3: {
    fontSize: 32
  },
  level4: {
    fontSize: 28
  },
  level5: {
    fontSize: 24
  },
  level6: {
    fontSize: 20
  }
})

export default Headline
