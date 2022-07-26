import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import { Body, Caption, Headline } from '../../../atoms'
import theme from '../../../constants/theme'
import { RestaurantDetails } from '../types'

const Overview = ({ name, tags, distance, rating, reviews, address }: RestaurantDetails) => {
  const navigation = useNavigation()
  return (
    <View style={styles.wrapper}>
      <View style={styles.section}>
        <TouchableOpacity onPress={navigation.goBack}>
          <AntDesign name="arrowleft" size={24} />
        </TouchableOpacity>
        <Ionicons name="heart-outline" size={32}  />
      </View>
      <View style={styles.section}>
        <View>
          <Headline level={4}>{name}</Headline>
          <Body level={1}>
            {tags.join(', ')}
          </Body>
          <Caption level={1} style={styles.address}>{address}</Caption>
          <Body level={2} bold>{distance}km</Body>
        </View>
        <View style={styles.ratingWrapper}>
          <View style={styles.ratingTopSection}>
            <Headline level={6} style={styles.rating}>{rating}</Headline>
            <FontAwesome name="star" size={16} color={theme.white} />
          </View>
          <View style={styles.ratingBottomSection}>
            <Body level={2}>{reviews}</Body>
            <Caption level={1}>Reviews</Caption>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
    paddingVertical: 6
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  address: {
    marginVertical: 4
  },
  ratingWrapper: {
    marginTop: 8,
    shadowColor: "#585858",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity:  0.17,
    shadowRadius: 2.54,
    elevation: 3
  },
  ratingTopSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#417C45',
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  ratingBottomSection: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    backgroundColor: theme.white,
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 6
  },
  rating: {
    color: theme.white
  }
})

export default Overview