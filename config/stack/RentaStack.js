import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Renta from '../../modules/renta/adapters/screens/Renta'
const Stack = createNativeStackNavigator()

export default function RentaStack() {
  return (
    <Stack.Navigator
            screenOptions={{
              headerShown: false,
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#ff5a60' }
            }}>
            <Stack.Screen
                name='rentaStack'
                options={{ title: 'Rentas' }}
                component={Renta}
            />
        </Stack.Navigator>
  )
}