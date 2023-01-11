import React, { Component } from 'react';  
import {  ScrollView, View, Image, Text, TextInput,Button, StyleSheet, StatusBar ,TouchableOpacity,Alert } from 'react-native';  

function HomeScreen({navigation}){
        return(
            <View style={styles.container}>
            <Text style={styles.header}> My Quiz</Text>
            <View style={styles.tester}>
            <Text style={styles.tester}> Start Testing your knowledge with My Quiz App </Text>

            </View>
            
            <View style={styles.imagecon}>
            <Image style={styles.image} source={require("../images/quiz.png")} />

            </View>
            
            <Text style={styles.subject}>Choose a subject:</Text>

            <View style={styles.viewsubs1} >
            <TouchableOpacity onPress={()=>navigation.navigate("Quiz")}>
        <Text style={styles.text}>Mathematics</Text>
      </TouchableOpacity>


            </View>
            <View style={styles.viewsubs2} >
            <TouchableOpacity onPress={()=>navigation.navigate("Quiz")}>
        <Text style={styles.text}>English</Text>
      </TouchableOpacity>


            </View>

            <View style={styles.viewsubs3} >
            <TouchableOpacity onPress={()=>navigation.navigate("Quiz")}>
        <Text style={styles.text}>Physics</Text>
      </TouchableOpacity>


            </View>



            </View>

        );
    
}
const styles = StyleSheet.create({
    container: {
      
      backgroundColor:"aliceblue",
      height:"100%"
    },
    header:{
        fontSize:30,
        fontWeight:"bold",
        color:"darkred",
        alignItems:"center",
        textAlign:"center",
        fontFamily:"fantasy",
    },
    tester:{
        fontSize:17,
        fontWeight:"bold",
        color:"black",
        marginTop:15,
        marginBottom:15,
    },
    subject:{
        textAlign:"center",
        fontSize:25,
        fontWeight:"bold",
        color:"black",
        marginTop:20,

    },
    imagecon:{
        alignItems:"center",
        marginTop: 10
    },
    viewsubs1:{
        backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "80%",
    height: 90,
    marginBottom: 20,
    marginTop:30,
    alignItems:"center",
    justifyContent:"center",
    marginLeft:38,

    },

    viewsubs2:{
        borderRadius: 30,
    width: "80%",
    height: 90,
    marginBottom: 20,
    marginTop:30,
    alignItems:"center",
    justifyContent:"center",
    marginLeft:38,
    backgroundColor:"deepskyblue"

    },
    viewsubs3:{
        borderRadius: 30,
    width: "80%",
    height: 90,
    marginBottom: 20,
    marginTop:30,
    alignItems:"center",
    justifyContent:"center",
    marginLeft:38,
    backgroundColor:"fuchsia",

    },

    text:{
        fontSize:20,
        fontWeight:"bold",
        color:"black",
    }

})
export default HomeScreen