import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  Dimensions,

  

} from 'react-native';
import { color } from 'react-native-reanimated';


const SplashScreen =({navigation})=>{
 return(

    <View >
        <ScrollView>

            <View >
            <Image style={styles.image} source={require("../images/blogger.png")} />
            </View>
            <View style={{
                width:'100%',
                height:800,
                backgroundColor:'aliceblue',
                marginTop:150,
                borderTopLeftRadius:150,
                flex:0.7,
                elevation:100
            }}>
                <Text style={{
                    fontSize:35,
                    color:'white',
                   marginHorizontal:20,
                    marginTop:60,
                    textAlign:'center',
                    fontFamily:'fantasy',
                    color:"black"
                    
                }}>
                    My Quiz

                </Text>

                <TouchableOpacity style={styles.Registerbtn1} onPress={() => navigation.navigate('Login')}> 
                <Text style={styles.RegisterBtnTxt1}>Log In </Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.Registerbtn2} onPress={() => navigation.navigate('Register')}> 
                <Text style={styles.RegisterBtnTxt2}>SignUp</Text>
                 </TouchableOpacity>
            
                 <Text style={{
                    fontSize:15,
                    color:'white',
                   marginHorizontal:20,
                    marginTop:200,
                    textAlign:'center',
                    color:'black'
                    
                }}>
                   Try Your knowledge Now!

                </Text>
                

            </View>
        </ScrollView>
        
    </View>
 );
}

const styles = StyleSheet.create({
image:{
    marginHorizontal:150,
    marginRight:30,
    position:"absolute",
    top:40,  
    flex:1,
    
    
},
container:{
    backgroundColor:"black"

},

Registerbtn1: {
    width: "70%",
    height:50,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 120,
    backgroundColor: "black",
    borderColor:'white',
    borderWidth:1 ,
    marginHorizontal:65,
    
},

Registerbtn2: {
    width: "70%",
    height:50,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    backgroundColor: "white",
    borderWidth:1 ,
    marginHorizontal:65,
},
  
  
  RegisterBtnTxt1:{
    color:"white",
    fontSize:24,
    fontWeight:'bold'
  },

  RegisterBtnTxt2:{
    color:"black",
    fontSize:24,
    fontWeight:'bold'
  },

    container: {   
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },

});

export default SplashScreen;