import React, { Component } from 'react';  
import {  ScrollView, View, Image, Text, TextInput,Button, StyleSheet, StatusBar ,TouchableOpacity,Alert } from 'react-native';  

function AdminLayout({navigation}){
        return(
            <View style={styles.container}>
          
            <View style={styles.header}>
            
              
      
              <Text style={{fontWeight:'bold' ,fontSize:34, color:'darkred',textAlign:'center', fontFamily:"fantasy"}} > 
                 My Quiz
              </Text>

              <Text style={{fontWeight:'bold' ,fontSize:25, color:'black', textAlign:'center', marginTop:30, fontFamily:"fantasy", color:"black"}} > 
                 Choose a Subject
              </Text>
             
            </View>

         

    <View style={{
              flexDirection:'row',
              flexWrap:'wrap',
              marginLeft: 15,
              marginTop: 30
            }}>
               <TouchableOpacity onPress={()=>navigation.navigate("CreateQuiz")}>
            <View style={styles.card} >
            
          
            <Text style={styles.productTxt}>Mathematics</Text>
            
           
            </View>
            </TouchableOpacity>  
            <TouchableOpacity onPress={()=>navigation.navigate("CreateQuiz")}>
            <View style={styles.card2} >
            
            
            <Text style={styles.productTxt}>English</Text>
            
           
            </View>
            </TouchableOpacity>  


            </View>

            <View style={{
              flexDirection:'row',
              flexWrap:'wrap',
              marginLeft: 15
            }}>
               <TouchableOpacity onPress={()=>navigation.navigate("CreateQuiz")}>
            <View style={styles.card1} >
            
          
            <Text style={styles.productTxt}>Physics</Text>
            
           
            </View>
            </TouchableOpacity>  
            <TouchableOpacity onPress={()=>navigation.navigate("CreateQuiz")}>
            <View style={styles.card3} >
            
            
            <Text style={styles.productTxt}>Intelligence</Text>
            
           
            </View>
            </TouchableOpacity>  


            </View>
            </View>

        
        );
    
}
const styles = StyleSheet.create({
    container: {
      backgroundColor:"#D7ECFE",
      height:"100%"
    
     
    },

    header:{
        marginTop:20,
        
        justifyContent:'space-between',
        
     },

     productslist:{
        flexDirection:'row',
        marginTop:30,
        justifyContent:'space-between'
      
       },
       listTxt:{
        color:'black',
        letterSpacing:1,
        fontSize:13,
        
       }    ,
       card:{
        height:150,
        width:150,
        borderRadius:10,
        marginHorizontal:20,
        backgroundColor:'#FFC0CB',
        padding:15,
        marginBottom:10,
        marginTop:20,  
       },
       card2:{
        height:150,
        width:150,
        borderRadius:10,
        marginHorizontal:20,
        backgroundColor:'deepskyblue',
        padding:15,
        marginBottom:10,
        marginTop:20,  
       },
       card1:{
        height:150,
        width:150,
        borderRadius:10,
        marginHorizontal:20,
        backgroundColor:'fuchsia',
        padding:15,
        marginBottom:10,
        marginTop:20,  
        marginHorizontal:20,
       },
       card3:{
        height:150,
        width:150,
        borderRadius:10,
        marginHorizontal:20,
        backgroundColor:'orange',
        padding:15,
        marginBottom:10,
        marginTop:20,  
       },
       productTxt:{
        fontWeight:'bold',
        fontSize:15,
        marginTop:14,
        
        color:'black',
        marginBottom:24,
        textAlign:'center'
    
      },
      productTxt1:{
        fontWeight:'bold',
        fontSize:15,
        marginTop:14,
        
        color:'black',
        marginBottom:24,
        textAlign:'center'
    
      },
    
})
export default AdminLayout