import { AntDesign, Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'

import { Body, Caption, Headline } from '../../atoms'
import theme from '../../constants/theme'
import useCart from '../../hooks/useCart'
import { toRupee } from '../../utils/helperFunctions'
import { CartDish } from '../Restaurant/types'

const CartQuantity = (dish: CartDish) => {
  const { addToCart, removeFromCart } = useCart()
  return (
    <View style={styles.cartQuantity}>
      <Feather
        name="minus"
        size={16}
        color={theme.radicalRed}
        suppressHighlighting
        onPress={() => removeFromCart(dish.id)}
      />
      <Body level={2}>{dish.quantity}</Body>
      <Feather
        name="plus"
        size={16}
        color={theme.radicalRed}
        suppressHighlighting
        onPress={() => addToCart(dish)}
      />
    </View>
  )
}

const CartItem = (dish: CartDish) => {
  const { name, price, quantity } = dish
  return (
    <View style={styles.orderItem}>
      <View>
        <Body level={1} bold>
          {name}
        </Body>
        <Body style={styles.itemPrice} level={1}>
          {toRupee(price)}
        </Body>
      </View>
      <View>
        <CartQuantity {...dish} />
        <Body style={styles.itemTotal} level={1}>
          {toRupee(quantity * price)}
        </Body>
      </View>
    </View>
  )
}

const TAX_PERCENTAGE = 18
const Total = () => {
  const { cartAmount } = useCart()
  const tax = (cartAmount * TAX_PERCENTAGE) / 100
  return (
    <View style={styles.total}>
      <View style={styles.totalRow}>
        <Body level={1}>Item total</Body>
        <Body level={1}>{toRupee(cartAmount)}</Body>
      </View>
      <View style={styles.totalRow}>
        <Body level={2}>Taxes</Body>
        <Body level={2}>{toRupee(tax)}</Body>
      </View>
      <View style={styles.totalRow}>
        <Headline level={5}>Grand Total</Headline>
        <Headline level={5}>{toRupee(cartAmount + tax)}</Headline>
      </View>
    </View>
  )
}

const PaymentDetails = () => {
  const { cartAmount } = useCart()
  const tax = (cartAmount * TAX_PERCENTAGE) / 100
  return (
    <View style={styles.paymentDetails}>
      <View>
        <Caption level={1}>PAY USING</Caption>
        <Body level={1}>Cash on Delivery</Body>
      </View>
      <View style={styles.placeOrder}>
        <Body level={1} style={styles.placeOrderText}>{toRupee(tax + cartAmount)}</Body>
        <Headline level={6} style={styles.placeOrderText} bold={false}>Place Order</Headline>
      </View>
    </View>
  )
}

const Order = () => {
  const { cart } = useCart()
  const navigation = useNavigation()

  return (
    <>
    <View style={styles.header}>
      <TouchableOpacity onPress={navigation.goBack}>
        <AntDesign name="arrowleft" size={24} />
      </TouchableOpacity>
    </View>
      <ScrollView style={styles.orderScreen}>
        <View style={styles.orders}>
          <Headline level={5}>Your Order</Headline>
          {cart.map((dish) => (
            <CartItem key={dish.id} {...dish} />
          ))}
        </View>
        <Total />
      </ScrollView>
      <PaymentDetails/>
    </>
  )
}

const styles = StyleSheet.create({
  cartQuantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.snow,
    borderWidth: 1,
    borderColor: theme.radicalRed,
    borderRadius: 4,
    paddingHorizontal: 6,
    paddingVertical: 2,
    width: 70
  },
  itemPrice: {
    marginTop: 4
  },
  itemTotal: {
    textAlign: 'center',
    marginTop: 4
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8
  },
  total: {
    backgroundColor: theme.white,
    paddingHorizontal: 10,
    paddingVertical: 16,
    marginVertical: 16
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2
  },
  paymentDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  placeOrder: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.radicalRed,
    padding: 8,
    paddingLeft: 0,
    borderRadius: 4
  },
  placeOrderText: {
    color: theme.white,
    marginLeft: 8
  },
  header: {
    paddingHorizontal: 10,
    paddingVertical: 8
  },
  orderScreen: {
    backgroundColor: theme.whisper
  },
  orders: {
    backgroundColor: theme.white,
    paddingHorizontal: 10
  }
})

export default Order
