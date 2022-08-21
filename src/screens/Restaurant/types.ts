export type Dish = {
  id: string
  name: string
  description: string
  bestseller: boolean
  type: 'veg' | 'non-veg'
  price: number
  rating: number
  totalRatings: number
  image: string
}

export type CartDish = Dish & { quantity: number }

export type RestaurantDetails = {
  id: string
  name: string
  rating: number
  reviews: number
  address: string
  distance: number
  tags: string[]
  dishes: Dish[]
}