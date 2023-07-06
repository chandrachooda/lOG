import { View, Text ,TextInput,Image,TouchableHighlight, StyleSheet,ImageBackground, Button, TouchableOpacity,Alert} from 'react-native'
import React, {Component}  from 'react'
import axios from 'axios'
export default class Login extends Component{

  constructor(){
    super();
    this.state = { 
      email: '', 
      password: '',
      isLoading: false
    }
  }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  userLogin = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
    } else {
      this.setState({
        isLoading: true,
      })
      
      auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Register')
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }
  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator  size="large" color="#9E9E9E"/>
        </View>
      )
    }  
  
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
