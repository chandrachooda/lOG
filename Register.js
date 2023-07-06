import { View, Text ,TextInput,Image,TouchableHighlight, StyleSheet,ImageBackground, Button, TouchableOpacity,Alert} from 'react-native'
import React, {Component} from 'react'
import Login from "./Login";
import axios from 'axios'
export default class Register extends Component{
    
  constructor() {
    super();
    this.state = { 
      displayName: '',
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
   registerUser = () => {
    if(this.state.email ===''  && this.state.password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      this.setState({
        isLoading: false,
      })
      
      auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res);
        res.user.updateProfile({
          displayName: this.state.displayName
        })
        console.log('User registered successfully!')
        this.setState({
          
          displayName: '',
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Login')
      })
      .catch(error => this.setState({ errorMessage: error.message }))      
    }
  }
  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }
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
    <TouchableOpacity style={style.Touch}
    onPress={() => this.props.navigation.navigate('Login')}>
        <Text style={style.Text}>
            Registerr
        </Text>
    </TouchableOpacity>

    <View>
    <Text style={style.Under}>
        Already account? Login
    </Text>
    </View>
    </View>
     )

}



}

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
