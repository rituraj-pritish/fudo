import { dummyApi } from '../../core/api'
import { restaurants } from './mock'
import { Restaurant } from './types'

export const getRestaurants = () =>
  dummyApi<Restaurant[]>(restaurants, 1000)

export const getSearchedRestaurants = (searchQuery: string) => {
  const results = restaurants.filter(({ name }) => name.toLowerCase().includes(searchQuery.toLowerCase()))
  return dummyApi<Restaurant[]>(results, 1000)
}