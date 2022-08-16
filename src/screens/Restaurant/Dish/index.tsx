import { Entypo, Feather } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'

import { Body, Button, Caption, Headline } from '../../../atoms'
import theme from '../../../constants/theme'
import useCart from '../../../hooks/useCart'
import { toRupee } from '../../../utils/helperFunctions'
import { Dish as DishType } from '../types'

const AddButton = ({ onIncrement, onDecrement, initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount)
  return count > 0 ? (
    <View style={styles.counterButton}>
      <Feather
        name="minus"
        size={24}
        color={theme.white}
        suppressHighlighting
        onPress={() => {
          setCount((c) => c - 1)
          onDecrement()
        }}
      />
      <Headline level={6} style={styles.count} bold>
        {count}
      </Headline>
      <Feather
        name="plus"
        size={24}
        color={theme.white}
        suppressHighlighting
        onPress={() => {
          setCount((c) => c + 1)
          onIncrement()
        }}
      />
    </View>
  ) : (
    <Button
      type="secondary"
      style={styles.button}
      onPress={() => {
        setCount(1)
        onIncrement()
      }}
    >
      ADD
    </Button>
  )
}

const Dish = (dish: DishType) => {
  const { cart, addToCart, removeFromCart } = useCart()
  const { name, image, type, price, description, bestseller, id } = dish
  const itemQuantity = cart.find(item => item.id === id)?.quantity

  return (
    <View style={styles.wrapper}>
      <View style={styles.leftSection}>
        <View style={styles.header}>
          <View style={[styles.type, styles[type]]}>
            {type === 'veg' ? (
              <View style={styles.vegDot} />
            ) : (
              <Entypo style={styles.nonVegTriangle} name="triangle-up" size={16} color="#CD0200" />
            )}
          </View>
          {bestseller && (
            <View style={styles.bestSeller}>
              <Caption level={2} style={styles.bestSellerText} bold>
                Bestseller
              </Caption>
            </View>
          )}
        </View>
        <Body level={1}>{name}</Body>
        <Body level={2}>{toRupee(price)}</Body>
        <Caption level={1}>{description}</Caption>
      </View>
      <View>
        <Image source={{ uri: image }} style={styles.image} />
        <AddButton
          onIncrement={() => addToCart(dish)}
          onDecrement={() => removeFromCart(id)}
          initialCount={itemQuantity}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomColor: theme.silver,
    borderBottomWidth: 0.5
  },
  leftSection: {
    maxWidth: '60%'
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 4
  },
  bestSeller: {
    backgroundColor: theme.radicalRed,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginLeft: 8
  },
  bestSellerText: {
    color: theme.white
  },
  type: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderRadius: 4
  },
  veg: {
    borderColor: '#027C01',
    justifyContent: 'center',
    alignItems: 'center'
  },
  'non-veg': {
    borderColor: '#CD0200'
  },
  nonVegTriangle: {
    marginTop: -2,
    marginLeft: -1
  },
  vegDot: {
    backgroundColor: '#027C01',
    width: 8,
    height: 8,
    borderRadius: 5
  },
  image: {
    width: 120,
    height: 100,
    borderRadius: 8
  },
  button: {
    width: 120,
    marginTop: 8
  },
  counterButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 6,
    width: 120,
    marginTop: 8,
    backgroundColor: theme.radicalRed,
    borderRadius: 4
  },
  count: {
    color: theme.white
  }
})

export default Dish
