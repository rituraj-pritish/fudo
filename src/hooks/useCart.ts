import { hookstate, useHookstate } from '@hookstate/core'

import { Dish } from '../screens/Restaurant/types'

type CartDish = Dish & { quantity: number }

const cartState = hookstate<CartDish[]>([])

export default () => {
  const state = useHookstate(cartState)

  const cart = state.get()
  const addToCart = (item: Dish) => state.set((prevCart) => {
    const cartItem = prevCart.find(({ id }) => item.id === id)
    if(cartItem) {
      return prevCart.map(prevCartItem => item.id === prevCartItem.id 
        ? { ...cartItem, quantity: cartItem.quantity + 1 } 
        : prevCartItem
      )
    }
    return [...prevCart, { ...item, quantity: 1 }]
  })
  const removeFromCart = (id: Pick<Dish, 'id'>) => state.set(prevCart => {
    const cartItem = prevCart.find((item) => item.id === id)
    if(cartItem.quantity > 1) {
      return prevCart.map(prevCartItem => id === prevCartItem.id 
        ? { ...cartItem, quantity: cartItem.quantity - 1 } 
        : prevCartItem
      )
    }
    return prevCart.filter(item => item.id !== id)
  })

  const cartAmount = cart.reduce((acc, { price, quantity }) => acc + (quantity * price), 0)
  const cartLength = cart.reduce((acc, { quantity }) => acc + quantity, 0)

  return {
    cart,
    cartLength,
    cartAmount,
    addToCart,
    removeFromCart
  }
}
