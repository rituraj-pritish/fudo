import { dummyApi } from '../../core/api'
import { restaurantDetails } from './mock'
import { RestaurantDetails } from './types'

export const getRestaurantDetails = (id: number) => dummyApi<RestaurantDetails>(restaurantDetails, 1000)