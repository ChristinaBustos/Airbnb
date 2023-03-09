import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../modules/home/adapters/screens/Home'

const Stack = createNativeStackNavigator()

export default function HomeStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#ff5a67' }
    }}>
    <Stack.Screen
        name='homeStack'
        options={{ title: 'Home' }}
        component={Home}
    />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})