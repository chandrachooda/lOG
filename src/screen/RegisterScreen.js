import { View, Text ,TextInput,Image,TouchableHighlight, StyleSheet,ImageBackground, Button, TouchableOpacity,Alert,Dimensions} from 'react-native'
import React, {Component}  from 'react'
export default class Login extends Component{
  render() {
  return ( 
    <View style={style.container}>
        <View style={style.space}>   
        <Text style={style.Textlog}> SignUp</Text>
</View>
   <TextInput style={style.input}
      placeholder='Name'
      placeholderTextColor={'black'}/>
      <TextInput style={style.input}
      placeholder='Email'
      placeholderTextColor={'black'}/>
<TextInput style={style.input} 
   placeholder='Password'
   placeholderTextColor={'black'}
   secureTextEntry={true}/>
   <TextInput style={style.input} 
   placeholder='ConfirmPassword'
   placeholderTextColor={'black'}
   secureTextEntry={true}/>
<View> 
</View>
    <TouchableOpacity style={style.Touch}>
        <Text style={style.Text}>
            Login
        </Text>
    </TouchableOpacity>

    <View>
    <Text style={style.Under}>
        Don't have any account? Sign Up
    </Text>
    </View>
    </View>
     )
}
}
// export default Login;

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