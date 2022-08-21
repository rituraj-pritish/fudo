import React, { useState } from 'react'
import { StyleSheet, View, Pressable, TextInput, Dimensions, TextInputProps } from 'react-native'

import theme from '../../constants/theme'

type Props = {
  onPress?: VoidFunction
  prefix?: React.ReactElement
  suffix?: React.ReactElement
} & TextInputProps

const Searchbar = ({ onPress, style, prefix, suffix, ...props }: Props) => {
  const [inputWidth, setInputWidth] = useState(Dimensions.get('screen').width - 50)
  const [isComputed, setIsComputed] = useState({
    prefix: false,
    suffix: false
  })
  const Wrapper = onPress ? Pressable : View

  const onPrefixLayout = (e) => {
    e.persist()
    if (e.nativeEvent.layout?.width && !isComputed.prefix) {
      setInputWidth((prevWidth) => prevWidth - e.nativeEvent.layout?.width - 10)
      setIsComputed(prevState => ({
        ...prevState,
        prefix: true
      }))
    }
  }
  const onSuffixLayout = (e) => {
    e.persist()
    if (e.nativeEvent.layout?.width && !isComputed.suffix) {
      setInputWidth((prevWidth) => prevWidth - e.nativeEvent.layout?.width - 10)
      setIsComputed(prevState => ({
        ...prevState,
        suffix: true
      }))
    }
  }
  const onLayout = (e, type) => {
    e.persist()
    if (e.nativeEvent.layout?.width && !isComputed[type]) {
      setInputWidth((prevWidth) => prevWidth - e.nativeEvent.layout?.width - 10)
      setIsComputed(prevState => ({
        ...prevState,
        [type]: true
      }))
    }
  }

  return (
    <Wrapper style={[styles.wrapper, style]} onPress={onPress && onPress}>
      {prefix && (
        <View style={styles.prefix} onLayout={e => onLayout(e, 'prefix')}>
          {prefix}
        </View>
      )}
      <View pointerEvents={onPress ? 'none' : undefined}>
        <TextInput
          style={{ width: inputWidth }}
          selectionColor={theme.silver}
          placeholderTextColor={theme.dimGray}
          autoCorrect={false}
          {...props}
        />
      </View>
      {suffix && (
        <View style={styles.suffix} onLayout={e => onLayout(e, 'suffix')}>
          {suffix}
        </View>
      )}
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.silver,
    paddingVertical: 10,
    paddingHorizontal: 14,
    fontSize: 16,
    borderRadius: 8
  },
  prefix: {
    marginRight: 10
  },
  suffix: {
    marginLeft: 10
  }
})

export default Searchbar
