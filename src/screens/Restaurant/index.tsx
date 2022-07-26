import { Entypo } from '@expo/vector-icons'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, View } from 'react-native'

import { StackParamList } from '../../../App'
import { Body, Caption, Headline } from '../../atoms'
import theme from '../../constants/theme'
import Dish from './Dish'
import Overview from './Overview'
import { getRestaurantDetails } from './api'

const Restaurant = () => {
  const navigation = useNavigation()
  const route = useRoute<RouteProp<StackParamList, 'Restaurant'>>()
  const { restaurantId } = route.params
  const { data } = useQuery(['restaurant', restaurantId], () => getRestaurantDetails(restaurantId))

  if (!data) return <ActivityIndicator />
  return (
    <View style={styles.wrapper}>
      <Overview {...data} />
      <ScrollView style={styles.dishes}>
        {[...data.dishes, ...data.dishes].map((dish) => (
          <Dish {...dish} />
        ))}
      </ScrollView>
      <View style={styles.footerWrapper}>
        <Pressable style={styles.footer} onPress={() => navigation.navigate('Order')}>
          <View>
            <Caption level={2} style={styles.footerText}>
              2 ITEMS
            </Caption>
            <Body level={1} style={styles.footerText}>
              1038
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
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    position: 'relative'
  },
  dishes: {
    paddingHorizontal: 10
  },
  footerWrapper: {
    position: 'absolute',
    justifyContent: 'center',
    top: '90%',
    bottom: 0,
    width: '100%',
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
