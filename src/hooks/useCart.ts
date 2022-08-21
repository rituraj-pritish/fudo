import { hookstate, useHookstate } from '@hookstate/core'

import { CartDish, Dish } from '../screens/Restaurant/types'
const ITEMS: CartDish[] = [
  {
    id: '11',
    name: 'Classic Zinger',
    price: 189,
    description: 'Signature chicken burger made with a crunchy chicken fillet, veggies & a delicious mayo sauce',
    bestseller: true,
    rating: 4,
    totalRatings: 288,
    type: 'non-veg',
    image: 'https://i.pinimg.com/originals/2e/95/ee/2e95ee59be36e36e7529d6592d46b380.png',
    quantity: 1
  },
  {
    id: '12',
    name: 'Veg Zinger',
    price: 179,
    description: 'Signature veg burger with crispy patties, veggies & a tangy sauce',
    rating: 4.5,
    totalRatings: 73,
    type: 'veg',
    image: 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_312,h_196,c_fill/dkbpysjlbzzvzkxexqzf',
    quantity: 1
  }
]
const cartState = hookstate<CartDish[]>(ITEMS || [])

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
  const removeFromCart = (id: string) => state.set(prevCart => {
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
