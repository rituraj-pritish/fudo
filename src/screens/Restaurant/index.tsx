import { Entypo } from '@expo/vector-icons'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, View } from 'react-native'

import { StackParamList } from '../../../App'
import { Body, Caption, Headline } from '../../atoms'
import theme from '../../constants/theme'
import useCart from '../../hooks/useCart'
import { toRupee } from '../../utils/helperFunctions'
import Dish from './Dish'
import Overview from './Overview'
import { getRestaurantDetails } from './api'

const CartOverview = () => {
  const navigation = useNavigation()
  const { cartLength, cartAmount } = useCart()
  return (
    <View style={styles.footerWrapper}>
      <Pressable style={styles.footer} onPress={() => navigation.navigate('Order')}>
        <View>
          <Caption level={2} style={styles.footerText}>
            {cartLength} ITEMS
          </Caption>
          <Body level={1} style={styles.footerText}>
            {toRupee(cartAmount)}
          </Body>
        </View>
        <View style={styles.next}>
          <Headline level={6} bold={false} style={styles.footerText}>
            Next
          </Headline>
          <Entypo name="triangle-right" size={24} color={theme.white} />
        </View>
      </Pressable>
    </View>
  )
}

const Restaurant = () => {
  const route = useRoute<RouteProp<StackParamList, 'Restaurant'>>()
  const { restaurantId } = route.params
  const { data } = useQuery(
    ['restaurant', restaurantId], 
    () => getRestaurantDetails(restaurantId)
  )

  if (!data) return <ActivityIndicator />
  return (
    <View style={styles.wrapper}>
      <Overview {...data} />
      <ScrollView style={styles.dishes} showsVerticalScrollIndicator={false}>
        {data.dishes.map((dish) => (
          <Dish key={dish.id} {...dish} />
        ))}
      </ScrollView>
      <CartOverview />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  dishes: {
    paddingHorizontal: 10,
  },
  footerWrapper: {
    justifyContent: 'center',
    minHeight: 70,
    backgroundColor: theme.white,
    paddingHorizontal: 16
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.radicalRed,
    height: 50,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 6
  },
  footerText: {
    color: theme.white,
    marginBottom: 4
  },
  next: {
    flexDirection: 'row'
  }
})

export default Restaurant
