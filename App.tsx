import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StyleSheet, View } from 'react-native'

import screens from './src/constants/screens'
import theme from './src/constants/theme'
import { Home } from './src/screens'
import Restaurant from './src/screens/Restaurant'
import Search from './src/screens/Search'

const queryClient = new QueryClient()

const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={screens.home}
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={screens.home} component={Home} />
      <Stack.Screen name={screens.restaurant} component={Restaurant} />
      <Stack.Screen name={screens.search} component={Search} />
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
    backgroundColor: theme.white,
    paddingTop: 50
  }
})
