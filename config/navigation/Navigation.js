import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from '@rneui/base'
import Login from '../../modules/auth/adapters/screens/Login'
import CreateAccount from '../../modules/users/adapters/screens/CreateAccount'

const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
        <Tab.Navigator
            initialRouteName='login'
            screenOptions={({route})=>({
                tabBarIcon:({color}) => screenOptions(route,color),
                tabBarActiveTintColor:"tomato",
                tabBarInactiveTintColor:"gray"
            })}
        >
            <Tab.Screen
                name='login'
                component={Login}
                options={{title:'Inicio de Sesión'}}
            />
            <Tab.Screen
                name='createAccount'
                component={CreateAccount}
                options={{title:'Crear Cuenta'}}
            />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

const screenOptions = (route, color) =>{
    let iconName;
    switch(route.name){
        case 'login':
            iconName = 'login';
            break;
        case 'createAccount':
            iconName = 'account-plus';
            break;
    }
    return (<Icon type='material-community' name={iconName} size={22} color={color} />)
}