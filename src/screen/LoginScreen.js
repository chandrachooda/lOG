import { View, Text ,TextInput,Image,TouchableHighlight, StyleSheet,ImageBackground, Button, TouchableOpacity,Alert,Dimensions} from 'react-native'
import React, {useContext, useState} from 'react';


const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
  
   
  return (


    
    <View style={style.container}>
      
        <View style={style.space}>
       
        <Text
        style={style.Textlog}> Login</Text>
</View>

   <TextInput style={style.input}
   
   value={email}
   placeholder="Email"
   onChangeText={text => setEmail(text)}
   placeholderTextColor={'black'}
/>

<TextInput style={style.input}
   value={password}
   placeholder='Password'
   placeholderTextColor={'black'}
   secureTextEntry={true}
    onChangeText={text => setPassword(text)}
/>

<View>
   
</View>
    <TouchableOpacity style={style.Touch}
    onpress={()=> navigation.navigate('Register')}>
        <Text style={style.Text}>
            Login
        </Text>
    </TouchableOpacity>

    <View>
    <TouchableOpacity 
    onpress={()=> navigation.navigate('Register')}>
    <Text style={style.Under}>
        Don't have any account? Sign Up
    </Text>
    </TouchableOpacity>
    </View>
    </View>
  )}
 export default LoginScreen;

const style =StyleSheet.create({
container:{

height:'100%',
width:'100%',
alignItems:'center',
justifyContent:'center',


},

input:{


    width:'80%',
    height:55,
    textShadowColor:'black',
    color:'black',
    borderWidth: 1,
    borderRadius:3,
    borderColor:'white',
    marginTop:20,
    paddingLeft: 20,
    backgroundColor:'white',

},
Text:{
    
    alignItems:'center',
    fontSize:25,
    
    color:'white',
    
   
  


},
Textlog:{
    
    alignItems:'center',
    fontSize:26,
    
    color:'black',
    marginBottom:50,

  


},
Text2:{
    
    fontSize:15,
    fontWeight:'bold',
    color:'white',
    margin:20,
    
},
Text6:{


    alignItems:'center',
    fontSize:20,
    fontWeight:'bold',
    color:'white',
    marginTop:20,
    paddingLeft: 115,
  // margin:10,

},
Touch:{
    backgroundColor:'black',
    width:'80%',
    height:55,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    marginTop:20,
    },

Under:{
    color:'black',
    marginTop:80,
    marginBottom:-50,

    },
})