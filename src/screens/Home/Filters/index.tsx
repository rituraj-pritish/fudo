import React, { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, View } from 'react-native'

import { Body, Button, Checkbox, Headline } from '../../../atoms'
import { BottomModal } from '../../../components'
import theme from '../../../constants/theme'

const FILTERS = ['Fast Delivery', 'Rating 4.0+', 'New Arrivals', 'Offers']

const MoreFilters = ({ clearFilters }) => {
  const [filters, setFilters] = useState([])
  return (
    <BottomModal
      render={
        <View style={styles.filter}>
          <Body level={1}>More</Body>
        </View>
      }
      title={`More filters ${filters.length > 0 ? `(${filters.length})` : ''}`}
    >
      {(_, handleVisible) => (
        <View>
          <Checkbox
            text="Previously Ordered"
            onChange={(checked) => (checked ? setFilters(['previouslyOrdered']) : setFilters([]))}
          />
          <View style={styles.modalBottom}>
            <Pressable
              onPress={() => {
                clearFilters()
                setFilters([])
                handleVisible(false)
              }}
            >
              <Headline level={6} bold={false} style={styles.clear}>
                Clear All
              </Headline>
            </Pressable>
            <Button
              onPress={() => handleVisible(false)}
              fullWidth
              disabled={filters.length === 0}
              type="primary"
            >
              Apply
            </Button>
          </View>
        </View>
      )}
    </BottomModal>
  )
}

const Filters = () => {
  const [filters, setFilters] = useState([])
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filters}>
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
      <MoreFilters clearFilters={() => setFilters([])} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  modalBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
    borderTopColor: theme.silver,
    borderTopWidth: 1,
    marginHorizontal: -10,
    paddingHorizontal: 10,
    paddingTop: 10,
    marginTop: 10
  },
  clear: {
    color: theme.radicalRed,
    paddingLeft: 16,
    marginRight: 32
  },
  filters: {
    marginHorizontal: -10,
    paddingHorizontal: 10,
    marginTop: 12,
    marginBottom: 16
  },
  filter: {
    borderRadius: 4,
    borderColor: theme.silver,
    borderWidth: 0.7,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 12
  },
  activeFilter: {
    borderColor: theme.radicalRed,
    backgroundColor: theme.snow
  }
})

export default Filters
