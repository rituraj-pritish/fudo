import React from 'react'
import { Pressable, PressableProps, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native'

import theme from '../../constants/theme'

type Props = {
  children: React.ReactNode
  disabled?: boolean
  fullWidth?: boolean
  type: 'primary' | 'secondary',
  style?: StyleProp<ViewStyle>
} & PressableProps

const Button = ({ children, disabled, fullWidth, type = 'primary', style, ...props }: Props) => {
  return (
    <Pressable 
      style={[
        styles.button, 
        fullWidth && styles.fullWidth, 
        styles[type],
        disabled && styles.disabled,
        style
      ]}
      {...props}
    >
      <Text 
        style={[
          styles.text, 
          styles[`${type}Text`],
          disabled && styles.disabledText, 
        ]}
      >
        {children}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 6,
  },
  primary: {
    backgroundColor: theme.radicalRed,
  },
  primaryText: {
    color: theme.white
  },
  secondary: {
    backgroundColor: theme.snow,
    borderColor: theme.radicalRed,
    borderWidth: 1,
    color: theme.radicalRed
  },
  secondaryText: {
    color: theme.radicalRed
  },
  fullWidth: {
    flexGrow: 1
  },
  text: {
    fontSize: 20
  },
  disabledText: {
    color: theme.darkGray
  },
  disabled: {
    backgroundColor: theme.whisper
  }
})

export default Button