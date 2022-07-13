import React, { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, View } from 'react-native'

import { Body } from '../../../atoms'
import { BottomModal } from '../../../components'
import theme from '../../../constants/theme'

const FILTERS = ['Fast Delivery', 'Rating 4.0+', 'New Arrivals', 'Offers']

const Filters = () => {
  const [filters, setFilters] = useState([])

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {FILTERS.map((filter) => {
        const isActive = filters.includes(filter)
        return (
          <Pressable
            key={filter}
            style={[styles.filter, isActive && styles.activeFilter]}
            onPress={() =>
              setFilters((fil) => (isActive ? fil.filter((f) => f !== filter) : [...fil, filter]))
            }
          >
            <Body level={1}>{filter}</Body>
          </Pressable>
        )
      })}
      <BottomModal render={(<View style={styles.filter}><Body level={1}>More</Body></View> )}>
        <Body level={1}>Clear</Body>
      </BottomModal>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  filter: {
    borderRadius: 4,
    borderColor: '#d0d0d0',
    borderWidth: 0.7,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 12
  },
  activeFilter: {
    borderColor: theme.primary,
    backgroundColor: '#fef6f6',
  }
})

export default Filters
