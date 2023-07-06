import { View, Text, StyleSheet,Image, TouchableHighlight, TouchableOpacity} from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style ={styles.container}>
    <View style ={styles.header}>
     <Image
     style={styles.logo}
     source={require('../assets/na.png')}
     />
     <Text style={styles.text}>Dashboard</Text>
     <TouchableOpacity
     onPress={() => this.props.navigation.navigate('Login')}
     >
         <Image
     style={styles.logo2}
     source={require('../assets/lof.png')}
     
     />
     </TouchableOpacity>
     
     
    </View>
    <View style={styles.inside}>

     
    <Text style={styles.insidetext}>Welcome to OOpacks</Text>   
    <Text
        style={styles.Text}> Explore the Journey  </Text>
        <Image
        style={styles.Logo1}
        source={require('../assets/219986.png')}>
        </Image>
    <View style={styles.flec}>
       <TouchableOpacity style={styles.Touch1} >
        <Text style={styles.Text3}>+</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.Touch1} >
        <Text style={styles.Text3}>+</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.Touch1} >
        <Text style={styles.Text3}>+</Text>
       </TouchableOpacity>
     </View>
       <Text style={styles.userdet}>
        User details
       </Text>
       
    </View>
    <TouchableOpacity style={styles.Travel}>
    <Image
        style={styles.enter}
        source={require('../assets/na.png')}>
        </Image>
        <Text style={styles.Textea}>  </Text>

    </TouchableOpacity>

    </View>
  )
}

export default App;

const styles=StyleSheet.create({

container:{
height:'100%',
width:'100%',
},
header:{
  //  flex:1,
  // marginBottom:800,
   height:'8%',
 //  width:'100%',
  // backgroundColor:'yellow',
  alignItems:'center',
  flexDirection:'row',
  paddingHorizontal:20,
  backgroundColor:'black'
  
},
logo:{
  width: 60,
  height: 60,
  borderRadius: 200 / 2
}
,
Logo1:{
    width: 250,
    height: 250,
    borderRadius: 200 / 2
  }
  ,
logo2:{
  width: 40,
  height: 40,
  borderRadius: 200 / 2,
  marginHorizontal:'38%'
},
text:{
  flexDirection:'row',
  alignItems:'center',
  fontSize:30,
  fontWeight:'900',
  justifyContent:'center',
  paddingLeft: 20,
  color:'white',
// margin:10,

},
Text:{
    
    alignItems:'center',
    fontSize:25,
    fontWeight:'bold',
    color:'orange',
    marginTop:2,
    paddingLeft: 20,
  // margin:10,


},
inside:{
alignItems:'center',


},
insidetext:{
flexDirection:'row',
paddingRight:240,
fontSize:20,
fontWeight:'900',
marginTop:40,  
  
// margin:10,
},
Text3:{
    
    fontSize:55,
    fontWeight:'bold',
    color:'white',
    marginLeft:16,
    marginTop:2,

},
flec:{
    padding:1,
    flexDirection:'row',
    marginRight:30,

},
Touch1:{
    backgroundColor:'orange',
    height:55,
    width:55,
    borderRadius:50,
    marginTop:10,
    marginLeft:30,
   
    },
    Logo:{
        marginTop:10,
        width: 130,
        height: 130,
        borderRadius: 200 / 2,
        marginBottom:10,
    },
    userdet:{
    
        alignItems:'center',
        fontSize:35,
        fontWeight:'bold',
        color:'orange',
        marginTop:10,
        paddingRight: 250,
      // margin:10,
    
    
    },
    Travel:{
        marginTop:180,
        marginLeft:140,
  borderRadius: 200 / 2,
    },
    enter:{
        borderRadius: 200 / 4,
        width: 130,
        height: 130,
        marginBottom:10,
    },
    Textea:{
       
        fontSize:100,
        fontWeight:'bold',
        color:'orange',
         marginVertical:-130,
         marginHorizontal:-80,
         borderRadius: 200 / 2,
         justifyContent:'space-between',
    }
    
    






})