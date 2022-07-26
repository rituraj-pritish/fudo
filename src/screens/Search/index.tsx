import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import debounce from '../../utils/debounce'
import SearchBar from '../Home/SearchBar'
import { getSearchedRestaurants } from '../Home/api'
import SearchResult from './SearchResult'

const Search = () => {
  const [query, setQuery] = useState('')
  const { data, refetch } = useQuery(['search', query], () => getSearchedRestaurants(query), {
    enabled: false
  })

  useEffect(() => {
    if (query) refetch()
  }, [query])

  return (
    <View style={styles.wrapper}>
      <SearchBar onChange={debounce(setQuery, 300)} />
      {data?.map((item) => (
        <SearchResult key={item.id} {...item}/>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10
  }
})

export default Search
