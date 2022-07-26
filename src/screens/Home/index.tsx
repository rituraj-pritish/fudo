import { useInfiniteQuery } from '@tanstack/react-query'
import React from 'react'
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native'

import theme from '../../constants/theme'
import Header from './Header'
import RestaurantCard from './RestaurantCard'
import { getRestaurants } from './api'

const Home = () => {
  const { data, isLoading, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(['restaurants'], ({ pageParam }) => getRestaurants(pageParam), {
    getNextPageParam: (_, all) => all.length + 5
  })

  return (
    <View style={styles.homeScreen}>
      <Header/>
      {isLoading ? (
        <View style={styles.spinnerWrapper}>
          <ActivityIndicator size="large" color={theme.radicalRed} />
        </View>
      ) : (
        <FlatList
          data={data.pages.flat()}
          renderItem={({ item }) => <RestaurantCard {...item} />}
          keyExtractor={(item) => item.id.toString()}
          style={styles.flatList}
          onEndReachedThreshold={0.2}
          onEndReached={() => fetchNextPage()}
        />
      )}
      {isFetchingNextPage && <ActivityIndicator size="large" color={theme.radicalRed} />}
    </View>
  )
}

const styles = StyleSheet.create({
  homeScreen: {
    flexGrow: 1
  },
  spinnerWrapper: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  flatList: {
    paddingHorizontal: 10
  }
})

export default Home
