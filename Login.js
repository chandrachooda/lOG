import { View, Text ,TextInput,Image,TouchableHighlight, StyleSheet,ImageBackground, Button, TouchableOpacity,Alert} from 'react-native'
import React, {Component,useState}  from 'react'
import axios from 'axios'
const LoginScreen = (text) => {
    setLoginEmail(text);
  };
  
  const handleLoginPasswordChange = (text) => {
    setLoginPassword(text);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://api.oopacks.com/api/test/login', {
        email: loginEmail,
        password: loginPassword,
      });
  
      console.log(response.data);

      setLoginEmail('');
      setLoginPassword('');
    } catch (error) {
      
      console.error(error);
    }
  };

const Login = ({navigation}) => {
    const [loginEmail, setLoginEmail] = useState('');
const [loginPassword, setLoginPassword] = useState('');




const handleLoginEmailChange = (text) => {
    setLoginEmail(text);
  };
  
  const handleLoginPasswordChange = (text) => {
    setLoginPassword(text);
  };



  const handleLogin = async () => {
    try {
      const response = await axios.post('https://api.oopacks.com/api/test/login', {
        email: loginEmail,
        password: loginPassword,
      });
  
      console.log(response.data);

      setLoginEmail('');
      setLoginPassword('');
    } catch (error) {
      
      console.error(error);
    }
  };
  return (


    
    <View style={style.container}>
      
        <View style={style.space}>
       
        <Text
        style={style.Textlog}> Login</Text>
</View>

   <TextInput style={style.input}
   
   
   placeholder="Email"
   onChangeText={text => setEmail(text)}
   placeholderTextColor={'black'}
/>

<TextInput style={style.input}
   
   placeholder='Password'
   placeholderTextColor={'black'}
   secureTextEntry={true}
    onChangeText={text => setPassword(text)}
/>

<View>
   
</View>
    <TouchableOpacity style={style.Touch}
     onPress={() => this.props.navigation.navigate('Main')}>
        <Text style={style.Text}>
            Login
        </Text>
    </TouchableOpacity>

    <View>
    <TouchableOpacity 
    onpress={()=> navigation.navigate('Register')}>
    <Text style={style.Under}
     onPress={() => this.props.navigation.navigate('Register')}>
        Don't have any account? Sign Up
    </Text>
    </TouchableOpacity>
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
