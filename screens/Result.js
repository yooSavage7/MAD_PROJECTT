import React, { Component } from 'react';  
import {  ScrollView, View, Image, Text, TextInput,Button, StyleSheet, StatusBar ,TouchableOpacity,Alert } from 'react-native';  

function Result(){
        return(
            <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.headertext}>
            Result:

            </Text>


            </View>
            <View style={styles.imagecon}>
            <Image style={styles.image} source={require("../images/choose.png")} />

            </View>
            <View style={styles.body}>
                <Text style={styles.bodytext}>Your Score is 100%:</Text>
            </View>
        

            </View>
        );
    
}
const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      alignItems: "center",
      backgroundColor:"#f0f8ff",
      width:"100%",
      height:"100%",
    },
    headertext:{
        fontSize:34,
        fontWeight:"600",
        color:"darkred",
        textAlign:"center",

    },
    imagecon:{
        justifyContent:"center",
        alignItems:"center",
        marginVertical:10,

    },
    header:{
        marginVertical:10,
    },
    body:{
        marginTop:20,

    },
    bodytext:{
        fontSize:20,
        fontWeight:"900",
        marginTop:40,
        color:"red",
        
    }
})
export default Result
