import React, { useEffect, useState } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import BouncyCheckbox, { IBouncyCheckboxProps } from 'react-native-bouncy-checkbox'

import theme from '../../constants/theme'

type Props = {
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
} & IBouncyCheckboxProps

const Checkbox = ({ defaultChecked = false, onChange, ...props }: Props) => {
  const [isChecked, setIsChecked] = useState(defaultChecked)

  useEffect(() => {
    if(typeof onChange === 'function') {
      onChange(isChecked)
    }
  }, [isChecked])

  return (
    <BouncyCheckbox
      disableBuiltInState
      isChecked={isChecked}
      onPress={() => setIsChecked(state => !state)}
      iconStyle={[styles.iconStyle, isChecked && styles.checkedIconStyle]}
      textStyle={[styles.textStyle, isChecked && styles.checkedTextStyle]}
      fillColor={theme.wewak}
      style={styles.style}
      TouchableComponent={Pressable}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  iconStyle: {
    borderColor: theme.silver,
    borderWidth: 1.5,
    borderRadius: 4,
    width: 16,
    height: 16
  },
  checkedIconStyle: {
    borderColor: theme.wewak
  },
  textStyle: {
    color: theme.dimGray,
    fontSize: 16,
    textDecorationLine: 'none'
  },
  checkedTextStyle: {
    color: theme.black
  },
  style: {
    paddingLeft: 16,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between'
  }
})

export default Checkbox
