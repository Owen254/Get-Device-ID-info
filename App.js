import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DeviceInfo from 'react-native-device-info'



function App(){
  const[deviceId,setDeviceId]=useState('');
  getUniqueNo=()=>{
     var id=DeviceInfo.getUniqueId;
     setDeviceId(id)
  }
       
  return(
    <View style={styles.container}>
        <Text>Your Mobile Unique No is: {deviceId} </Text>
        <TouchableOpacity style={styles.touch} onPress={getUniqueNo}>
          <Text style={styles.buttonText}>GET MOBILE UNIQUE NO</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
         flex:1,
         justifyContent:'center',
         alignItems:'center'
    },
    touch:{
      marginVertical:13,
      width:200,
      backgroundColor:'darkslateblue',
      borderRadius:25,
      paddingVertical:12,

    },
    buttonText:{
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'      
    }

})
export default App;