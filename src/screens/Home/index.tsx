import React from 'react'
import { View } from 'react-native'

import Filters from './Filters'
import RestaurantCard from './RestaurantCard'
import { restaurants } from './mock'

const Home = () => {
  return (
    <View>
      {restaurants.map((item) => (
        <RestaurantCard key={item.id} {...item} />
      ))}
      <Filters />
    </View>
  )
}

export default Home
