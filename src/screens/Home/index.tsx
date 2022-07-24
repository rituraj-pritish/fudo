import React from 'react'
import { View } from 'react-native'

import Filters from './Filters'
import RestaurantCard from './RestaurantCard'
import { restaurants } from './mock'

const Home = () => {
  return (
    <View>
      <Filters />
      {restaurants.map((item) => (
        <RestaurantCard key={item.id} {...item} />
      ))}
    </View>
  )
}

export default Home
