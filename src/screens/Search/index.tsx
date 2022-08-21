import { Entypo, FontAwesome5 } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

import Searchbar from '../../components/Searchbar'
import theme from '../../constants/theme'
import { getSearchedRestaurants } from '../Home/api'
import SearchResult from './SearchResult'

const Search = () => {
  const navigation = useNavigation()
  const [query, setQuery] = useState('')
  const { data, refetch } = useQuery(['search', query], () => getSearchedRestaurants(query), {
    enabled: false
  })

  useEffect(() => {
    if (query) refetch()
  }, [query])

  return (
    <View style={styles.wrapper}>
      <Searchbar
        style={styles.searchBar}
        placeholder='Restaurant name or dish'
        value={query}
        onChangeText={setQuery}
        prefix={
          <TouchableOpacity onPress={navigation.goBack}>
            <Entypo name="chevron-thin-left" color={theme.radicalRed} size={20} />
          </TouchableOpacity>
        }
        suffix={(
          <TouchableOpacity onPress={() => setQuery('')} >
            <FontAwesome5 name="times" color={theme.dimGray} size={20} />
          </TouchableOpacity>
        )}
        autoFocus
      />
      {data?.map((item) => (
        <SearchResult key={item.id} {...item} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10
  },
  searchBar: {
    marginBottom: 12
  }
})

export default Search
