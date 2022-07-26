import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ImageBackground, Pressable, StyleSheet, View } from 'react-native'

import { Body, Caption, Headline } from '../../../atoms'
import theme from '../../../constants/theme'
import { Restaurant } from '../types'

const RestaurantCard = ({
  id,
  name,
  image,
  tags,
  rating,
  forOne,
  deliveryTime,
  discount,
  discountUpto,
  distance
}: Restaurant) => {
  const navigation = useNavigation()
  const isLiked = false
  return (
    <Pressable
      style={styles.pressable}
      onPress={() => navigation.navigate('Restaurant', {
        restaurantId: id
      })}
    >
      <View style={styles.top}>
        <ImageBackground
          source={{ uri: image }}
          imageStyle={styles.bgImageStyle}
          style={styles.bgImage}
        >
          <Pressable style={styles.like}>
            <Ionicons name={isLiked ? 'heart-sharp' : 'heart-outline'} size={24} color="red" />
          </Pressable>
          {discount && (
            <View style={styles.discount}>
              <Body style={styles.discountBody} level={2} bold>
                {discount}% OFF
              </Body>
              <Body style={styles.discountBody} level={2}>
                Up to {discountUpto}
              </Body>
            </View>
          )}
          <View style={styles.deliveryTime}>
            <Body level={2}>
              {deliveryTime} mins | {distance} km
            </Body>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.info}>
        <View style={styles.flex}>
          <Headline level={5}>{name}</Headline>
          <View style={styles.ratingWrapper}>
            <Body style={styles.rating} bold level={2}>
              {rating}
            </Body>
          </View>
        </View>
        <View style={styles.flex}>
          <Caption level={1}>{tags.join(', ')}</Caption>
          <Caption level={1} style={styles.forOne}>
            {forOne + ' for one'}
          </Caption>
        </View>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  like: {
    borderRadius: 100,
    backgroundColor: theme.white,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 16,
    top: 16
  },
  discount: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    position: 'absolute',
    left: 0,
    bottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: theme.cornFlowerBlue
  },
  discountBody: {
    color: theme.white,
    alignSelf: 'flex-start'
  },
  deliveryTime: {
    backgroundColor: theme.white,
    width: 'auto',
    alignSelf: 'flex-start',
    justifyContent: 'center',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    position: 'absolute',
    bottom: 16,
    right: 16
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  ratingWrapper: {
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#417C45',
    paddingHorizontal: 12
  },
  rating: {
    color: theme.white
  },
  pressable: {
    marginBottom: 24,
    width: '100%',
    shadowColor: theme.black,
    shadowOffset: { height: 5, width: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    display: 'flex',
    borderRadius: 20,
    elevation: 7
  },
  forOne: {
    color: theme.dimGray
  },
  top: {
    height: 180
  },
  info: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: theme.white,
    padding: 16,
    paddingBottom: 20
  },
  bgImageStyle: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  bgImage: {
    width: '100%',
    height: '100%'
  }
})

export default RestaurantCard
