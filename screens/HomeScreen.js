import React, { Component } from 'react';  
import {  ScrollView, View, Image, Text, TextInput,Button, StyleSheet, StatusBar ,TouchableOpacity,Alert } from 'react-native';  

function HomeScreen({navigation}){
        return(
            <View style={styles.container}>
            <View style={styles.con1}>
            <Text style={styles.title}>
            My Quiz

            </Text>

            </View>
            <View style={styles.bannercon}>
            <Image style={styles.banner} source={require("../images/quiztime.jpg")} resizeMode='cover' />

            </View>
            <TouchableOpacity onPress={()=> navigation.navigate ("ChooseSubject")} style={styles.btn}>
            <Text style={styles.btntxt}> Start</Text>

            </TouchableOpacity>

            </View>
        );
    
}
const styles = StyleSheet.create({
    con1:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20
    },
    title:{
        fontSize:36,
        fontWeight:'700',
        color:'darkred',

    },
    banner:{
        height:300,
        width:300
    },
    bannercon:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        marginBottom:30

    },
    btn:{
        width:'90%',
        backgroundColor:'#1A759F',
        padding:20,
        borderRadius:16,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:20,
        marginBottom:20,

    },
    btntxt:{
        fontSize:20,
        fontWeight:'600',
        color:'white',
        textAlign:'center'

    },
    image:{
        marginHorizontal:150,
        marginRight:30,
        position:"absolute",
        top:40,  
        flex:1,
    },
    
    container: {
        paddingTop:20,
        paddingHorizontal:20,
        height:'100%',
        backgroundColor:'#D7ECFE',
        borderTopLeftRadius:120
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