import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Register from './Register'
import Login from "./Login";
import Main from './Main/Main'
import 'react-native-gesture-handler';
// const stack = createNativeStackNavigator()
const stack = createStackNavigator()
function MyStack(){
return(

<stack.Navigator>
<stack.Screen 
name='Login'
component={Login}
options={{headerShown:false}}
/>
<stack.Screen 
name='Register'
component={Register}
options={{headerShown:false}}
/>

<stack.Screen 
name='Main'
component={Main}
options={{headerShown:false}}
/>
</stack.Navigator>

)
}
export default  function App(){

return(

<NavigationContainer>
    <MyStack />
</NavigationContainer>


)


}