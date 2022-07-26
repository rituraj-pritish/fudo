import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StyleSheet, View } from 'react-native'

import theme from './src/constants/theme'
import { Home } from './src/screens'
import Order from './src/screens/Order'
import Restaurant from './src/screens/Restaurant'
import Search from './src/screens/Search'

const queryClient = new QueryClient()

export type StackParamList = {
  Home: undefined
  Search: undefined
  Order: undefined
  Restaurant: { restaurantId: number }
}

const Stack = createNativeStackNavigator<StackParamList>()

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}

const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.white
        }
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Restaurant' component={Restaurant} />
      <Stack.Screen name='Search' component={Search} />
      <Stack.Screen name='Order' component={Order} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <View style={styles.container}>
          <Navigator />
        </View>
      </QueryClientProvider>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50
  }
})
